<template>
  <article class="mallshop" style="height: auto;">
    <div class="shop00">
      <div class="shopmid">
        <a id="firstH5UrlA" :href="data.url">
          <img id="firstH5UrlImg" :src="data.image" class="m_img" />
          <div class="countdown"></div>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
// 请求广告栏图片
import { getMall } from "@api/home";
export default {
  name: "IndexMovie",
  async created() {
    let response = await getMall();
    this.data = response.areaFirst;
  },
  data() {
    return {
      data: ""
    };
  }
};
</script>

<style scoped>
.mallshop {
  background: #fff;
  position: relative;
  margin-bottom: 0.3rem;
}
.mallshop .shop00 {
  width: 100%;
}

.mallshop .shopmid {
  position: relative;
}
.mallshop .shopmid a {
  display: block;
}
.m_img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
