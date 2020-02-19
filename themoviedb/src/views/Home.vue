<!-- This is the home page view. -->

<template>
  <div class="home">
    <top-header/>
    <search-bar v-model="searchTerm" placeholder="Search" class="search-bar"/>

    <div class="lower-container">
      <div class="inner-lower-container">
        <sub-header :text="searchTerm ? 'Search Results' : 'Popular Movies'"/>

        <div class="movie-cards">
          <template v-if="searchTerm">
            <div v-for="movie in searchResults" :key="movie.id" class="movie-card-container">
              <movie-card :movie="movie" class="movie-card"/>
            </div>
          </template>
          <template v-else>
            <div v-for="movie in popularMovies" :key="movie.id" class="movie-card-container">
              <movie-card :movie="movie" class="movie-card"/>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TopHeader from '@/components/TopHeader.vue';
import SearchBar from '@/components/SearchBar.vue';
import SubHeader from '@/components/SubHeader.vue';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'Home',
  components: {
    TopHeader, SearchBar, SubHeader, MovieCard,
  },
  data: () => ({
    searchTerm: '',
    popularMovies: [],
    searchResults: [],
  }),
  methods: {
    /**
     * This method will fetch the most popular movies and store them in the data attribute
     * 'popularMovies'.
     */
    getPopularMovies() {
      // This URL will fetch the most popular movies for the current year
      const url = `https://api.themoviedb.org/3/movie/popular?language=en-AU&page=1&api_key=${window.TMDB_API_TOKEN}`;

      axios.get(url)
        .then((response) => {
          this.popularMovies = response.data.results;
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          window.alert('There was an error fetching popular movies :(');
          throw (error);
        });
    },
    /**
     * This method will fetch a list of results based on the searchTerm and store them in the data
     * attribute 'searchResults'.
     * @param {String} searchTerm
     */
    searchMovies(searchTerm) {
      // This URL will fetch the most popular movies for the current year
      const url = `https://api.themoviedb.org/3/search/movie?language=en-AU&page=1&query=${searchTerm}&api_key=${window.TMDB_API_TOKEN}`;

      axios.get(url)
        .then((response) => {
          this.searchResults = response.data.results.slice(0, 10);
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          window.alert('There was an error fetching your search results :(');
          throw (error);
        });
    },
  },
  watch: {
    /**
     * This method watches for changes to the search term and runs the search.
     */
    searchTerm() {
      this.searchMovies(this.searchTerm);
      document.title = `Results for "${this.searchTerm}"`;
    },
  },
  mounted() {
    // When this component is mounted we should fetch the popular movies.
    this.popularMovies = this.getPopularMovies();
  },
};
</script>

<!-- This CSS is scoped to just this component -->
<style scoped lang="scss">
  .home {
    width: 100%;
  }

  .search-bar {
    z-index: 5;
    margin: -20px auto auto;
    height: 40px;
    position: relative;
    width: 84vw;
    max-width: 600px;
  }

  .lower-container {
    width: 100%;
    max-width: 600px;
    margin: auto;
  }

  .inner-lower-container {
    padding: 0 20px;
  }

  .movie-card-container {
    display: inline-block;
    width: 50%;
    float: left;
    padding-bottom: 20px;
  }

  .movie-card-container > .movie-card {
    position: relative;
  }

  .movie-card-container:nth-child(2n) > .movie-card {
    padding-left: 15px;
  }

  .movie-card-container:nth-child(2n-1) > .movie-card {
    padding-right: 15px;
  }
</style>

<style>
  .movie-card-container:nth-child(2n) > .movie-card > a > .movie-rating {
    margin-left: 15px;
  }
</style>
