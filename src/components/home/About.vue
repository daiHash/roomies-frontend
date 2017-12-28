<template>
  <div class="about" id="about">
    <div class="step1">
      <img src="../../assets/rm4.jpg" alt="">
      <div class="content">
        <h2>title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <div class="step2">
      <div class="content">
        <h2>title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <img src="../../assets/rm2.jpg" alt="">
    </div>
    <div class="step3">
      <img src="../../assets/rm6.jpg" alt="">
      <div class="content">
        <h2>title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .about {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    // grid-gap: 2rem;
    grid-row-gap: 8rem;
    place-items: center;
    padding: 8rem 0;
    width: 85vw;
    margin: 0 auto;
    .step1, .step2, .step3 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      img {
        width: 550px;
        height: auto;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
      }
    }
    .step2 img {
      margin-left: 62px;
    }
  }
</style>
