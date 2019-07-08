<template>
  <div>
    <TabBar />
    <div class="warp_cont">
      <section class="m_bg_gray mall">
        <MallSearch />
        <!-- <AritcleSlide /> -->
        <MallNav />
        <MallShop />
        <MallAct />
        <MallType />
      </section>
    </div>
  </div>
</template>

<script>
import MallSearch from "./MallSearch";
import MallNav from "./MallNav";
import MallShop from "./Mallshop";
import MallAct from "./MallAct";
import MallType from "./MallType";
// import AritcleSlide from "./ArticleSlide";
export default {
  components: { MallSearch, MallNav, MallShop, MallAct, MallType },
  name: "order"
};
</script>

<style scoped>
.mall {
  position: relative;
}
.m_bg_gray {
  background: #f6f6f6;
}
.m_bg_gray,
.m_bg_white {
  height: 100%;
}
</style>