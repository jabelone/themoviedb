<!-- This view should be used as a full page screen for showing detailed info about a movie. -->

<template>
  <div class="movie-about">
    {{movieId}}
  </div>
</template>

<script>

export default {
  name: 'MovieAbout',
  components: {},
  data: () => ({
    movie: {
      name: 'Avengers Infinity War blah blah blahblah blah blahblah blah blah',
      date: 'April 2019',
      rating: 83,
    },
  }),
  computed: {
    movieId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped lang="scss">
  .movie-about {
    width: 100%;
  }
</style>
