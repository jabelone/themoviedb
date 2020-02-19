<!-- This top header component is used on the home page to render the logo and swooshy bars. -->

<template>
  <div class="header">
    <div class="logo-container">
      <router-link to="/about">
        <img alt="Vue logo" class="header-logo" src="../assets/logo.svg">
      </router-link>
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

<!-- This CSS is scoped to just this component -->
<style scoped lang="scss">
  .header {
    position: relative;
    min-width: 275px;
    width: 100%;
    height: 180px;
    background: radial-gradient(#003149, #021b24);
    overflow: hidden;
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
    width: 100px;
  }

  .header-bg-right {
    float: right;
    margin-right: 20px;
    width: 100px;
  }

  img {
    max-height: 180px;
  }

  img.header-logo {
    height: 55px;
    margin-top: 55px;
  }
</style>
