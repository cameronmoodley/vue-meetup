import Vue from 'vue'
import Vuex from 'vuex'

import meetups from './modules/meetups'
import threads from './modules/threads'
import categories from './modules/categories'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meetups,
    threads,
    categories,
    auth
  },
  // Simple functions to mutate state
  mutations: {
    setItems(state, { resource, data }) {
      state[resource].items = data
    },
    setItem(state, { resource, data }) {
      state[resource].item = data
    }
  }
})
