<template>
  <article class="mallshop">
    <div class="shop01">
      <div class="shopmid">
        <a
          :data-href=shop01.url
        >
          <img
            :data-original=shop01.img
            class="m_img"
            :src=shop01.img
            style="display: block;"
          />
          <div class="countdown"></div>
        </a>
      </div>
    </div>
    <div class="shop02">
      <div class="shopmid">
        <a :data-href=shop02.url>
          <img
            :data-original=shop02.image
            class="m_img"
            :src=shop02.image
            style="display: block;"
          />
        </a>
      </div>
    </div>
    <div class="shop03">
      <div class="shopmid">
        <a :data-href=shop03.url>
          <img
            :data-original=shop03.image
            class="m_img"
            :src=shop03.image
            style="display: block;"
          />
        </a>
      </div>
    </div>
    <div class="shop04 m_bg_whiteb">
      <div class="shopmid">
        <a :data-href=shop04.url>
          <img
            :data-original=shop04.img
            class="m_img"
            :src=shop04.img
            style="display: block;"
          />
          <div class="countdown"></div>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import { marketFirstPage } from '../../api/order.js'
export default {
  name: "MallShop",
  async created(){
    let response = await marketFirstPage();
    this.shop01 = response.cellA;
    this.shop02 = response.cellC.list[0];
    this.shop03 = response.cellC.list[1];
    this.shop04 = response.cellB;
  },
  data() {
    return {
      shop01:{},
      shop02:{},
      shop03:{},
      shop04:{}
    };
  }
};
</script>

<style scoped>
.mallshop {
  background: #fff;
  position: relative;
  height: 7.175rem;
  margin-bottom: 0.3rem;
}
.mallshop .shop01 {
  width: 50%;
  height: 4.8rem;
  left: 0;
  top: 0;
  z-index: 2;
}
.mallshop .shop01,
.mallshop .shop02,
.mallshop .shop03,
.mallshop .shop04 {
  position: absolute;
}
.mallshop .shopmid {
  position: relative;
}
.mallshop .shop01 a {
  height: 4.8rem;
}
.mallshop .shopmid a {
  display: block;
}
.mallshop .shop01 img {
  max-height: 4.8rem;
  max-width: 100%;
  width: 4rem;
}
.m_img {
  width: 100%;
  height: auto;
  display: block;
}
.mallshop .countdown {
  padding-left: 0rem;
  padding-right: 0;
  position: absolute;
  left: 0.525rem;
  bottom: 0.25rem;
}
.countdown {
  font-size: 0.375rem;
  padding-right: 0.125rem;
}
.mallshop .shop01:after {
  background-color: #d8d8d8;
  width: 1px;
  height: 100%;
  content: "";
  -webkit-transform: scalex(0.5);
  transform: scalex(0.5);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
.mallshop .shop02 {
  width: 50%;
  height: 2.4rem;
  right: 0;
  z-index: 2;
}
.mallshop .shop02:after {
  background-color: #d8d8d8;
  height: 1px;
  width: 100%;
  content: "";
  -webkit-transform: scaley(0.5);
  transform: scaley(0.5);
  position: absolute;
  right: 0;
  bottom: 0;
}
.mallshop .shop03 {
  width: 50%;
  height: 2.4rem;
  top: 2.4rem;
  right: 0;
}
.mallshop .shop04 {
  width: 100%;
  height: 2.375rem;
  bottom: 0;
  left: 0;
  z-index: 3;
}
.mallshop .shop04:after {
  background-color: #d8d8d8;
  height: 1px;
  width: 100%;
  content: "";
  -webkit-transform: scaley(0.5);
  transform: scaley(0.5);
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
}
</style>
