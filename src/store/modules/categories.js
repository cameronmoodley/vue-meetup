import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: []
  },
  actions: {
    async fetchCategories({ state, commit }) {
      let { data } = await axios.get('/api/v1/categories')
      commit('setItems', { resource: 'categories', data }, { root: true })
      return state.categories
    }
  }
}
