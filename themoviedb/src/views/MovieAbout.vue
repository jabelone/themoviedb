<!-- This view should be used as a full page screen for showing detailed info about a movie. -->

<template>
  <div class="movie-about">
    <div class="header">
      <router-link to="/">
        <img class="back-arrow" :src="backArrow" alt="Back arrow"/>
      </router-link>
      <movie-backdrop :backdrop="movie.backdrop_path"/>
    </div>

    <div class="info-container">
      <movie-poster class="poster" :poster="movie.poster_path"/>
      <div class="info-text-container">
        <h1>{{movie.original_title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MovieBackdrop from '../components/MovieBackdrop.vue';
import MoviePoster from '../components/MoviePoster.vue';
import backArrowImage from '../assets/back-arrow.svg';

export default {
  name: 'MovieAbout',
  components: { MovieBackdrop, MoviePoster },
  data: () => ({
    movie: Object,
  }),
  methods: {
    getMovie(movieId) {
      // This URL will fetch the most popular movies for the current year
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${window.TMDB_API_TOKEN}`;

      axios.get(url)
        .then((response) => {
          this.movie = response.data;
        });
    },
  },
  computed: {
    movieId() {
      return this.$route.params.id;
    },
    backArrow() {
      return backArrowImage;
    },
  },
  mounted() {
    this.getMovie(this.movieId);
  },
};
</script>

<style scoped lang="scss">
  .movie-about {
    width: 100%;
  }

  .header {
    position: relative;
  }

  .back-arrow {
    position: absolute;
    top: 20px;
    left: 3vw;
  }

  .info-container {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 30vw;
  }

  .info-text-container {
    margin-left: 38vw;
  }

  .poster {
    position: absolute;
    top: -15vw;
    left: 3vw;
  }

  h1 {
    font-size: 28px;
    text-align: left;
    width: 60vw;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
