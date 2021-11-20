<template>
  <div>
    <button
      class="button is-primary is-outlined m-t-sm"
      @click="isModalOpen = !isModalOpen"
    >
      Update Info
    </button>
    <div :class="['modal', { 'is-active': isModalOpen }]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">User Profile</p>
          <button
            class="delete"
            aria-label="close"
            @click="isModalOpen = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <form>
            <div class="field">
              <label class="title">Name</label>
              <input v-model="user.name" class="input" />
            </div>
            <div class="field">
              <label class="title">Username</label>
              <input v-model="user.username" class="input" />
            </div>
            <div class="field">
              <label class="title">Avatar</label>
              <input v-model="user.avatar" class="input" />
            </div>
            <div class="field">
              <label class="title">Info</label>
              <input v-model="user.info" class="input" />
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click.prevent="emitUser">
            Save changes
          </button>
          <button class="button" @click="isModalOpen = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    authUser: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isModalOpen: false,
      user: { ...this.authUser }
    }
  },
  methods: {
    emitUser() {
      this.$emit('userSubmitted', {
        user: this.user,
        done: () => {
          this.isModalOpen = false
        }
      })
    }
  }
}
</script>
<style lang=""></style>
