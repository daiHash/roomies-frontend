<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home'}">
        <h2>Roomies</h2>
      </router-link>
      <div class="not-loggedin-header" v-if="!isLoggedIn">
        <ul>
          <li>
            <a href="#about"
              v-smooth-scroll
              @click="toHome">
              Roomiesとは？
            </a>
          </li>
          <li><router-link :to="{ name: 'Login'}">ログイン</router-link></li>
          <li><router-link :to="{ name: 'Register' }">新規登録</router-link></li>
        </ul>
      </div>
      <div class="loggedin-header" v-else>
        <ul class="dropdown">
          <li class="account">
            <h2>Hello!</h2>
            <!-- <a href="#" @click="userLogout" class="logout-btn">Logout</a> -->
            <span class="dropdown-caret"></span>
            <ul class="dropdown-content">
              <router-link :to="{ name: 'CreateProfile' }" v-if="!hasProfile">
                <li>プロフィール作成</li>
              </router-link>
              <router-link :to="{ name: 'UserProfile', params: {id: userId} }" v-else>
                <li>プロフィール画面へ</li>
              </router-link>
              <a href="#" @click="userLogout" class="logout-btn">
                <li>ログアウト</li>
              </a>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Storage from '../../utils/storage'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isLoggedIn: Storage.userIsLoggedIn(),
      userId: Storage.userId(Storage.getAccessToken()),
      hasProfile: false
    }
  },
  created: function () {
    this.getProfile()
  },
  methods: {
    ...mapActions({
      logout: 'userLogout'
    }),
    userLogout () {
      this.logout()
      this.$router.push({name: 'Home'}, this.$router.go({name: 'Home'}))
    },
    toHome () {
      const path = this.$route.path
      if (path !== '/') {
        this.$router.push({ name: 'Home' })
      }
    },
    getProfile () {
      this.axios.get(`profiles/${this.userId}`)
      .then(response => {
        if (response.data.length === 0) {
          console.log('Create a profile to get started')
          this.hasProfile = false
        } else {
          this.hasProfile = true
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
  $bg-color: #48C2AC;
  $logo-color: #fff;
  $header-font-color: #2c3e50;
  $light-gray: #F7F7F7;

  header {
    background-color: $bg-color;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    nav {
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      width: 85vw;
      a {
        width: 200px;
        h2 {
          margin: 1rem 0 1rem 3rem;
          font-size: 4rem;
          font-family: 'miraculous&christmas';
          font-weight: 200;
          color: $logo-color;
        }
      }
      .not-loggedin-header {
        ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          // grid-column-gap: 1rem;
          li {
            width: 150px;
            margin-top: 1.5rem;
            a {
              font-size: .6rem;
              color: $header-font-color;
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
      .loggedin-header {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        .dropdown {
          grid-column: 3;
          display: flex;
          .account {
            &:hover > .dropdown-content  {
              display: block;
            }
            &:hover > .dropdown-caret {
              display: inline-block;
              content: "";
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              position: absolute;
              top: 70px;
              right: 220px;
              cursor: pointer;
            }
            .dropdown-content  {
              background-color: #fff;
              position: absolute;
              overflow: hidden;
              top: -20px;
              right: 170px;
              min-width: 140px;
              border-radius: 4px;
              border: none;
              transition: all .3s;
              transform: translateY(100px);
              padding: 0;
              display: none;
              a {
                li {
                  padding: 1rem;
                  text-align: left;
                  color: $header-font-color;
                  transition: all .3s;
                  &:hover {
                    background-color: rgba(72, 194, 172, 0.2);
                  }
                  &:first-child {
                    border-bottom: 1px solid $light-gray;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
