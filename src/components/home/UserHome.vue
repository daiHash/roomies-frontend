<template>
  <div>
    <div class="main-img">
    </div>
  </div>
</template>

<script>
import Storage from '../../utils/storage/index'

export default {
  data () {
    return {
      userId: Storage.userId(Storage.getAccessToken())
    }
  },
  components: {
  },
  created: function () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .main-img {
    background-image: url('../../assets/rm8.jpg');
    background-position: center;
    background-size: cover;
    min-height: 75vh;
    min-width: 100vw;
  }
</style>
