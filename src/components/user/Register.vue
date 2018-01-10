<template>
  <section>
    <form class="register-form" @submit.prevent="registerNewUser">
      <ul>
        <li>
          <label>Username</label> <span class="required-sign">*</span> <br>
          <input
            type="text"
            placeholder="Username"
            v-model="username"
            autofocus
            required/>
            <div class="requirements">

            </div>
        </li>
        <li>
          <label>Email</label> <span class="required-sign">*</span> <br>
          <input
            type="email"
            placeholder="Email"
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,3}"
            v-model="email"
            required/>
            <div class="requirements">
              有効なメールアドレスでなければなりません <br>
              例： myemail@email.com
            </div>
        </li>
        <li>
          <label>Password</label> <span class="required-sign">*</span> <br>
          <input
            type="password"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            v-model="password"
            required/>
            <div class="requirements">
              8文字以上で1文字以上の数字、<br> 小文字アルファベット、<br>
              大文字アルファベットがそれぞれ含まれている <br>
              パスワードを入力してください
            </div>
        </li>
        <li>
          <label>Password Confirmation</label> <span class="required-sign">*</span> <br>
          <input
            type="password"
            placeholder="Password Confirmation"
            :pattern="password"
            v-model="passwordConfirmation"
            required/>
            <div class="requirements">
              パスワードが一致しません
            </div>
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
      register: 'userRegister',
      login: 'userLogin'
    }),
    registerNewUser () {
      const registerData = {
        'name': this.username,
        'email': this.email,
        'password': this.password
      }

      this.axios.post('register', registerData)
      .then(response => {
        console.log(response.data.message)
        this.userLogin()
      })
      .catch(error => {
        console.log(error)
      })
    },
    userLogin () {
      const loginData = {
        'email': this.email,
        'password': this.password
      }
      this.axios.post('login', loginData)
      .then(response => {
        this.login(response.data)
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
  $redColor: #FD6C5C;

  section {
    background-color: #FAFAFA;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    .register-form {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 3px;
      margin: 5rem 0;
      font-size: 1.3rem;
      ul {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0;
        li {
          padding-left: 5rem;
          margin: 1rem 0;
          // Input Validation Handling Styles
          > input[type="text"],
          > input[type="email"],
          > input[type="password"] {
            width: 20rem;
            height: 2.5rem;
            padding-left: .7rem;
            font-size: 1rem;
            border: 2px solid #ccc;
            border-radius: 3px;
            background-color: #fff;
            &:focus {
              outline: 0;
              border: 2px solid #48C2AC;
            }
            &::placeholder {
              font-size: 1rem;
              text-indent: .3rem;
            }
            &:invalid:not(:focus):not(:placeholder-shown) {
              background-color: #FEC0CB;
              border: solid 1px #FEC0CB;
            }

            &:invalid:focus:not(:placeholder-shown) {
              & ~ .requirements {
                max-height: 200px;
                padding: 30px 0 15px 0;
              }
            }
          }
        }
        .btn-container {
          .form-btn {
            font-size: 1.5rem;
            width: 21rem;
            height: 3rem;
            border-radius: 25px;
            cursor: pointer;
            background-color: $redColor;
            color: #fff;
            border: none;
            transition: all .3s;
          }
          .form-btn[type=submit]:hover,
          .form-btn[type=submit]:focus {
            background-color: #ee5a4a;
            outline: 0;
          }
        }
      }
    }
  }

  .required-sign {
    color: $redColor;
  }

  // Requirements Message Styles
  .requirements {
      padding: 0 30px 0 50px;
      color: #999;
      max-height: 0;
      transition: 0.28s;
      overflow: hidden;
      color: $redColor;
      font-style: italic;
      font-size: 1rem;
    }
</style>
