<template>
  <article class="mallshop">
    <div class="shop01">
      <div class="shopmid">
        <a
          data-href="https://feature.mtime.cn/mobile/item/2019/deadpool2new/?app_mall_banner_deadpool2new="
        >
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F01%2F24%2F144503.80926021.jpg&amp;width=375&amp;height=450&amp;clipType=4"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F01%2F24%2F144503.80926021.jpg&amp;width=375&amp;height=450&amp;clipType=4"
            style="display: block;"
          />
          <div class="countdown"></div>
        </a>
      </div>
    </div>
    <div class="shop02">
      <div class="shopmid">
        <a data-href="https://m.mtime.cn/#!/commerce/list/?q=%E5%A4%8D%E4%BB%87%E8%80%85">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174427.96016382.jpg&amp;width=374&amp;height=225&amp;clipType=4"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174427.96016382.jpg&amp;width=374&amp;height=225&amp;clipType=4"
            style="display: block;"
          />
        </a>
      </div>
    </div>
    <div class="shop03">
      <div class="shopmid">
        <a data-href="https://m.mtime.cn/#!/commerce/list/?q=%E6%9D%83%E5%8A%9B">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174520.77881769.jpg&amp;width=374&amp;height=224&amp;clipType=4"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174520.77881769.jpg&amp;width=374&amp;height=224&amp;clipType=4"
            style="display: block;"
          />
        </a>
      </div>
    </div>
    <div class="shop04 m_bg_whiteb">
      <div class="shopmid">
        <a data-href="https://m.mtime.cn/#!/commerce/list/?q=%E7%9A%AE%E5%8D%A1%E4%B8%98">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174012.80503273.jpg&amp;width=750&amp;height=223&amp;clipType=4"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174012.80503273.jpg&amp;width=750&amp;height=223&amp;clipType=4"
            style="display: block;"
          />
          <div class="countdown"></div>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "MallShop"
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
