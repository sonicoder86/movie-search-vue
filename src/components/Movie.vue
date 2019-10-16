<template>
  <div class="movie">
    <h2>{{ movie.Title }}</h2>
    <div>
      <img width="200" :alt="altText" :src="movie.Poster" />
    </div>
    <p>{{ movie.Year }}</p>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api';

  export default {
    name: "Movie",
    props: ['movie'],
    setup({ movie }) {
      const altText = computed(() => `The movie titled: ${movie.Title}`);

      return { altText };
    }
  };
</script>
