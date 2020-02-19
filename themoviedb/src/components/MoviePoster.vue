<!-- This component will display a movie poster. -->

<template>
  <img :src='moviePoster' class="movie-poster" :alt="'Movie poster'"/>
</template>

<script>
import noPoster from '../assets/no-poster.png';

export default {
  name: 'MoviePoster',
  props: {
    poster: String,
  },
  data: () => ({}),
  computed: {
    moviePoster() {
      /**
         * Returns the full URL to the movie poster.
         */
      return this.poster ? window.TMDB_IMAGE_BASE + this.poster : noPoster;
    },
  },
};
</script>

<!-- This CSS is scoped to just this component -->
<style scoped lang="scss">
  img {
    width: 100%;
    border-radius: 7px;
    transition: opacity .2s ease-in-out;
  }
</style>
