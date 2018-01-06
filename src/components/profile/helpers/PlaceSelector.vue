<template>
  <div class="place">
    <ul>
      <li>
        <app-country-selector />
      </li>
      <li>
        <label></label>
        <input type="text"  placeholder="City you want to live">
      </li>
    </ul>
  </div>
</template>

<script>
  import CountrySelector from './CountrySelector.vue'
  // import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        country: ''
      }
    },
    components: {
      appCountrySelector: CountrySelector
    }
    // methods: {
    //   ...mapActions({
    //     setUserCountry: 'setUserNationality'
    //   }),
    //   sendUserData () {
    //     const payload = {
    //       name: this.name,
    //       lastname: this.lastname
    //     }
    //     this.setUserCountry(payload)
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
  .place {
    grid-column: 2 / span 7;
    grid-row: 2;
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
      li {
        input {
          width: 17rem;
          height: 2rem;
          padding-left: .7rem;
          font-size: 1rem;
          border: 2px solid #ccc;
          border-radius: 3px;
          background-color: #fff;
        }
        input:focus {
          outline: 0;
          border: 2px solid #48C2AC;
        }
      }
    }
  }
</style>
