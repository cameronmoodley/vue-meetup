import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: []
  },
  actions: {
    async fetchThreads({ state, commit }, meetUpId) {
      let { data } = await axios.get(`/api/v1/threads?meetupId=${meetUpId}`)

      //, { root: true } calls the mutation in the index file
      commit('setItems', { resource: 'threads', data }, { root: true })
      return state.threads.items
    }
  }
}
