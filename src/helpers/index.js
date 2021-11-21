export const rejectError = ({ response = null }) => {
  let errMessage = 'Something went wrong'

  if (response && response.data && response.data.errors) {
    errMessage = response.data.errors.message
  }

  return Promise.reject(errMessage)
}

export const applyFilters = (url, filter) => {
  if (filter) {
    let filteredEntities = ''
    if (url.indexOf('?') === -1) {
      url += '?'
    } else {
      url += '&'
    }

    Object.keys(filter).forEach((key) => {
      filteredEntities += `${key}=${filter[key]}&`
    })

    if (filteredEntities.slice(-1) === '&') {
      filteredEntities = filteredEntities.slice(0, -1)
    }

    return url + filteredEntities
  }

  return url
}

export const processLocation = (loc) => {
  return loc
    .toLowerCase()
    .replace(/[\s,]+/g, '')
    .trim()
}
