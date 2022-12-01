export type EmailErrors = {
   firstName: 'Missing first name'
   lastName: 'Missing last name'
   email: 'Missing email'
   message: 'Missing message'
}

export type EmailResponse = {
   errors: Partial<EmailErrors>
   success: boolean
   emails: {
      info: number
      response: number
   }
}
