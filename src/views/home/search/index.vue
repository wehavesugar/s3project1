<template>
  <div id="wrap">
    <div class="search">
      <a @click="backward()" href="#" class="back"></a>
      <input type="text" placeholder="影院/影片/影人，任你搜" id="sesrchbox" />
      <span class="ser_cancel">搜索</span>
    </div>
    <div class="content">
      <article class="movie_data">
        <b>42,560</b>
        <span>部影视作品</span>
        <b>12,462</b>
        <span>位影人</span>
      </article>
      <h3>热门搜索</h3>
      <article class="search_key">
        <a href="#">
          <span>千与千寻</span>
        </a>
        <a href="#">
          <span>玩具总动员</span>
        </a>
        <a href="#">
          <span>狮子王：3</span>
        </a>
        <a href="#">
          <span>绝杀慕尼黑</span>
        </a>
        <a href="#">
          <span>千与千寻</span>
        </a>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
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
.search {
  width: 100%;
  height: 1rem;
  background: #1c2635;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  box-sizing: border-box;
}

.back {
  display: block;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
  background: url(../../../../public/img/h_btn_back.png) no-repeat 0.3rem center;
}

#sesrchbox {
  border: 1px solid #bbb;
  padding: 0.16rem 0.6rem 0.16rem 0.64rem;
  border-radius: 0.1rem;
  position: relative;
  z-index: 0;
  margin-left: 0.4rem;
  font-size: 0.32rem;
  height: 0.7rem;
  width: 4.8rem;
  line-height: 0.44rem;
  background: #fff url(../../../../public/img/search_ico_01.png) no-repeat
    0.15rem center;
  background-size: 0.4rem 0.4rem;
  /* box-sizing: border-box; */
}

.ser_cancel {
  display: block;
  width: 1rem;
  height: 0.6rem;
  font-size: 0.32rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 0.1rem;
  margin-left: 0.4rem;
  background: #1c2635;
}

.content {
  overflow: hidden;
}

.movie_data {
  margin: 0.42rem 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
}

.movie_data b {
  color: #e3e3e3;
  font-size: 0.56rem;
  font-weight: normal;
}

.movie_data span {
  color: #e3e3e3;
  font-size: 0.3rem;
  margin: 0.1rem;
}

.content > h3 {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.32rem;
  color: #999;
  padding: 0 0.34rem;
  font-weight: normal;
  background: #f6f6f6;
  border-bottom: 1px solid #dfdfdf;
  border-top: 1px solid #dfdfdf;
}

.search_key {
  padding: 0.2rem;
}

.search_key > a {
  display: inline-block;
  vertical-align: middle;
  color: #1e7dd7;
  padding: 0.14rem 0.28rem;
  border: 0.1em solid #b6dcff;
  border-radius: 3em;
  font-size: 0.32rem;
  margin: 0.2rem 0 0.1rem 0.2rem;
}
</style>

