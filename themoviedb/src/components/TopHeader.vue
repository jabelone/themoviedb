<template>
  <div class="header">
    <img alt="header pattern" src="../assets/header.svg">
    <img alt="Vue logo" src="../assets/logo.svg">
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {
    movieId: String,
  },
};
</script>

<style scoped lang="scss">
  .header {
  }
</style>
