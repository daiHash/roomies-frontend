<template>
  <section>
    <form class="login-form" @submit.prevent="userLogin">
      <ul>
        <li>
          <label>Email</label> <br>
          <input
            type="email"
            placeholder="Email"
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,3}"
            v-model="email"
            autofocus
            required/>
        </li>
        <li>
          <label>Password</label> <br>
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            required/>
        </li>
        <li class="btn-container">
          <input class="form-btn" type="submit" value="ログイン">
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import Storage from '../../utils/storage'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  created: function () {
    if (Storage.userIsLoggedIn()) {
      this.$router.push({name: 'Home'})
    }
  },
  methods: {
    ...mapActions({
      login: 'userLogin'
    }),
    userLogin () {
      const userData = {
        'email': this.email,
        'password': this.password
      }
      this.axios.post('login', userData)
      .then(response => {
        this.login(response.data.access_token)
        this.$router.go({name: 'Home'})
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  section {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    .login-form {
      margin: 5rem 0;
      font-size: 1.3rem;
      ul {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0;
        li {
          padding-left: 3rem;
          margin: 1.5rem 0;
          input {
            width: 20rem;
            height: 2.5rem;
            padding-left: .7rem;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 3px;
            background-color: #fff;
          }
          input::placeholder {
            font-size: 1rem;
            text-indent: .3rem;
          }
        }
        .btn-container {
          text-align: center;
          .form-btn {
            font-size: 1.5rem;
            width: 21rem;
            height: 3rem;
            border-radius: 25px;
            cursor: pointer;
            transition: all .2s;
          }
          .form-btn:hover {
            background-color: #FD6C5C;
            color: #fff;
            border: none
          }
          .form-btn[type=submit]:focus {
            outline: 0;
          }
        }
      }
    }
  }
</style>
