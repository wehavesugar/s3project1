<template>
  <div>
    <article class="m_bg_whiteb mall_type"
    v-for="(item, index) in category" :key="index"
    >
      <div class="typetit table" >
        <h2 :style="'color:'+ item.colorValue">
          <i :style=" 'background:'+item.colorValue"></i>{{item.name}}
        </h2>
        <div class="td tr">
          <a data-href="https://mall-wv.mtime.cn/#!/commerce/list/?c1=25">
            更多
            <i class="i_tnext"></i>
          </a>
        </div>
      </div>
      <dl>
        <dt>
          <a :data-href=item.imageUrl>
            <img
              :data-original=item.image
              class="m_img"
              :src=item.image
              style="display: block;"
            />
          </a>
        </dt>
        <dd>
          <ul class="table">
            <li class="td" 
            :data-goodsid=ite.goodsId v-for="(ite, ind) in item.subList" 
            :key="ind">
              <img
                :data-original=ite.image
                class="m_img"
                :alt=ite.title
                :src=ite.image
                style="display: block;"
              />
              <h3>{{ite.title}}</h3>
              <p data-selector="price">
                ￥
                <strong>1040</strong>
              </p>
            </li>
            <!-- <li class="td" data-goodsid="101125">
              <img
                data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fgoods%2F2015%2F06%2F02%2F152728.22685903_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4"
                class="m_img"
                alt="野兽国 钢铁侠 MARK1"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fgoods%2F2015%2F06%2F02%2F152728.22685903_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4"
                style="display: block;"
              />
              <h3>野兽国 钢铁侠 MARK1</h3>
              <p data-selector="price">
                ￥
                <strong>589</strong>
              </p>
            </li>
            <li class="td" data-goodsid="102841">
              <img
                data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F08%2F11%2F185646.84580015_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4"
                class="m_img"
                alt="魔兽 杜隆坦4.25英寸可动人偶"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F08%2F11%2F185646.84580015_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4"
                style="display: block;"
              />
              <h3>魔兽 杜隆坦4.25英寸可动人偶</h3>
              <p data-selector="price">
                ￥
                <strong>99</strong>
              </p>
            </li> -->
          </ul>
        </dd>
      </dl>
  </article>
  </div>
</template>

<script>
import { marketFirstPage } from '../../api/order.js';
export default {
  name: "MallType",
  async created(){
    let response = await marketFirstPage();
    this.category = response.category
  },
  data(){
    return{
      category:[]
    }
  }
};
</script>

<style>
.mall_type {
  margin-bottom: 0.3rem;
  padding-bottom: 0.32rem;
}
.m_bg_whiteb {
  border-bottom: 1px solid #e5e4e4;
  box-shadow: 0 0.1rem 0.1rem rgba(51, 51, 51, 0.01);
  background: white;
  position: relative;
  z-index: 2;
}
.mall_type .typetit {
  padding-top: 0.425rem;
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
.mall_type .typetit h2 {
  font-size: 0.375rem;
  line-height: 0.25rem;
  position: relative;
  font-weight: normal;
}
.mall_type .typetit h2 i {
  width: 0.15rem;
  height: 0.45rem;
  display: inline-block;
  position: relative;
  margin-right: 0.125rem;
  vertical-align: middle;
  overflow: hidden;
}
.mall_type .typetit div {
  position: relative;
  zoom: 1;
  font-size: 0.325rem;
  color: #666;
  margin-right: 0.375rem;
  padding-right: 0.375rem;
  line-height: 0.25rem;
  margin-top: 0.05rem;
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
.tr {
  text-align: right;
}
a,
a:hover {
  text-decoration: none;
  -webkit-appearance: none;
  appearance: none;
}
a {
  color: #333;
  font-size: 0.32rem;
}
.i_tnext,
.i_next {
  width: 0.35rem;
  height: 0.2rem;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.1rem;
  overflow: hidden;
  line-height: 2.75rem;
  text-indent: -999px;
  transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
}
.m_btn_tmore,
.i_tnext {
  display: block;
  background: #fff
    url(//static1.mtime.cn/html5/20190531185056/images/2014/i-tmore.png)
    no-repeat center center;
  background-size: auto 0.2rem;
}
.mall_type dl {
  margin: 0 0.32rem;
}
.mall_type dt {
  border-bottom: 1px solid #d8d8d8;
  padding: 0.125rem 0;
  margin-bottom: 0.16rem;
}
.mall_type li {
  width: 33.3%;
  text-align: center;
}
.mall_type li img {
  width: 2.125rem;
  height: 2.125rem;
  margin: 0 auto;
}
.mall_type li h3 {
  padding: 0.16rem 0;
  font-size: 0.275rem;
  line-height: 0.3rem;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 0 0.125rem;
}
.mall_type li p {
  font-size: 0.3rem;
  color: #f15353;
}
.mall_type li p strong {
  font-size: 0.35rem;
}
</style>
