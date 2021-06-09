<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
  export default {
    name: "App",
    components: {
      Home,
    },
  };
</script>

<style lang="scss" scoped>
#app {
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-2;
  background: $color-1;
  max-width: 100vw;
}
</style>
