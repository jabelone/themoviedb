<!-- This top header component is used on the home page to render the logo etc. -->

<template>
  <div class="header">
    <div class="logo-container">
      <router-link to="/">
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

<!-- Apparently Safari doesn't like floats used in the way above so this fixes it. -->
<style scoped>
  @media not all and (min-resolution:.001dpcm) { @media {
    .header-bg-left {
      position: absolute;
      left: -41%;
    }

    .header-bg-right {
      position: absolute;
    }
  }}
  </style>
