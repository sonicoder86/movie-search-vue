<template>
  <div class="app">
    <Header :title="'Composition API'" />
    <Search :search="state.search" @search="handleSearch" />
    <p class="intro">Sharing a few of our favourite movies</p>
    <div class="movies">
      <Movie v-for="movie in state.movies" :movie="movie" :key="movie.imdbID" />
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Search from './Search.vue';
  import Movie from './Movie.vue';
  import { useMovieApi } from '../hooks/movie-api';

  export default {
    name: 'app',
    components: { Header, Search, Movie },
    setup() {
      const state = useMovieApi();

      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        }
      };
    }
  }
</script>

<style>
  .app {
    text-align: center;
  }

  .header {
    background-color: #282c34;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    cursor: pointer;
  }

  .spinner {
    height: 80px;
    margin: auto;
  }

  .intro {
    font-size: large;
  }

  /* new css for movie component */

  * {
    box-sizing: border-box;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .header h2 {
    margin: 0;
  }

  .add-movies {
    text-align: center;
  }

  .add-movies button {
    font-size: 16px;
    padding: 8px;
    margin: 0 10px 30px 10px;
  }

  .movie {
    padding: 5px 25px 10px 25px;
    max-width: 25%;
  }

  .errorMessage {
    margin: auto;
    font-weight: bold;
    color: rgb(161, 15, 15);
  }


  .search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }


  input[type="submit"] {
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 80px;
    margin-left: 5px;
    cursor: pointer;
  }


  input[type="submit"]:hover {
    background-color: #282c34;
    color: antiquewhite;
  }


  .search > input[type="text"]{
    width: 40%;
    min-width: 170px;
  }

  @media screen and (min-width: 694px) and (max-width: 915px) {
    .movie {
      max-width: 33%;
    }
  }

  @media screen and (min-width: 652px) and (max-width: 693px) {
    .movie {
      max-width: 50%;
    }
  }


  @media screen and (max-width: 651px) {
    .movie {
      max-width: 100%;
      margin: auto;
    }
  }
</style>
