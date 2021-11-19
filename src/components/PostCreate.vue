<template>
  <!-- Create new post, handle later -->
  <form class="post-create">
    <!-- This is a custom directive -->
    <!-- <div v-with-warning:red.prevent="'What a nice day :)'"></div> -->
    <div class="field">
      <textarea
        v-model="text"
        v-auto-expand
        class="textarea textarea-post"
        placeholder="Write a post"
        rows="1"
      ></textarea>
      <button
        :disabled="!text"
        class="button is-primary m-t-sm"
        @click.prevent="sendPost"
      >
        Send
      </button>
    </div>
  </form>
  <!-- Create new post END, handle later -->
</template>
<script>
import autoExpand from '@/directives/autoExpand'

export default {
  directives: { autoExpand },
  props: {
    threadId: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      text: null
    }
  },
  computed: {
    meetup() {
      return this.$store.state.meetups.item
    }
  },
  methods: {
    sendPost() {
      this.$store
        .dispatch('threads/sendPost', {
          text: this.text,
          thread: this.threadId
        })
        .then((createdPost) => {
          this.$socket.emit('meetup/postSaved', {
            ...createdPost,
            meetup: this.meetup._id
          })
          this.text = ''
        })
    }
  }
}
</script>
<style scoped></style>
