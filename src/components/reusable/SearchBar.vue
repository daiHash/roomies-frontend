<template>
  <div class="searchbar-container">
    <input type="text" class="search-bar" placeholder="Search a roommate in Tokyo">
    <input type="button" class="search-btn" value="Search">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .searchbar-container {
    position: absolute;
    top: 500px;
    left: 470px;
    .search-bar {
      width: 25rem;
      height: 2.5rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      text-indent: 1rem;
      font-size: 1.2rem;
      vertical-align: bottom;
      outline: 0;
    }
    .search-btn {
      font-size: 1.2rem;
      width: 7rem;
      height: 2.8rem;
      border-radius: 5px;
      border: none;
      background-color: #FD6C5C;
      color: #fff;
      cursor: pointer;
    }
    .search-btn:focus {
      outline: 0;
    }
  }
</style>
