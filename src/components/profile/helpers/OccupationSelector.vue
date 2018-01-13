<template>
  <div class="occupation">
    {{ setDefaultValue() }}
    <ul>
      <h3>Occupation</h3>
      <li>
        <input
          id="study"
          type="radio"
          name="occupation"
          value="1"
          v-model="occupation"
          @change="sendUserOccupation"
          :checked="userProfileData.occupation === '勉強'"/>
        <label for="study">勉強</label>
      </li>
      <li>
        <input
          id="work"
          type="radio"
          name="occupation"
          value="2"
          v-model="occupation"
          @change="sendUserOccupation"
          :checked="userProfileData.occupation === '仕事'"/>
        <label for="work">仕事</label>
      </li>
      <li>
        <input
          id="both"
          type="radio"
          name="occupation"
          value="3"
          v-model="occupation"
          @change="sendUserOccupation"
          :checked="userProfileData.occupation === '両方'"/>
        <label for="both">両方</label>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        occupation: ''
      }
    },
    computed: {
      ...mapGetters({
        userProfileData: 'userProfileData'
      })
    },
    methods: {
      ...mapActions({
        setOccupation: 'setUserOccupation'
      }),
      sendUserOccupation () {
        if (this.occupation === '1') {
          const occupation = '勉強'
          this.setOccupation(occupation)
        } else if (this.occupation === '2') {
          const occupation = '仕事'
          this.setOccupation(occupation)
        } else {
          const occupation = '両方'
          this.setOccupation(occupation)
        }
      },
      setDefaultValue () {
        if (this.userProfileData) {
          if (this.userProfileData.occupation === '勉強') {
            this.occupation = '1'
          } else if (this.userProfileData.occupation === '仕事') {
            this.occupation = '2'
          } else if (this.userProfileData.occupation === '両方') {
            this.occupation = '3'
          } else {
            this.occupation = ''
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .occupation {
    grid-column: 4 / span 4;
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
