<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./common/ComponentFooter.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style>
#app {
  overflow: auto;
}
</style>
