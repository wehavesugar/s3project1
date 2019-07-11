<template>
  <article class="m_bg_whiteb mall_act" style>
    <div id="divTopic">
      <!--bg-->
      <dl class="bg" data-selector="bgList">
        <dd 
          :style="'background-image:url(' + bgUrl +')'"
        >
        </dd>
      </dl>
      <!--bg end-->
      <!--img-->
      <div class="actlist" data-selector="imgList">
        <dl
          class="table"
          style="transform: translateZ(0px); will-change: transform; width: 9.975rem; left: 0px;"
        >
          <dd data-index="0" v-for="(item, index) in topic.slice(0,4)" :key="index">
            <div class="layer">
              <div class="inner">
                <img
                  data-selector="checked"
                  class="m_img select"
                  :src=item.checkedImage
                />
                <div class="mark" style="display: none;"></div>
              </div>
            </div>
          </dd>
          <!-- <dd data-index="1">
            <div class="layer">
              <div class="inner">
                <img
                  data-selector="checked"
                  class="m_img"
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F144048.93858389.jpg"
                />
                <div class="mark"></div>
              </div>
            </div>
          </dd>
          <dd data-index="2">
            <div class="layer">
              <div class="inner">
                <img
                  data-selector="checked"
                  class="m_img"
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F152500.29800055.jpg"
                />
                <div class="mark"></div>
              </div>
            </div>
          </dd>
          <dd data-index="3">
            <div class="layer">
              <div class="inner">
                <img
                  data-selector="checked"
                  class="m_img"
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F150606.66478317.jpg"
                />
                <div class="mark"></div>
              </div>
            </div>
          </dd>
          <dd data-index="4">
            <div class="layer">
              <div class="inner">
                <img
                  data-selector="checked"
                  class="m_img"
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg"
                />
                <div class="mark"></div>
              </div>
            </div>
          </dd> -->
        </dl>
      </div>
      <div class="mall_actul">
        <ul class="table" data-selector="content">
          <li class="td" style>
            <div class="acttitle">
              <h4>{{topic0.titleEn}}</h4>
              <h3>{{topic0.titleCn}}</h3>
            </div>
            <dl class="actdd fix">
              <dd :data-goodsid=item.goodsId v-for="(item, index) in goods" :key="index">
                <img
                  :src="item.image"
                  class="m_img"
                />
                <h3>{{item.title}}</h3>
                <p data-selector="price">
                  ￥
                  <strong>69</strong>
                </p>
              </dd>
              <!-- <dd data-goodsid="107094">
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F05%2F22%2F181803.82756955_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4"
                  class="m_img"
                />
                <h3>星球大战 Q萌形象T恤</h3>
                <p data-selector="price">
                  ￥
                  <strong>109</strong>
                </p>
              </dd>
              <dd data-goodsid="105242">
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2016%2F12%2F26%2F154545.38326127_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4"
                  class="m_img"
                />
                <h3>Hot toys侠盗一号 琴·厄索1:6人偶</h3>
                <p data-selector="price">
                  ￥
                  <strong>1380</strong>
                </p>
              </dd>
              <dd data-goodsid="107095">
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F05%2F23%2F181151.45952224_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4"
                  class="m_img"
                />
                <h3>星球大战长飘带棒球帽</h3>
                <p data-selector="price">
                  ￥
                  <strong>69</strong>
                </p>
              </dd>
              <dd data-goodsid="101829">
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fgoods%2F2015%2F12%2F20%2F214711.91261972_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4"
                  class="m_img"
                />
                <h3>星球大战 暴风兵炫酷3D背包</h3>
                <p data-selector="price">
                  ￥
                  <strong>399</strong>
                </p>
              </dd>
              <dd data-goodsid="104706">
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2016%2F12%2F08%2F144325.16451236_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4"
                  class="m_img"
                />
                <h3>星球大战 风暴兵3D手机壳</h3>
                <p data-selector="price">
                  ￥
                  <strong>45</strong>
                </p>
              </dd> -->
            </dl>
            <!--list-->
            <div class="actmore">
              <a
                data-href="https://mall-wv.mtime.cn/#!/commerce/list/?q=%E6%98%9F%E7%90%83%E5%A4%A7%E6%88%98"
              >更多商品 &gt;</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
