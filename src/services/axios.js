import axios from 'axios'

const axiosInstance = axios.create({
  timeout: 3000,
  headers: {
    authorization: `Bearer ${localStorage.getItem('vue-meetuper-jwt') || ''} `,
    'Cache-Control': 'no-cache'
  }
})

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('vue-meetuper-jwt') || ''
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function (err) {
    return Promise.rejecr(err)
  }
)

export default axiosInstance
