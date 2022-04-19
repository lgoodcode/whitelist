import { useState, type ChangeEvent, type FormEvent } from 'react'

// Exclusive OR (XOR) for types so that only regexp or a custom validator
// is used https://stackoverflow.com/a/60617060/17703865
export type Validation = {
   /** Determines if the field is required and the message to diplay if empty */
   required?: {
      value: boolean
      message: string
   }
} & (
   | {
        pattern: {
           value: RegExp
           message: string
        }
        custom?: never
     }
   | {
        pattern?: never
        /** Custom validation function if not using a regexp */
        custom: {
           isValid: (value: string) => boolean
           message: string
        }
     }
)

export type Validations<T> = Partial<Record<keyof T, Validation>>

export type ErrorRecord<T> = Partial<Record<keyof T, string>>

export type SubmitStatus = 'loading' | 'success' | 'failure' | 'none'

/**
 * @interface FormOptions
 * @member {Partial<T>} initialValues - An optional object where properties
 * are optional (can be empty) that consists of keys from the generic type
 * and string values
 * @member {Validations<T>} validations - An object that consists of the
 * Validation types onSubmit: The function to invoke with the data
 * @member {function} onSubmit - The function to invoke with the data
 * @member {function} sanitizeFn - The function used to sanitize user input
 * @member {boolean} validateBlurAfterSubmit - Only validate input on blur
 * once the form has been attempted to submit once
 */
export type FormOptions<T> = {
   initialValues?: Partial<T>
   validations?: Validations<T>
   onSubmit: (data: Partial<T>) => Promise<boolean>
   sanitizeFn?: (value: string) => string
   validateBlurAfterSubmit?: boolean
}

// Must pass in a type for the hook to be able to determine the keys and values
const useForm = <T extends Record<keyof T, unknown>>(options: FormOptions<T>) => {
   // Data will have the type of the object type we want from the form and
   // will set to the optional initialValues or an empty object, which we
   // will then have to assert the possible empty object to the generic type
   const [data, setData] = useState<T>((options?.initialValues ?? {}) as T)

   // Track the errors which will be a possibly empty object that will contain
   // keys from the data type passed in with string values for error messages
   const [errors, setErrors] = useState<ErrorRecord<T>>({})

   const [status, setStatus] = useState<SubmitStatus>('none')

   const [validated, setValidated] = useState(false)

   // Handles any change to the input elements by setting the data and
   // sanitizes the input, if a sanitize function is given.
   const handleChange = (key: keyof T) => (e: ChangeEvent<HTMLInputElement>) => {
      setData({
         ...data,
         [key]: options?.sanitizeFn ? options.sanitizeFn(e.target.value) : e.target.value
      })
   }

   const validate = (key: keyof T) => {
      const { required, pattern, custom } = options?.validations?.[key] ?? {}
      const value = data[key]
      let valid = true
      let error = ''

      // If not required and has no input - clear error
      if (!required && !value) {
         valid = true
         // We want the first error message to be the requirement because
         // it will probably fail the regexp test if empty
      } else if (required && required.value && !value) {
         valid = false
         error = required.message
         // If it has a regexp test - validate
      } else if (pattern && !pattern.value.test(value as string)) {
         valid = false
         error = pattern.message
         // If it has a custom validator - validate
      } else if (custom && !custom.isValid(value as string)) {
         valid = false
         error = custom.message
      }

      return {
         valid,
         error
      }
   }

   /**
    * Validates the input field when leaving focus of the element.
    *
    * Only validates if the specified field has an input value and is required.
    * Deletes the error and revalidates the input so that if there is no error,
    * it won't carry the previous error over when none exists
    *
    * @param key the key of the field to validate
    * @returns void
    */
   const handleBlur = (key: keyof T) => () => {
      // If no validations
      // OR validate on blur AND there is no input
      // OR validate on blur only after the form has attempted to submit is set
      // and hasn't attempted a submit
      if (
         !options?.validations ||
         (!options?.validateBlurAfterSubmit && !data[key]) ||
         (options?.validateBlurAfterSubmit && !validated)
      ) {
         return
      }

      // Reset the error for the key
      delete errors[key]

      const { valid, error } = validate(key)

      if (valid) {
         setErrors({ ...errors })
      } else {
         setErrors({ ...errors, [key]: error })
      }
   }

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (options?.validations) {
         if (!validated) {
            setValidated(true)
         }

         const { validations } = options
         const newErrors: Partial<Record<keyof T, string>> = {}
         let isValid = true

         for (const key in validations) {
            const { valid, error } = validate(key)

            if (!valid) {
               isValid = false
               newErrors[key] = error
            }
         }

         if (!isValid) {
            setStatus('none')
            setErrors(newErrors)
            return
         }
      }

      // Valid input, clear errors and submit data
      setErrors({})

      setStatus('loading')

      setStatus((await options.onSubmit(data)) ? 'success' : 'failure')
   }

   return {
      status,
      data,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
   }
}

export default useForm
