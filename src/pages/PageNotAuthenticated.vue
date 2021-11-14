<template>
  <div class="container">
    <ErrorView
      :title="'You are not authorized to view this page, please login'"
      :status="'401'"
      :navigate-to-page="'PageLogin'"
      :navigate-to-text="'Navigate to login'"
    />
  </div>
</template>

<script>
import ErrorView from '@/components/ErrorView'
export default {
  components: {
    ErrorView
  }
}
</script>

<style scoped></style>
