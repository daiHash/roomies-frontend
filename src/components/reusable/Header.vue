<template>
  <header>
    <nav>
      <h2>Roomies</h2>
      <ul>
        <li><router-link :to="{ name: 'Login'}">Login</router-link></li>
        <li><router-link :to="{ name: 'Register' }">Signup</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  header {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  nav {
    margin: 0;
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: center;
    width: 80vw;
  }

  h2 {
    margin: 1rem 0 0 3rem;
    align-items: start;
    font-size: 5rem;
    font-family: 'miraculous&christmas';
    font-weight: 200;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ul li {
    margin-top: 2rem;
  }
</style>
