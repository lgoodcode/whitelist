import { Grid, TextField, Box, Button, CircularProgress, Alert } from '@mui/material'
import DOMPurify from 'dompurify'
import { post } from 'app/api'
import useForm, { type Validations } from 'helpers/useForm'
import type { EmailResponse } from 'types/Email'

type Contact = Record<'firstName' | 'lastName' | 'email' | 'phone' | 'message', string>

const regexp = {
   name: /^[a-zA-Z ]+$/,
   email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
   phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
   message: /[a-zA-Z]+/
}

const validations: Validations<Contact> = {
   firstName: {
      required: {
         value: true,
         message: 'Must enter your first name'
      },
      pattern: {
         value: regexp.name,
         message: 'Please enter a valid name'
      }
   },
   lastName: {
      required: {
         value: true,
         message: 'Must enter your last name'
      },
      pattern: {
         value: regexp.name,
         message: 'Please enter a valid name'
      }
   },
   email: {
      required: {
         value: true,
         message: 'Must enter your email address'
      },
      pattern: {
         value: regexp.email,
         message: 'Please enter a valid email address'
      }
   },
   phone: {
      pattern: {
         value: regexp.phone,
         message: 'Please enter a valid phone number'
      }
   },
   message: {
      required: {
         value: true,
         message: "Please enter a brief message of what you're inquiring on"
      },
      pattern: {
         value: regexp.message,
         message: 'Please enter a valid message'
      }
   }
}

function ContactForm() {
   const onSubmit = async (data: Partial<Contact>): Promise<boolean> => {
      try {
         return (await post<EmailResponse>('/contact', data)).data.success
      } catch (err) {
         console.error(err)
         return false
      }
   }

   const { status, errors, handleChange, handleBlur, handleSubmit } = useForm<Contact>({
      validations,
      onSubmit,
      sanitizeFn: DOMPurify.sanitize,
      validateBlurAfterSubmit: true
   })

   return (
      <form noValidate onSubmit={(e) => handleSubmit(e)} data-testid="form">
         <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
               <TextField
                  fullWidth
                  required
                  color="info"
                  data-testid="firstName"
                  label="First Name"
                  variant="outlined"
                  onChange={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  InputLabelProps={{
                     style: { fontFamily: 'Titillium Web' }
                  }}
               />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField
                  fullWidth
                  required
                  color="info"
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  onChange={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  InputLabelProps={{
                     style: { fontFamily: 'Titillium Web' }
                  }}
               />
            </Grid>
            <Grid item xs={12}>
               <TextField
                  fullWidth
                  required
                  color="info"
                  id="email"
                  label="Email Address"
                  variant="outlined"
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputLabelProps={{
                     style: { fontFamily: 'Titillium Web' }
                  }}
               />
            </Grid>
            <Grid item xs={12}>
               <TextField
                  fullWidth
                  id="phone"
                  data-testid="non-required"
                  color="info"
                  label="Phone Number"
                  variant="outlined"
                  onChange={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputLabelProps={{
                     style: { fontFamily: 'Titillium Web' }
                  }}
               />
            </Grid>
            <Grid item xs={12}>
               <TextField
                  fullWidth
                  required
                  id="message"
                  color="info"
                  label="Message"
                  multiline={true}
                  rows={5}
                  placeholder="Describe what you're interested in..."
                  onChange={handleChange('message')}
                  onBlur={handleBlur('message')}
                  error={!!errors.message}
                  helperText={errors.message}
                  InputLabelProps={{
                     style: { fontFamily: 'Titillium Web' }
                  }}
               />
            </Grid>
         </Grid>

         <Box
            width="100%"
            mt={4}
            display="flex"
            justifyContent={{
               xs: 'center',
               lg: 'flex-end'
            }}
         >
            <Box display="flex" alignItems="center" mr="auto">
               {status === 'success' && (
                  <Alert severity="success" variant="filled">
                     Message was sent successfully!
                  </Alert>
               )}
               {status === 'failure' && (
                  <Alert severity="error" variant="filled">
                     Message failed to send!
                  </Alert>
               )}
            </Box>

            <Button
               type="submit"
               color="tertiary"
               variant="contained"
               sx={{ py: 1, px: 4, boxShadow: 5 }}
            >
               {status === 'loading' ? (
                  <CircularProgress color="inherit" size={30} />
               ) : (
                  'Submit'
               )}
            </Button>
         </Box>
      </form>
   )
}

export default ContactForm
