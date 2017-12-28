<template>
  <div>
    <button type="button" @click="fetchProfiles">Profiles</button>
    <h3>{{ profiles }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      profiles: ''
    }
  },
  methods: {
    fetchProfiles () {
      this.axios.get('profiles')
      .then(response => {
        this.profiles = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="css">
</style>
