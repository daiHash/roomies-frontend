<template>
  <div>
    <div class="main-img">
      <!-- <h2>Are you looking for the ideal roommate?</h2> -->
      <h2>理想的なルームメイトのお探しですか？</h2>
      <p>ROOMIESで簡単に住みたい場所から検索</p>
      <app-search-bar></app-search-bar>
    </div>
    <app-about-section id="about"></app-about-section>
  </div>
</template>

<script>
  import SearchBar from '../reusable/SearchBar.vue'
  import About from './About.vue'

  export default {
    components: {
      appSearchBar: SearchBar,
      appAboutSection: About
    }
  }
</script>

<style lang="scss" scoped>
  .main-img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('../../assets/rm3.jpg');
    background-position: center;
    background-size: cover;
    min-height: 90vh;
    min-width: 100vw;
    position: relative;
    h2 {
      position: absolute;
      text-align: center;
      color: #fff;
      top: 310px;
      width: 100%;
      font-size: 3rem;
      font-weight: 300;
    }
    p {
      position: absolute;
      text-align: center;
      color: #fff;
      top: 400px;
      font-size: 1.8rem;
      width: 100%;
    }
  }
</style>
