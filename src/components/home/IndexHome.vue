<template>
  <div>
    <div class="main-img">
      <!-- <h2>Are you looking for the ideal roommate?</h2> -->
      <h2>理想的なルームメイトのお探しですか？</h2>
      <p>ROOMIESで簡単に住みたい場所から検索</p>
      <app-search-bar></app-search-bar>
    </div>
    <app-about-section></app-about-section>
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
  $main-img-font-color: #fff;

  .main-img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('../../assets/rm3.jpg');
    background-position: center;
    background-size: cover;
    min-height: 90vh;
    min-width: 30vw;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(5, 1fr);
    h2 {
      grid-column: 2 / span 6;
      grid-row: 3;
      color: $main-img-font-color;
      margin: 1rem 0 0 0;
      text-align: center;
      font-size: 3rem;
      font-weight: 300;
    }
    p {
      grid-column: 2 / span 6;
      grid-row: 3;
      align-self: end;
      text-align: center;
      color: $main-img-font-color;
      margin: 0;
      font-size: 1.8rem;
    }
  }
</style>
