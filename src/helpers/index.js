export const rejectError = ({ response = null }) => {
  let errMessage = 'Something went wrong'

  if (response && response.data && response.data.errors) {
    errMessage = response.data.errors.message
  }

  return Promise.reject(errMessage)
}
