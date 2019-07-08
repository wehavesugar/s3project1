<template>
  <div>
    <TabBar />
    <section style="min-height:10rem;">
      <CityFilter />
    </section>
  </div>
</template>

<script>
import CityFilter from "./CityFilter.vue";
export default {
  components: {
    CityFilter
  },
  name: "list"
};
</script>

<style scoped>
</style>