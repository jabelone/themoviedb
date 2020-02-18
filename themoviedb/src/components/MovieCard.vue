<template>
  <div class="container">
    <img src="../assets/movie-cover.png" :alt="'Movie cover for ' + movieName"/>
    <p class="movie-title">{{ movieName }}</p>
    <p class="movie-date">{{ movieDate }}</p>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movieId: String,
  },
  data: () => ({
    movieName: 'Avengers Infinity War blah blah blahblah blah blahblah blah blah',
    movieDate: 'April 2019',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .movie-title, .movie-date {
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
  }

  .movie-date {
    padding-top: 5px;
    color: #A1D1E5;
    font-size: 12px;
  }

  img {
    width: 100%;
  }
</style>
