<template>
  <div>
    <TabBar />
    <div class="container">
      <div id="home">
        <SearchBar />
        <index-movie />
        <cin-line />
        <today-hot />
        <router-view></router-view>
        <!-- <button @click="handleTo()">跳转到二级页面</button>
        <button @click="handleForward()">前进</button>-->
      </div>
    </div>
  </div>
</template>

<script>
import IndexMovie from "./indexMovie.vue";
import SearchBar from "../../components/searchbar.vue";
import CinLine from "../../components/cin_line.vue";
import TodayHot from "./todayhot.vue";
export default {
  name: "home",
  components: { IndexMovie, CinLine, TodayHot, SearchBar }
};
</script>

<style scoped>
.container {
  width: 100%s;
}
</style>