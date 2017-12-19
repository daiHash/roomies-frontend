<template>
  <section>
    <form class="login-form">
      <ul>
        <li>
          <label>Email</label> <br>
          <input type="email" name="" placeholder="Email">
        </li>
        <li>
          <label>Password</label> <br>
          <input type="password" name="" placeholder="Password">
        </li>
        <li class="btn-container">
          <input class="form-btn" type="button" value="ログイン">
        </li>
      </ul>
    </form>
  </section>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  section {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .login-form {
    margin: 10rem 0;
  }

  .form-btn {

  }
</style>
