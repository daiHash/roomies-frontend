<template>
  <div class="smoker">
    {{ setDefaultValue() }}
    <ul>
      <h3>Do you smoke?</h3>
      <li>
        <input
          id="not-smoker"
          type="radio"
          name="is-smoker"
          value="1"
          v-model="status"
          @change="sendUserStatus"/>
        <label for="not-smoker">タバコ吸いません</label>
      </li>
      <li>
        <input
          id="smoker"
          type="radio"
          name="is-smoker"
          value="2"
          v-model="status"
          @change="sendUserStatus"/>
        <label for="smoker">タバコ吸います</label>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        status: ''
      }
    },
    computed: {
      ...mapGetters({
        userProfileData: 'userProfileData'
      })
    },
    methods: {
      ...mapActions({
        setUserStatus: 'setIsUserSmoker'
      }),
      sendUserStatus () {
        if (this.status === '1') {
          const status = false
          this.setUserStatus(status)
        } else if (this.status === '2') {
          const status = true
          this.setUserStatus(status)
        }
      },
      setDefaultValue () {
        if (this.userProfileData) {
          if (!this.userProfileData.isSmoker) {
            this.status = '1'
          } else {
            this.status = '2'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .smoker {
    grid-column: 6 / span 2;
    grid-row: 4;
    ul {
      padding: 0;
      li {
        margin-bottom: .5rem;
        label {
          font-size: 1.2rem;
        }
      }
    }
  }
</style>
