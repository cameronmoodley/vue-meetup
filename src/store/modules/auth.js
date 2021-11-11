export default {
  // You cant access these functions without namespaced
  namespaced: true,
  actions: {
    loginWithEmailAndPassword({ state, commit }, formData) {
      console.log(formData)
    },
    registerUser({ state, commit }, formData) {
      console.log(formData)
    }
  }
}
