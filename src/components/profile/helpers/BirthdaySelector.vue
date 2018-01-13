<template>
  <div class="birthday">
    {{ setDefaultValue() }}
    <ul>
      <li>
        <label>生年月日</label>
        <input type="date" v-model="birthday" @input="sendUserBirthday">
      </li>
    </ul>
    <h2 v-if="isUnderage()" style="color:red;">You must be older than 18!</h2>
  </div>
</template>

<script>
  import DateHandler from '../../../utils/date'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        birthday: ''
      }
    },
    computed: {
      ...mapGetters({
        userProfileData: 'userProfileData'
      })
    },
    methods: {
      ...mapActions({
        setDateOfBirth: 'setUserBirthday'
      }),
      sendUserBirthday () {
        if (this.isUnderage()) {
          const date = ''
          this.setDateOfBirth(date)
        } else {
          const date = DateHandler.dateToString(this.birthday)
          this.setDateOfBirth(date)
        }
      },
      isUnderage () {
        const age = DateHandler.showAge(DateHandler.dateToString(this.birthday))
        if (age < 18) {
          return true
        } else {
          return false
        }
      },
      setDefaultValue () {
        if (this.userProfileData) {
          const parts = this.userProfileData.dateOfBirth.match(/(\d{4})(\d{2})(\d{2})/)
          if (parts === null || parts === undefined) return
          const date = `${parts[1]}-${parts[2]}-${parts[3]}`
          this.birthday = date
        } else {
          this.birthday = ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .birthday {
    grid-column: 2 / span 5;
    grid-row: 3;
    margin: 3rem 0;
    // align-self: center;
    ul {
      display: grid;
      grid-template-columns:  1fr 3fr;
      padding: 0;
      margin: 0;
      li {
        label {
          font-size: 1.4rem;
          // margin-left: 2rem;
        }
        input {
          grid-column: 1;
          width: 20rem;
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
