<template>
  <div>
    <button type="button" @click="fetchProfiles">Profiles</button>
    <h3>{{profiles}}</h3>
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
      this.axios.get('profiles/4')
      .then(response => {
        this.profiles = response.data[0].id
        console.log(response)
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
