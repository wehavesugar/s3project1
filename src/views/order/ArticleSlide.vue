<template>
  <article id="articleSlide" class="m_bg_white mold" style="padding: 0;">
    <div id="timepic" class="mui-slider" data-slidershowtimer="164431" data-slider="3">
      <!--<div class="mui-slider"> mui-slider-loop -->
      <div
        class="mui-slider-group mui-slider-loop"
        style="transform: translate3d(-1080px, 0px, 0px) translateZ(0px); transition-duration: 800ms;"
      >
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) mui-slider-item-duplicate  -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <div class="posterbox">
            <a data-url="https://feature.mtime.cn/mobile/item/2018/Bduck/">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F11%2F23%2F102115.67519563.jpg&amp;width=750&amp;height=500&amp;clipType=4"
              />
            </a>
          </div>
        </div>
        <div class="mui-slider-item">
          <div class="posterbox">
            <a
              data-url="http://feature.mtime.cn/mobile/item/2019/creativegoods/?app_mall_banner_creativegoods"
            >
              <img
                data-num="0"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F03%2F07%2F112029.98267722.jpg&amp;width=750&amp;height=500&amp;clipType=4"
              />
            </a>
          </div>
        </div>
        <div class="mui-slider-item mui-active">
          <div class="posterbox">
            <a
              data-url="http://feature.mtime.cn/mobile/item/2019/fashionableT/?app_mall_banner_fashionableT"
            >
              <img
                data-num="1"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F03%2F04%2F134351.16725003.jpg&amp;width=750&amp;height=500&amp;clipType=4"
              />
            </a>
          </div>
        </div>
        <div class="mui-slider-item">
          <div class="posterbox">
            <a
              data-url="http://feature.mtime.cn/mobile/item/2019/newphonecase/?app_mall_banner_newphonecase"
            >
              <img
                data-num="2"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F02%2F25%2F112629.57302984.jpg&amp;width=750&amp;height=500&amp;clipType=4"
              />
            </a>
          </div>
        </div>
        <div class="mui-slider-item">
          <div class="posterbox">
            <a data-url="https://feature.mtime.cn/mobile/item/2018/Bduck/">
              <img
                data-num="3"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F11%2F23%2F102115.67519563.jpg&amp;width=750&amp;height=500&amp;clipType=4"
              />
            </a>
          </div>
        </div>
        <div class="mui-slider-item mui-slider-item-duplicate">
          <div class="posterbox">
            <a
              data-url="http://feature.mtime.cn/mobile/item/2019/creativegoods/?app_mall_banner_creativegoods"
            >
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F03%2F07%2F112029.98267722.jpg&amp;width=750&amp;height=500&amp;clipType=4"
              />
            </a>
          </div>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) mui-slider-item-duplicate -->
      </div>
      <div class="mui-slider-indicator">
        <!-- 当前样式 mui-active-->
        <div class="mui-indicator"></div>
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
      </div>
      <!--</div>  -->
    </div>
  </article>
</template>

<script>
import { aritcleSlide } from "@api/order.js";
export default {
  // name: "AritcleSlide",
  // async created() {
  //   let response = await AritcleSlide();
  //   this.AritcleSlide = response.scrollImg;
  //   console.log(response);
  // },
  data(){
    return{
      AritcleSlide:[]
    }
  }
};
</script>

<style>
</style>
