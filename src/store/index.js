import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // Data lives here
  state: {
    meetups: [],
    categories: [],
    threads: [],
    meetup: {}
  },

  // Allows us to get data from state
  getters: {},
  // Actions are like methods in vue component. They should not mutate state.
  // Fetch data here, should resolved into data, use axios here.
  actions: {
    async fetchMeetups(context) {
      context.commit('setItems', { resource: 'meetups', data: [] })
      let { data } = await axios.get('/api/v1/meetups')
      context.commit('setItems', { resource: 'meetups', data })
      return context.state.meetups
    },

    // This one destructors context the one above doesnt
    async fetchCategories({ state, commit }) {
      let { data } = await axios.get('/api/v1/categories')
      commit('setItems', { resource: 'categories', data })
      return state.categories
    },

    async fetchSingleMeetup({ state, commit }, meetUpId) {
      commit('setItems', { resource: 'meetup', data: {} })
      let { data } = await axios.get(`/api/v1/meetups/${meetUpId}`)
      commit('setItems', { resource: 'meetup', data })
      return state.meetup
    },

    async fetchThreads({ state, commit }, meetUpId) {
      let { data } = await axios.get(`/api/v1/threads?meetupId=${meetUpId}`)
      commit('setItems', { resource: 'threads', data })
      return state.threads
    }
  },
  // Simple functions to mutate state
  mutations: {
    setItems(state, { resource, data }) {
      state[resource] = data
    }

    // setItem(state, { resource, data }) {
    //   state[resource] = data
    // }

    // Old functions
    // setMeetups(state, meetups) {
    //   state.meetups = meetups
    // },
    // setCategories(state, categories) {
    //   state.categories = categories
    // },
    // setSingleMeetup(state, meetup) {
    //   state.meetup = meetup
    // },
    // setThreads(state, threads) {
    //   state.threads = threads
    // }
  }
})
