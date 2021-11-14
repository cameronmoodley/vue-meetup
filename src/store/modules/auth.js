import axios from 'axios'

export default {
  // You cant access these functions without namespaced
  namespaced: true,
  state: {
    user: null,
    isAuthResolved: false
  },
  getters: {
    authUser(state) {
      return state.user || null
    },
    isAuthenticated(state) {
      return !!state.user
    }
  },
  actions: {
    loginWithEmailAndPassword({ commit }, formData) {
      return axios.post('/api/v1/users/login', formData).then((res) => {
        const user = res.data
        commit('setAuthUser', user)
      })
    },
    registerUser(context, formData) {
      return axios.post('/api/v1/users/register', formData)
    },
    getAuthUser({ commit, getters }) {
      const authUser = getters['authUser']
      if (authUser) {
        return Promise.resolve(authUser)
      }

      const config = {
        headers: {
          'Cache-Control': 'no-cache'
        }
      }

      return axios
        .get('/api/v1/users/me', config)
        .then(({ data }) => {
          const user = data
          commit('setAuthUser', user)
          commit('setAuthState', true)
        })
        .catch((err) => {
          commit('setAuthUser', null)
          commit('setAuthState', true)
          return err
        })
    },
    logout({ commit }) {
      return axios
        .post('/api/v1/users/logout')
        .then(() => {
          commit('setAuthUser', null)
          return true
        })
        .catch((err) => {
          return err
        })
    }
  },
  mutations: {
    setAuthUser(state, user) {
      state.user = user
    },
    setAuthState(state, authState) {
      state.isAuthResolved = authState
    }
  }
}
