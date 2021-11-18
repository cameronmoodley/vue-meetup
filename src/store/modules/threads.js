import Vue from 'vue'
import axios from 'axios'
import { axiosInstance } from '@/services/axios'

export default {
  namespaced: true,

  state: {
    items: []
  },
  actions: {
    fetchThreads({ state, commit }, meetupId) {
      return axios.get(`/api/v1/threads?meetupId=${meetupId}`).then((res) => {
        const threads = res.data
        commit(
          'setItems',
          { resource: 'threads', items: threads },
          { root: true }
        )
        return state.items
      })
    },
    postThread({ state, commit }, { title, meetupId }) {
      const thread = { title, meetup: meetupId }

      return axiosInstance.post('/api/v1/threads', thread).then((res) => {
        const createdThread = res.data
        const index = state.items.length

        commit(
          'addItemToArray',
          { item: createdThread, index, resource: 'threads' },
          { root: true }
        )

        return createdThread
      })
    },
    sendPost({ dispatch }, data) {
      return axiosInstance.post('/api/v1/posts', data).then((res) => {
        const createdPost = res.data
        dispatch('addPostToThread', createdPost)
        return createdPost
      })
    },
    addPostToThread({ state, commit }, data) {
      const indexOfThread = state.items.findIndex(
        (thread) => thread._id === data.thread
      )
      if (indexOfThread > -1) {
        const posts = state.items[indexOfThread].posts
        posts.unshift(data)
        commit('savePostsToThread', { posts, index: indexOfThread })
      }
    }
  },
  mutations: {
    savePostsToThread(state, { posts, index }) {
      Vue.set(state.items[index], 'posts', posts)
    }
  }
}
