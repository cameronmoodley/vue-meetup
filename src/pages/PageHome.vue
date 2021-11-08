<template>
  <div>
    <AppHero />
    <div class="container">
      <section class="section">
        <div class="m-b-lg">
          <h1 class="title is-inline">Featured Meetups in "Location"</h1>
          <AppDropdown />
          <button class="button is-primary is-pulled-right m-r-sm">
            Create Meetups
          </button>
          <button class="button is-primary is-pulled-right m-r-sm">All</button>
        </div>
        <div class="row columns is-multiline">
          <!-- thing here -->
          <MeetupItem
            v-for="meetup in meetups"
            :key="meetup._id"
            :meetup="meetup"
          />
        </div>
      </section>
      <section class="section">
        <div>
          <h1 class="title">Categories</h1>
          <div class="columns cover is-multiline is-mobile">
            <!-- <--Category Comes here -->
            <CategoryItemVue
              v-for="category in categories"
              :key="category._id"
              :category="category"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CategoryItemVue from '../components/CategoryItem.vue'
import MeetupItem from '../components/MeetupItem.vue'
export default {
  components: { CategoryItemVue, MeetupItem },
  data() {
    return {
      meetups: [],
      categories: []
    }
  },

  created() {
    axios
      .all([axios.get('/api/v1/meetups'), axios.get('/api/v1/categories')])
      .then(
        axios.spread((meetups, categories) => {
          console.log(meetups.data)
          this.meetups = meetups.data
          this.categories = categories.data
        })
      )
  }
}
</script>

<style scoped></style>
