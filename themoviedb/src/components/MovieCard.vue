<!-- This component will display a card containing basic information about the specified movie. -->

<template>
  <div class="container">
    <router-link :to="`/movie/${movie.id}`">
      <div class="movie-rating" :class="ratingClass">{{rating}}%</div>
      <movie-poster :poster="movie.poster_path"/>

      <p class="movie-title">{{ movie.original_title }}</p>
      <p class="movie-date">{{ date }}</p>
    </router-link>
  </div>
</template>

<script>
import MoviePoster from './MoviePoster.vue';

export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  components: {
    MoviePoster,
  },
  computed: {
    /**
     * This method converts the X / 10 rating to a percentage as per the mockup.
     */
    rating() {
      return Math.trunc((this.movie.vote_average / 10) * 100);
    },
    /**
     * This method formats the date appropriately.
     */
    date() {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ];
      const date = new Date(this.movie.release_date);

      return this.movie.release_date ? `${monthNames[date.getMonth()]} ${date.getFullYear()}` : 'No Date Available';
    },
    /**
     * This method computes which rating css class to use.
     */
    ratingClass() {
      if (this.rating > 40 && this.rating < 70) {
        return 'average-rating';
      }
      if (this.rating <= 40) {
        return 'low-rating';
      }
      return 'normal-rating';
    },
  },
};
</script>

<!-- This CSS is scoped to just this component -->
<style scoped lang="scss">
  a > .movie-title, a > .movie-date {
    color: #E5F7FF;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    text-align: left;
    padding: 0 10px 0 10px;
    margin: 0;
    width: 90%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: -10px;
  }

  a > .movie-date {
    padding-top: 5px;
    color: #A1D1E5;
    font-size: 12px;
  }

  .movie-rating {
    color: #fff;
    font-family: Roboto, sans-serif;
    position: absolute;
    top: 2%;
    left: 3%;
    background-color: #01D277;
    width: 40px;

    border-radius: 8px;
    font-weight: bold;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }

  .movie-card > p {
    padding-left: 0;
  }

  .average-rating {
    background: #4f00a8;
  }

  .low-rating {
    background: #cd2c5c;
  }

  a {
    text-decoration: none;
  }
</style>
