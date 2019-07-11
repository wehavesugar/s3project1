<template>
  <div>
    <TabBar />
    <div id="main">
      <Newsnav />
      <div class="banner">
        <div class="imgbox">
          <img :src="trailerBanner.imageUrl" />
        </div>
        <h2 class="backtitle">
          <b>{{trailerBanner.title}}</b>
          <i class="i-vedio"></i>
          <!--无法显示,另外以下的播放按钮-->
        </h2>
      </div>
      <ul class="newslist">
        <li class="table" v-for="(item, index) in trailerNewsList" :key="index">
          <div class="npic">
            <a href="javascript:void(0);">
              <i class="i_video"></i>
              <img :src="item.coverImg" />
            </a>
          </div>
          <div class="newstxt">
            <h2>{{item.movieName}}</h2>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TabBar from "../../../common/tabbar.vue";
import Newsnav from "../component/newsnav";
import { trailerNewsList } from "@api/explore";
import { banner } from "@api/explore";
export default {
  async created() {
    let response = await trailerNewsList();
    let response2 = await banner();
    this.trailerNewsList = response.trailers;
    this.trailerBanner = response2.trailer;
  },
  components: {
    Newsnav,
    TabBar
  },
  data() {
    return {
      trailerNewsList: [],
      trailerBanner: {}
    };
  },
  name: "trailer"
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 4.32rem;
  position: relative;
}

.banner > .imgbox {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.banner > .imgbox > img {
  width: 100%;
  display: block;
}

.backtitle {
  width: 100%;
  color: #fff;
  font-size: 0.48rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.288rem 0;
  text-align: center;
  line-height: 0.48rem;
}

.banner > .backtitle > b {
  display: block;
  width: 5.8rem;
  font-weight: 900;
  margin: 0 auto;
  text-align: center;
}

.banner .backtitle .i-vedio {
  display: block;
  width: 0.72rem;
  height: 0.72rem;
  background: url(//static1.mtime.cn/html5/20190531185056/images/2014/viceoplay.png)
    no-repeat center center;
    background-size: cover;
  position: absolute;
  bottom: 0.288rem;
  right: 0.288rem;
}
.newslist {
  width: 100%;
  padding-left: 0.36rem;
  box-sizing: border-box;
}

.newslist li {
  display: -webkit-box;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 0.36rem 0;
  position: relative;
  box-sizing: border-box;
}

.npic {
  width: 3rem;
  height: 1.8rem;
}

.npic a {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.npic a .i_video {
  display: inline-block;
  position: absolute;
  bottom: 0.12rem;
  right: 0.12rem;
  width: 0.69593rem;
  height: 0.69593rem;
  overflow: hidden;
  background: url(//static1.mtime.cn/html5/20190531185056/images/2014/viceoplay.png)
    no-repeat center center;
  background-size: cover;
}

.npic a img {
  width: 100%;
  height: auto;
  display: block;
}

.newstxt {
  padding: 0.072rem 0.36rem 0;
  box-sizing: border-box;
  width: 4.14rem;
  height: 1.92rem;
}

.newstxt h2 {
  font-size: 0.352rem;
  line-height: 0.52rem;
  font-weight: bold;
}
</style>
