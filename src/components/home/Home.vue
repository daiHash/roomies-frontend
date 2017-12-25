<template>
  <section>
    <div v-if="!isLoggedIn">
      <app-index-home></app-index-home>
    </div>

    <div v-else>
      <app-user-home></app-user-home>
    </div>
  </section>
</template>

<script>
  import Storage from '../../utils/storage'
  import UserHome from './UserHome.vue'
  import IndexHome from './IndexHome.vue'

  export default {
    name: 'Home',
    data () {
      return {
        isLoggedIn: Storage.userIsLoggedIn()
      }
    },
    components: {
      appUserHome: UserHome,
      appIndexHome: IndexHome
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
</style>
