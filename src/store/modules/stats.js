import { axiosInstance } from '@/services/axios'

export default {
  namespaced: true,
  state: {
    meetups: {
      data: [],
      count: null
    },
    threads: {
      data: [],
      count: null
    },
    posts: {
      data: [],
      count: null
    }
  },
  actions: {
    fetchUserStats({ commit }) {
      axiosInstance.get('/api/v1/users/me/activity').then(({ data }) => {
        commit('setStats', data)
        return data
      })
    }
  },
  mutations: {
    setStats(state, stats) {
      return Object.assign(state, {}, stats)
    }
  }
}
