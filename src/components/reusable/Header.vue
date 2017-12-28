<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home'}">
        <h2>Roomies</h2>
      </router-link>
      <ul>
        <div v-if="!isLoggedIn">
          <li>
            <a href="#about"
              v-smooth-scroll
              @click="toHome">
              Roomiesとは？
            </a>
          </li>
          <li><router-link :to="{ name: 'Login'}">ログイン</router-link></li>
          <li><router-link :to="{ name: 'Register' }">新規登録</router-link></li>
        </div>
        <div v-else>
          <li><a href="#" @click="userLogout">Logout</a></li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import Storage from '../../utils/storage'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isLoggedIn: Storage.userIsLoggedIn()
    }
  },
  methods: {
    ...mapActions({
      logout: 'userLogout'
    }),
    userLogout () {
      this.logout()
      this.$router.go({name: 'Home'})
    },
    toHome () {
      const path = this.$route.path
      if (path !== '/') {
        this.$router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    background-color: #48C2AC;
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
        margin: 1rem 0 1rem 3rem;
        font-size: 4rem;
        font-family: 'miraculous&christmas';
        font-weight: 200;
        color: #fff;
      }
      ul {
        div {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          // grid-column-gap: 1rem;
          li {
            width: 150px;
            margin-top: 1.5rem;
            a {
              font-size: .6rem;
              color: #fff;
            }
            a:first-of-type {
              font-size: 1rem;
            }
          }
          li:nth-child(2) {
            width: 130px;
            margin-left: 25px;
          }
        }
      }
    }
  }
</style>
