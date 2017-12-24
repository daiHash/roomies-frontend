<template>
  <header>
    <nav>
      <h2>Roomies</h2>
      <ul>
        <div v-if="!isLoggedIn">
          <li><router-link :to="{ name: 'Login'}">Login</router-link></li>
          <li><router-link :to="{ name: 'Register' }">Signup</router-link></li>
        </div>
        <div v-else>
          <li><a href="#" @click="logout">Logout</a></li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import Storage from '../../utils/storage'

export default {
  data () {
    return {
      isLoggedIn: Storage.userIsLoggedIn()
    }
  },
  methods: {
    logout () {
      Storage.removeUserCredentials()
      this.$router.go({name: 'Home'})
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    nav {
      margin: 0;
      display: grid;
      grid-template-columns: 3fr 1fr;
      justify-content: center;
      width: 85vw;
      h2 {
        margin: 1rem 0 0 3rem;
        font-size: 5rem;
        font-family: 'miraculous&christmas';
        font-weight: 200;
      }
      ul {
        div {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          li {
            width: 100px;
            margin-top: 2rem;
          }
        }
      }
    }
  }
</style>
