<template>
  <section>
    <form class="register-form" @submit.prevent="registerNewUser">
      <ul>
        <li>
          <label>Username</label> <br>
          <input
            type="text"
            placeholder="Username"
            v-model="username"
            autofocus
            required/>
        </li>
        <li>
          <label>Email</label> <br>
          <input
            type="email"
            placeholder="Email"
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,3}"
            v-model="email"
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
        <li>
          <label>Password Confirmation</label> <br>
          <input
            type="password"
            placeholder="Password Confirmation"
            v-model="passwordConfirmation"
            required/>
        </li>
        <li class="btn-container">
          <input class="form-btn" type="submit" value="新規登録">
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
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  created: function () {
    if (Storage.userIsLoggedIn()) {
      this.$router.push({name: 'Home'})
    }
  },
  methods: {
    ...mapActions({
      register: 'userRegister'
    }),
    registerNewUser () {
      const userData = {
        'name': this.username,
        'email': this.email,
        'password': this.password
      }
      this.axios.post('http://localhost:3000/v1/register', userData)
      .then(response => {
        this.register(response.data.access_token)
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
    .register-form {
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
            background-color: #2BF2C7;
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
