<template>
  <div class="home">
    <top-header/>
    <search-bar placeholder="Search" class="search-bar"/>

    <div class="lower-container">
      <div class="inner-lower-container">
        <sub-header text="Popular Movies"/>
        <div class="movie-card-container">
          <movie-card class="movie-card"/>
        </div>
        <div class="movie-card-container">
          <movie-card class="movie-card"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '@/components/TopHeader.vue';
import SearchBar from '@/components/SearchBar.vue';
import SubHeader from '@/components/SubHeader.vue';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'Home',
  components: {
    TopHeader, SearchBar, SubHeader, MovieCard,
  },
};
</script>

<style scoped lang="scss">
  .home {
    width: 100%;
  }

  .search-bar {
    z-index: 5;
    margin: -20px auto auto;
    height: 40px;
    position: relative;
    max-width: 84vw;
  }

  .lower-container {
    width: 100%;
  }

  .inner-lower-container {
    padding: 0 20px;
  }

  .movie-card-container {
    display: inline-block;
    width: 50%;
  }

  .movie-card {
    padding-right: 10px;
    position: relative;
  }
</style>
