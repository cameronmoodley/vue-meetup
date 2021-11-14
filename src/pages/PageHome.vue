<template>
  <div>
    <div>
      <AppHero />
      <div v-if="pageLoader_resolveData" class="container">
        <section class="section">
          <div class="m-b-lg">
            <h1 class="title is-inline">Featured Meetups in "Location"</h1>
            <AppDropdown />
            <router-link
              class="button is-primary is-pulled-right m-r-sm"
              :to="{ name: 'PageMeetupCreate' }"
              v-if="user"
            >
              Create Meetups
            </router-link>

            <router-link
              class="button is-primary is-pulled-right m-r-sm"
              :to="'/find'"
            >
              All
            </router-link>
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
      <div v-else class="container">
        <AppSpinner />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryItemVue from '../components/CategoryItem.vue'
import MeetupItem from '../components/MeetupItem.vue'
import { mapActions, mapState, mapGetters } from 'vuex'
import pageLoader from '@/mixins/pageLoad'
export default {
  components: { CategoryItemVue, MeetupItem },
  mixins: [pageLoader],
  data() {
    return {
      isDataLoaded: false
    }
  },
  computed: {
    ...mapGetters({ user: 'auth/authUser' }),
    ...mapState({
      meetups: (state) => state.meetups.items,
      categories: (state) => state.categories.items
    })
  },
  async created() {
    await this.fetchMeetups()
    await this.fetchCategories()
    this.pageLoader_resolveData()
  },
  methods: {
    // maps functions to context of component
    ...mapActions('meetups', ['fetchMeetups']),
    ...mapActions('categories', ['fetchCategories'])
  }
}
</script>

<style scoped></style>
