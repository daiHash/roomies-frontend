<template>
  <div class="main-img">
    <app-profile></app-profile>
  </div>
</template>

<script>
import Profile from '../user/Profile.vue'

export default {
  components: {
    appProfile: Profile
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
