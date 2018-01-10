<template>
  <div class="username">
    <ul>
      <li>
        <label>First Name</label> <br>
        <input type="text"  placeholder="First Name" v-model="name" @input="sendUserData">
      </li>
      <li>
        <label>Last Name</label> <br>
        <input type="text"  placeholder="Last Name" v-model="lastname" @input="sendUserData">
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        name: '',
        lastname: ''
      }
    },
    methods: {
      ...mapActions({
        setUserData: 'setUserNameAndLastname'
      }),
      sendUserData () {
        const payload = {
          name: this.name,
          lastname: this.lastname
        }
        this.setUserData(payload)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .username {
    grid-column: 2 / span 7;
    grid-row: 1;
    align-self: end;
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
      li {
        label {
          line-height: 1;
          font-size: 1.4rem;
        }
        input {
          width: 17rem;
          height: 2rem;
          padding-left: .7rem;
          font-size: 1rem;
          border: 2px solid #ccc;
          border-radius: 3px;
          background-color: #fff;
          &:focus {
            outline: 0;
            border: 2px solid #48C2AC;
          }
        }
      }
    }
  }
</style>
