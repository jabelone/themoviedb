<template>
  <div class="hello">
    <h1>{{ movieName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movieId: String,
  },
  data: () => ({
    movieName: 'default',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
