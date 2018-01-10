<template>
  <section class="user-profile">
    <div class="profile-img">
      <img src="../../assets/rm9.jpg" width="300px" height="300px" alt="">
      <h3>{{ profile.first_name }} {{ profile.last_name }}</h3> <p>{{ age }}</p>

    </div>
    <div class="personal-info">
      <div class="profile-description">
        <h3>About Me</h3>
        <p>{{ profile.description }} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="nationality">
        <h3>Country</h3>
        <p>{{ profile.nationality }}</p>
      </div>
      <div class="occupation">
        <h3>Occupation</h3>
        <p>{{ profile.occupation }}</p>
      </div>
      <div class="is-smoker">
        <h3 v-if="!profile.is_smoker">I Am Not a Smoker</h3>
        <h3 v-else>I Am a Smoker</h3>
      </div>
      <input type="button" class="edit-btn" value="Edit">
    </div>
  </section>
</template>

<script>
  import DateHandler from '../../utils/date'

  export default {
    data () {
      return {
        profile: [],
        age: ''
      }
    },
    created: function () {
      this.getProfile()
    },
    methods: {
      getProfile () {
        const userId = this.$route.params.id

        this.axios.get(`profiles/${userId}`)
        .then(response => {
          if (response.data.length === 0) {
            console.log('Create a profile to get started')
          } else {
            this.profile = response.data[0]
            this.age = DateHandler.showAge(response.data[0].age)
            console.log(response.data[0])
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
  .user-profile {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 1fr);
    background-color: #FAFAFA;
    .profile-img {
      border: 1px solid #ccc;
      grid-column: 2 / span 10;
      grid-row: 2 / span 3;
      text-align: center;
      margin-bottom: 2rem;
      background-color: #fff;
      img {
        margin-top: 2rem;
        object-fit: cover;
      }
    }
    .personal-info {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(12, auto);
      background-color: #fff;
      border: 1px solid #ccc;
      grid-column: 2 / span 10;
      grid-row: 5 / span 3;
      text-align: center;
      .profile-description {
        grid-column: 2 / span 10;
        grid-row: 2;
      }
      .nationality {
        grid-column: 2 / span 3;
        grid-row: 3;
      }
      .occupation {
        grid-column: 5 / span 3;
        grid-row: 3;
      }
      .is-smoker {
        grid-column: 8 / span 3;
        grid-row: 3;
      }
      .edit-btn {
        grid-column: 5 / span 4 ;
        grid-row: 12;
        margin: 4rem 2rem 0 2rem;
        font-size: 1.5rem;
        height: 3rem;
        border-radius: 25px;
        cursor: pointer;
        background-color: #FD6C5C;
        color: #fff;
        border: none;
        margin-bottom: 3rem;
        transition: all .3s;
        &:hover, &:focus {
          background-color: #ee5a4a;
          outline: none;
        }
      }
    }
  }
</style>
