import { helpers } from 'vuelidate/lib/validators'

export const supportedFileType = (valueFromInput) => {
  if (!helpers.req(valueFromInput)) {
    return true
  }
  const allowedFormats = ['jpg', 'png', 'jpeg']
  const extension = valueFromInput.split('.').pop()
  return allowedFormats.includes(extension)
}