import { marketFirstPage } from '../../api/order.js'
export default {
  name: "MallAct",
  async created(){
    let response = await marketFirstPage();
    this.topic = response.topic;
    this.bgUrl = this.topic[0].backgroupImage;
    this.topic0 = this.topic[0];
    this.goods = this.topic[0].subList;
  },
  data(){
    return{
      topic:[],
      bgUrl:'',
      topic0:{},
      goods:[]
    }
  }
};

</script>

<style scoped>
.mall_act {
  position: relative;
  zoom: 1;
  margin-bottom: 0.3rem;
}
.m_bg_whiteb {
  border-bottom: 1px solid #e5e4e4;
  box-shadow: 0 0.2em 0.2em rgba(51, 51, 51, 0.01);
  background: white;
  position: relative;
  z-index: 2;
}
.mall_act dl.bg {
  height: 3.175rem;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.mall_act dl.bg dd {
  background: url() no-repeat center 0;
  background-size: 100% auto;
  height: 3.175rem;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
}
.mall_act .actlist {
  height: 3.175rem;
  position: relative;
  z-index: 2;
  width: 100%;
  overflow: hidden;
}
.mall_act .actlist dl {
  height: 3.175rem;
  position: absolute;
  top: 0;
}
.mall_act .actlist dd {
  width: 1.65rem;
  height: 3.175rem;
  margin: 0 0.16rem;
  position: relative;
}
.mall_act .actlist dd .layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.mall_act .actlist dd .layer .inner .select {
  border: 0;
}
.mall_act .actlist dd .layer .inner img {
  border-radius: 50%;
}
.m_img {
  width: 100%;
  height: auto;
  display: block;
}
.table,
.table_v,
.table_v_c,
.table_h_c,
.table_vh_c {
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: box;
}
.mall_act .actlist dd .layer .inner .mark {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
  background: black;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.mall_actul ul {
  position: relative;
}

.mall_actul li {
  width: 100%;
}
.draw-box .draw-info li dl dt,
.td {
  -webkit-box-flex: 1;
  -khtml-box-flex: 1;
  -ms-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1;
  -khtml-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  -o-flex: 1;
  flex: 1;
}
.mall_act .acttitle {
  text-align: center;
}
.mall_act .acttitle h4 {
  font-size: 0.25rem;
  font-weight: normal;
  margin-top: 0.075rem;
}
.mall_act .acttitle h3 {
  font-size: 0.4rem;
  font-weight: normal;
}
.mall_act .acttitle h3 {
  font-size: 0.45rem;
  font-weight: normal;
}
.fix {
  display: block;
}
.mall_act .actdd dd {
  width: 33.3%;
  height: 3.2rem;
  float: left;
  text-align: center;
  overflow: hidden;
}
.mall_act .actdd img {
  width: 2.125rem;
  height: 2.125rem;
  margin: 0 auto;
}
.mall_act .actdd dd h3 {
  padding: 0.16rem 0;
  font-size: 0.275rem;
  line-height: 0.3rem;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.mall_act .actdd dd p {
  font-size: 0.3rem;
  color: #f15353;
}
.mall_act .actdd dd p strong {
  font-size: 0.375rem;
}
.fix:after {
  content: ".";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}
.mall_act .actmore {
  text-align: center;
  padding: 0.425rem 0 0.525rem;
}
.mall_act .actmore a {
  background: #f26262;
  width: 2.45rem;
  height: 0.7rem;
  line-height: 0.7rem;
  display: inline-block;
  position: relative;
  zoom: 1;
  text-align: center;
  border-radius: 0.45rem;
  font-size: 0.325rem;
  color: #fff;
}
</style>
