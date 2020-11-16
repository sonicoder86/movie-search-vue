<template>
  <form class="search">
    <input
       type="text"
       :value="movieTitle"
       @keyup="handleChange"
    />
    <input @click="handleSubmit" type="submit" value="SEARCH" />
  </form>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'Search',
    props: ['search'],
    setup(props, { emit }) {
      const movieTitle = ref(props.search);

      return {
        movieTitle,
        handleSubmit(event) {
          event.preventDefault();
          emit('search', movieTitle.value);
        },
        handleChange(event) {
          movieTitle.value = event.target.value
        }
      }
    }
  };
</script>
