<template>
  <header class="header">
    <h2>{{ titleText }}</h2>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title'],
    setup(props) {
      return { titleText: props.title };
    }
  }
</script>
