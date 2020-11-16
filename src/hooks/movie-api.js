import { reactive, watchEffect } from "vue";
const API_KEY = "a5549d08";

export const useMovieApi = () => {
  const state = reactive({
    search: "Joker",
    loading: true,
    movies: [],
  });

  watchEffect(() => {
    const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;

    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        state.movies = jsonResponse.Search;
        state.loading = false;
      });
  });

  return state;
};
