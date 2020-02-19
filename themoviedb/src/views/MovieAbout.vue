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
        <p class="info-text">
          {{year}} · {{rating}}% User Score <br/>
          {{runtime}}
        </p>
      </div>
    </div>

    <hr class="separator">

    <div class="overview">
      <sub-header text="Overview"/>
      <p>{{movie.overview}}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import SubHeader from '@/components/SubHeader.vue';
import MovieBackdrop from '../components/MovieBackdrop.vue';
import MoviePoster from '../components/MoviePoster.vue';
import backArrowImage from '../assets/back-arrow.svg';

export default {
  name: 'MovieAbout',
  components: { MovieBackdrop, MoviePoster, SubHeader },
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
    rating() {
      /**
         * This method converts the X / 10 rating to a percentage as per the mockup.
         */
      return Math.trunc((this.movie.vote_average / 10) * 100);
    },
    year() {
      /**
         * This method grabs the year of release.
         */
      const date = new Date(this.movie.release_date);

      return this.movie.release_date ? `${date.getFullYear()}` : 'No Date Available';
    },
    runtime() {
      /**
         * This method returns the runtime to display to the user.
         */
      const duration = this.movie.runtime;
      return `${Math.floor(duration / 60)}h ${duration % 60} min`;
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
    margin: auto;
    max-width: 600px;
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
    margin-top: -55px;
  }

  .info-text-container {
    width: 58%;
    font-size: 12px;
    display: inline-block;
    padding-top: 45px;
    margin-left: 15px;
    vertical-align: top;
  }

  .poster {
    display: inline-block;
    top: -41%;
    margin-left: 15px;
    width: 30%;

    box-shadow: 3px 3px 20px #020709;
  }

  h1 {
    color: #E3F4FC;
    font-family: Montserrat, open-sans, sans-serif;
    font-size: 28px;
    text-align: left;
    width: 60vw;

    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 2.5em;
    line-height: 1.25em;
    word-wrap: break-word;
  }

  p {
    font-family: Roboto, open-sans, sans-serif;
    font-size: 16px;
    color: #85a8b3;
    width: 95%;
    text-align: left;
  }

  .overview {
    padding: 0 20px;
  }

  .overview > p {
    width: 100%;
  }

  .separator {
    margin: 20px 5% 0 5%;
    border-color: #0F303D;
    color: #0F303D;
    opacity: 0.3;
  }

  .subheader {
    padding-top: 20px;
    padding-bottom: 0;
  }
</style>
