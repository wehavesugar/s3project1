<template>
  <div>
    <TabBar />
    <section style="min-height:10rem;">
      <CityFilter />
      <cinema-list />
    </section>
  </div>
</template>

<script>
import CinemaList from "./CinemaList";
import CityFilter from "./CityFilter";
export default {
  components: {
    CityFilter,
    CinemaList
  },
  name: "list"
};
</script>

<style scoped>
</style>