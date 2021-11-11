import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: [],
    item: {}
  },

  actions: {
    async fetchMeetups({ state, commit }, meetUpId) {
      commit('setItems', { resource: 'meetups', data: [] }, { root: true })
      let { data } = await axios.get('/api/v1/meetups')
      commit('setItems', { resource: 'meetups', data }, { root: true })
      return state.meetups
    },

    async fetchSingleMeetup({ state, commit }, meetUpId) {
      commit('setItem', { resource: 'meetups', data: {} }, { root: true })
      let { data } = await axios.get(`/api/v1/meetups/${meetUpId}`)
      commit('setItem', { resource: 'meetups', data }, { root: true })
      return state.meetup
    }
  }
}
