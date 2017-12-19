<template>
  <section>
    <form class="register-form">
      <ul>
        <li>
          <label>Username</label> <br>
          <input type="text" name="" placeholder="Username" autofocus>
        </li>
        <li>
          <label>Email</label> <br>
          <input type="email" name="" placeholder="Email">
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

<style lang="scss" scoped>
  section {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    .register-form {
      margin: 5rem 0;
      font-size: 1.3rem;
      ul {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0;
        li {
          padding-left: 3rem;
          margin: 1.5rem 0;
          input {
            width: 20rem;
            height: 2.5rem;
            padding-left: .7rem;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 3px;
            background-color: #fff;
          }
          input::placeholder {
            font-size: 1rem;
            text-indent: .3rem;
          }
        }
        .btn-container {
          text-align: center;
          .form-btn {
            width: 21rem;
            height: 3rem;
            border-radius: 25px;
          }
          .form-btn[type=button]:focus {
            outline: 0;
          }
        }
      }
    }
  }










</style>
