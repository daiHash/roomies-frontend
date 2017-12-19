<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view ></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  html, body {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }

  section {
    min-height: 65vh;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

</style>
