<template>
  <section>
    <form class="register-form">
      <ul>
        <li>
          <label>Username</label> <br>
          <input type="text" name="" placeholder="Username">
        </li>
        <li>
          <label>Email</label> <br>
          <input type="password" name="" placeholder="Email">
        </li>
        <li>
          <label>Password</label> <br>
          <input type="password" name="" placeholder="Password">
        </li>
        <li>
          <label>Password Confirmation</label> <br>
          <input type="password" name="" placeholder="Password Confirmation">
        </li>
        <li class="btn-container">
          <input class="form-btn" type="button" value="新規登録">
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

  .register-form {
    margin: 10rem 0;
    font-size: 1.5rem;
  }

  ul li {
    margin: 1.5rem 0;
  }

  .btn-container {
    text-align: center;
  }

  .form-btn {
    width: 20rem;
    padding: 3rem 0;
  }


</style>
