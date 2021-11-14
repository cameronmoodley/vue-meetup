<template>
  <div class="column is-one-third">
    <!-- <router-link :to="`/meetups/${meetup._id}`" class="card large"> -->
    <div class="card large">
      <!-- this is better than the one above because it allows you to the URL -->
      <router-link
        :to="{ name: 'PageMeetupDetail', params: { id: meetup._id } }"
        class="card-meetup-link"
      >
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="meetup.image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="level m-b-md">
            <div class="media-left">
              <div class="level-item has-text-centered">
                <div>
                  <!-- start date -->

                  <p class="title">
                    {{ meetup.startDate | formatDate('MMM') }}
                  </p>
                  <p class="title">{{ meetup.startDate | formatDate('D') }}</p>
                  <!--  -->
                </div>
              </div>
            </div>
            <div class="media-content">
              <!-- meetup title -->
              <p class="title is-4 no-padding is-marginless">
                {{ meetup.title }}
              </p>
              <!-- meetup categort -->
              <span class="tag is-success">{{ meetup.category.name }}</span>
              <!-- location -->
              <p class="subtitle is-7">
                Tomorrow · {{ meetup.location }} · 05201
              </p>
            </div>
          </div>

          <!-- description -->
          <div class="content">
            {{ meetup.description }}
            <div class="background-icon">
              <span class="icon-barcode"></span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeetupItem',
  props: {
    meetup: {
      required: true,
      type: Object
    }
  }
}
</script>
<style lang="css">
.card-meetup-link {
  color: black;
}
</style>
