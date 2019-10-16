<template>
  <header class="header">
    <h2>{{ titleText }}</h2>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title'],
    setup({ title }) {
      return { titleText: title };
    }
  }
</script>
