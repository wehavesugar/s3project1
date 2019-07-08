<template>
  <article class="mallsearch">
    <div class="table_v_c">
      <a data-href="#!/mall/search/" class="input td">
        <span>搜索正版电影周边</span>
      </a>
      <div
        id="zhyy_myico"
        data-selector="navsecli"
        data-page-id="4"
        style="display:none; padding:1rem"
      >
        <a href="#">
          <i class="ico_my"></i>
        </a>
      </div>
      <div>
        <b data-shopcart>
          <a data-shopcart href="#!/commerce/cart/" class="i_h_shopping">
            <span style="display: none"></span>
          </a>
        </b>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "MallSearch"
};
</script>

<style scoped>
.mallsearch .input span {
  display: inline-block;
  vertical-align: middle;
  color: #777;
  line-height: 0.7875rem;
}
.mallsearch {
  padding: 0 0.125rem 0 0.375rem;
}
.table_v_c {
  height: 100%;
  -webkit-box-align: center;
  -moz-box-align: center;
  box-align: center;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: box;
}
.mallsearch .input {
  font-size: 0.34rem;
  height: 0.7875rem;
  line-height: 1.2;
  padding: 0 0.590625rem 0 0.65625rem;
  border-radius: 0.164rem;
  background: #fff
    url(//static1.mtime.cn/html5/20190531185056/images/2014/search_ico_01.png)
    no-repeat 0.164rem center;
  background-size: 0.4265rem 0.4265rem;
  position: relative;
  z-index: 0;
  display: block;
}
.mallsearch .i_h_shopping {
  background: url(//static1.mtime.cn/html5/20190531185056/images/2014/i_h_shopping01.png)
    no-repeat center center;
  background-size: auto 0.55rem;
  height: 1.1rem;
  width: 1rem;
  display: inline-block;
  background-size: auto 0.55rem;
  position: relative;
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
</style>
