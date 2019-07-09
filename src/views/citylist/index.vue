<template>
  <div id="wrap">
    <header class="header">
      <a @click="backward()" href="javascript:void(0);" class="back"></a>
      <h3>选择城市</h3>
    </header>
    <div class="search">
      <input type="text" placeholder="请输入搜索关键词" id="sesrchbox" />
      <span class="ser_cancel">取消</span>
    </div>
    <div>
      <div class="citylist">
        <dl>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
          <dd>
            <a href="#">武汉</a>
          </dd>
        </dl>
      </div>
      <div class="current_hot">
        <dd class="curren">
          <p>当前城市</p>
          <ul>
            <li>
              <a href="#">深圳</a>
            </li>
          </ul>
        </dd>
        <dd class="hot_list">
          <p>热门城市</p>
          <ul>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
            <li>上海</li>
          </ul>
        </dd>
      </div>
      <div class="cities">
        <dd>
          <p></p>
          <ul>
            <li>安庆</li>
            <li>鞍山</li>
          </ul>
        </dd>
        <dd>
          <p>A</p>
          <ul>
            <li>安庆</li>
            <li>鞍山</li>
            <li>安康</li>
            <li>安阳</li>
          </ul>
        </dd>
        <dd>
          <p>B</p>
          <ul>
            <li>安庆</li>
            <li>鞍山</li>
            <li>安康</li>
            <li>安阳安阳</li>
            <li>安阳</li>
          </ul>
        </dd>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "citylist",
  methods: {
    backward() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
#wrap {
  width: 100%;
}
.header {
  width: 100%;
  height: 1.056rem;
  background: #1c2635;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  box-sizing: border-box;
  position: relative;
}
/* .back {
  display: block;
  width: 1.056rem;
  height: 1.056rem;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
  background: url(../../../public/img/h_btn_back.png) no-repeat 0.3rem center;
} */
.back {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  top: 0.3rem;
  left: 0.1rem;
  color: #fff;
  text-align: center;
  background: url(../../../public/img/h_btn_back.png) no-repeat 0.3rem center;
  background-size: contain;
}
.header > h3 {
  font-size: 0.34rem;
  color: #fff;
}
.search {
  height: 1.2rem;
  padding: 0.16rem 0.6rem;
  display: flex;
}
#sesrchbox {
  border: 1px solid #bbb;
  padding: 0.16rem 0.6rem 0.16rem 0.64rem;
  border-radius: 0.1rem;
  position: relative;
  z-index: 0;
  margin-left: 0.32rem;
  font-size: 0.32rem;
  height: 0.8rem;
  width: 6rem;
  line-height: 0.44rem;
  background: url(../../../public/img/search_ico_01.png) no-repeat 0.15rem
    center;
  background-size: 0.4rem 0.4rem;
}
.ser_cancel {
  display: none;
  width: 1rem;
  height: 0.8rem;
  font-size: 0.32rem;
  color: #999;
  line-height: 0.8rem;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 0.1rem;
  margin-left: 0.15rem;
}
.citylist dl {
  overflow: hidden;
  display: none;
}
.citylist dl dd {
  width: 7.1rem;
  height: 0.76rem;
  margin-left: 0.36rem;
  border-bottom: 1px solid #d8d8d8;
}
.citylist dl dd a {
  display: block;
  height: 0.76rem;
  line-height: 0.76rem;
  font-size: 0.32rem;
  color: #000;
}
.current_hot {
  overflow: hidden;
}
.curren > p {
  color: #777;
  background: #ebebeb;
  padding: 0 0.34rem;
  line-height: 0.7rem;
  height: 0.7rem;
  font-size: 0.3rem;
  box-shadow: 0 1px 1px rgba(51, 51, 51, 0.1) inset;
}
.curren > ul {
  padding: 0 0.36rem 0.36rem 0.36rem;
  overflow: hidden;
}
.curren > ul > li {
  width: 1.69rem;
  height: 0.7rem;
  padding-top: 0.36rem;
  float: left;
  font-size: 0.32rem;
}
.curren > ul > li > a {
  color: #000;
}
.hot_list > p {
  color: #777;
  background: #ebebeb;
  padding: 0 0.34rem;
  line-height: 0.7rem;
  height: 0.7rem;
  font-size: 0.3rem;
  box-shadow: 0 1px 1px rgba(51, 51, 51, 0.1) inset;
}
.hot_list > ul {
  padding: 0 0.36rem 0.36rem 0.36rem;
  overflow: hidden;
}
.hot_list > ul > li {
  width: 1.69rem;
  height: 0.7rem;
  padding-top: 0.36rem;
  float: left;
  font-size: 0.32rem;
}
.hot_list > ul > li > a {
  color: #000;
}
.cities > dd > p {
  color: #777;
  background: #ebebeb;
  padding: 0 0.34rem;
  line-height: 0.7rem;
  height: 0.7rem;
  font-size: 0.34rem;
  box-shadow: 0 1px 1px rgba(51, 51, 51, 0.1) inset;
}
.cities > dd > ul {
  padding: 0 0.36rem 0.36rem 0.36rem;
  overflow: hidden;
}
.cities > dd > ul > li {
  width: 1.69rem;
  height: 0.7rem;
  padding-top: 0.36rem;
  float: left;
  font-size: 0.32rem;
}
.cities > dd > ul > li > a {
  color: #000;
}
</style>