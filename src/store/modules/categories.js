import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: []
  },
  actions: {
    fetchCategories({ state, commit }) {
      axios.get('/api/v1/categories').then(({ data }) => {
        commit(
          'setItems',
          { resource: 'categories', items: data },
          { root: true }
        )
        return state.items
      })
    }
  }
}
