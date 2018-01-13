<template>
  <div class="gender">
    <ul>
      <h3>Gender</h3>
      <li>
        <input id="female" type="radio" name="gender" value="女" v-model="gender" required />
        <label for="female">女</label>
      </li>

      <li>
        <input id="male" type="radio" name="gender" value="男" v-model="gender" required />
        <label for="male">男</label>
      </li>
    </ul>
  </div>
</template>

<script>
  // import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        gender: ''
      }
    },
    methods: {
      // ...mapActions({
      //   userData: 'setUserNameAndLastname'
      // }),
      // sendUserData () {
      //   const payload = {
      //     name: this.name,
      //     lastname: this.lastname
      //   }
      //   this.userData(payload)
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .gender {
    grid-column: 2 / span 5;
    grid-row: 4;
    ul {
      padding: 0;
      li {
        margin-bottom: .5rem;
        label {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
