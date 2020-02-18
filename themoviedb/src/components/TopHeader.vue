<template>
  <div class="header">
    <div class="logo-container">
      <img alt="Vue logo" class="header-logo" src="../assets/logo.svg">
    </div>
    <img alt="header pattern" class="header-bg-left" src="../assets/header.svg">
    <img alt="header pattern" class="header-bg-right" src="../assets/header.svg">
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
    position: relative;
    min-width: 275px;
    width: 100%;
    height: 180px;
    background: radial-gradient(#003149, #021b24);
  }

  .logo-container {
    width: 100%;
    position: absolute;
  }

  .header-logo {
    margin: auto;
  }

  .header-bg-left {
    float: left;
    margin-left: -5px;
  }

  .header-bg-right {
    float: right;
    margin-right: 20px;
  }

  img {
    max-height: 180px;
  }

  img.header-logo {
    height: 55px;
    margin-top: 55px;
  }
</style>
