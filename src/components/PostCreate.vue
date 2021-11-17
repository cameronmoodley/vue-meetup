<template>
  <!-- Create new post, handle later -->
  <form class="post-create">
    <!-- This is a custom directive -->
    <!-- <div v-with-warning:red.prevent="'What a nice day :)'"></div> -->
    <div class="field">
      <textarea
        class="textarea textarea-post"
        placeholder="Write a post"
        rows="1"
      ></textarea>
      <button :disabled="true" class="button is-primary m-t-sm">Send</button>
    </div>
  </form>
  <!-- Create new post END, handle later -->
</template>
<script>
import withWarning from '@/directives/withWarning.js'
export default {
  directives: { withWarning }
}
</script>
<style scoped></style>
