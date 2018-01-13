<template>
  <section>
    <div class="profile-img">
      <img src="../../assets/rm9.jpg" width="300px" height="300px" alt="">
    </div>

    <div class="personal-info">
      <form class="" @submit.prevent="createProfile">
        <app-username-selector />
        <app-place-selector />
        <app-birthday-selector />
        <app-gender-selector />
        <app-is-smoker-selector />
        <app-occupation-selector />

        <div class="description">
          <label for="description">Description</label> <br>
          <textarea
            id="description"
            name="name"
            rows="8"
            cols="80"
            placeholder="Write about you to make other people get to know you better"
            v-model="description">
          </textarea>
        </div>
        <input type="submit" name="" value="Create Profile">
      </form>
    </div>
  </section>
</template>

<script>
  import UsernameSelector from './helpers/UsernameSelector.vue'
  import PlaceSelector from './helpers/PlaceSelector.vue'
  import BirthdaySelector from './helpers/BirthdaySelector.vue'
  import GenderSelector from './helpers/GenderSelector.vue'
  import OccupationSelector from './helpers/OccupationSelector.vue'
  import IsSmokerSelector from './helpers/IsSmokerSelector.vue'

  import { mapGetters } from 'vuex'

  // import DateHandler from '../../utils/date'

  export default {
    data () {
      return {
        description: ''
      }
    },
    computed: {
      ...mapGetters({
        userProfileData: 'userProfileData'
      })
    },
    components: {
      appUsernameSelector: UsernameSelector,
      appPlaceSelector: PlaceSelector,
      appBirthdaySelector: BirthdaySelector,
      appGenderSelector: GenderSelector,
      appOccupationSelector: OccupationSelector,
      appIsSmokerSelector: IsSmokerSelector
    },
    methods: {
      createProfile () {
        const profileData = {
          first_name: this.userProfileData.name,
          last_name: this.userProfileData.lastname,
          age: this.userProfileData.dateOfBirth,
          nationality: this.userProfileData.nationality,
          occupation: this.userProfileData.occupation,
          is_smoker: this.userProfileData.isSmoker,
          description: this.description
        }
        this.axios.post('profiles', profileData)
        .then(response => {
          console.log(response.data)
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
    padding: 5rem 0 5rem 0;
    background-color: #FAFAFA;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    align-self: center;
    .profile-img {
      background-color: #fff;
      border: 1px solid #ccc;

      text-align: center;
      min-height: 350px;
      min-width: 65vw;
      margin: 0 auto 3rem auto;
      img {
        width: 300px;
        height: 300px;
      }
    }
    .personal-info {
      form {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(6, auto);
        border: 1px solid #ccc;
        border-radius: 3px;
        margin: 0 auto;
        padding: 5rem 0;
        max-width: 65vw;
        background-color: #fff;
        .description {
          align-self: end;
          grid-column: 2 / span 6;
          grid-row: 5;
          margin: 2.5rem 0 0 0;
          label {
            // padding-left: 40px;
            line-height: 2;
            font-size: 1.4rem;
          }
          textarea {
            min-height: 150px;
            max-height: 300px;
            min-width: 700px;
            // max-width: 700px;
            // width: 600px;
            margin-left: 40px;
            padding: 1rem;
            margin: 0;
            font-size: 1rem;
            border: 2px solid #ccc;
            border-radius: 3px;
            background-color: #fff;
            resize: vertical;
            &:focus {
              outline: 0;
              border: 2px solid #48C2AC;
            }
          }
        }
        input[type="submit"] {
          align-self: end;
          grid-column: 3 / span 4;
          grid-row: 6;
          margin: 4rem 2rem 0 2rem;
          font-size: 1.5rem;
          height: 3rem;
          border-radius: 25px;
          cursor: pointer;
          background-color: #FD6C5C;
          color: #fff;
          border: none;
          transition: all .3s;
        }
        input[type="submit"]:hover, input[type="submit"]:focus {
          background-color: #ee5a4a;
          outline: none;
        }
      }
    }
  }
</style>
