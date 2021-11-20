<template>
  <div>
    <h1 class="title m-b-sm">What's your new Meetup location?</h1>
    <div class="m-b-lg">
      <span v-if="ipLocation && !wantToChangeLocation" class="subtitle">
        {{ ipLocation }}
      </span>
      <a v-if="ipLocation && !wantToChangeLocation" @click="changeLocation">
        (change location)
      </a>
      <a v-if="ipLocation && wantToChangeLocation" @click="changeLocation">
        (set default location)
      </a>
      <input
        v-if="!ipLocation || wantToChangeLocation"
        v-model="form.location"
        type="text"
        class="input"
        @blur="$v.form.location.$touch()"
        @input="emitFormData"
      />
      <div v-if="$v.form.location.$error">
        <span v-if="!$v.form.location.required" class="help is-danger">
          Location is required
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      wantToChangeLocation: false,
      form: {
        location: null
      }
    }
  },
  validations: {
    form: {
      location: { required }
    }
  },
  computed: {
    ipLocation() {
      return this.$store.getters['meta/location']
    }
  },
  created() {
    if (this.ipLocation) {
      this.form.location = this.ipLocation
      this.emitFormData()
    }
  },
  methods: {
    emitFormData() {
      this.$emit('stepUpdated', { data: this.form, isValid: !this.$v.$invalid })
    },
    changeLocation() {
      if (this.ipLocation) {
        this.form.location = this.ipLocation
        this.emitFormData()
      }

      this.wantToChangeLocation = !this.wantToChangeLocation
    }
  }
}

// @blur="$v.form.username.$touch()"
</script>

<style scoped></style>
