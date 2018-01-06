<template>
  <div>
    <div class="main-img">
      <!-- <app-profile></app-profile> -->
    </div>

    <router-link :to="{ name: 'CreateProfile'}">Create</router-link>
  </div>


</template>

<script>
import Profile from '../profile/Profile.vue'
// import Storage from '../../utils/storage/index'

export default {
  components: {
    appProfile: Profile
  },
  created: function () {
    // this.getProfile()
  },
  methods: {
    getProfile () {
      // const userId = Storage.getUserId(Storage.getAccessToken())

      this.axios.get(`profiles/20`)
      .then(response => {
        if (response.data.length === 0) {
          console.log('Create a profile to get started')
        } else {
          console.log(response.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-img {
    background-image: url('../../assets/rm8.jpg');
    background-position: center;
    background-size: cover;
    min-height: 75vh;
    min-width: 100vw;
  }
</style>
