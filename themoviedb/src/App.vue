<template>
  <!--  This is our main application container, everything inside of #app is controlled by Vue -->
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// This is our main vue instance
export default {
  name: 'Home',
  components: {},
  watch: {
    // this changes the page title for each route
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'TMDB';
      },
    },
  },
};
</script>

<!-- The following CSS is *not* scoped so it applies to everything everywhere -->
<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    color: #dff5fd;
    margin: 0;
    font-family: Montserrat, open-sans, sans-serif;
    width: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-in-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  body {
    min-width: 250px;
  }
</style>
