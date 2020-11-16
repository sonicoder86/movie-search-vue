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
  import { computed } from 'vue';

  export default {
    name: "Movie",
    props: ['movie'],
    setup(props) {
      const altText = computed(() => `The movie titled: ${props.Title}`);

      return { altText };
    }
  };
</script>
