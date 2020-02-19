<!-- This component will display a movie poster. -->

<template>
  <img :src='movieBackdrop' class="movie-backdrop" :alt="'Movie poster'"/>
</template>

<script>
import noBackdrop from '../assets/no-backdrop.png';

export default {
  name: 'MovieBackdrop',
  props: {
    backdrop: String,
  },
  data: () => ({}),
  computed: {
    movieBackdrop() {
      /**
         * Returns the full URL to the movie poster.
         */
      return this.backdrop ? window.TMDB_IMAGE_BASE + this.backdrop : noBackdrop;
    },
  },
};
</script>

<!-- This CSS is scoped to just this component -->
<style scoped lang="scss">
  img {
    width: 100%;
  }
</style>
