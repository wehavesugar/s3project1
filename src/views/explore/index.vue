<template>
  <div>
    <TabBar />
    <div id="main">
      <Newsnav />
      <Banner :getBanner = 'getBanner' />
      <!-- <div class="banner">
        <div class="imgbox">
          <img :src="exploreNewsTitle.imageUrl" />
        </div>
        <h2 class="backtitle">
          <b>{{exploreNewsTitle.title}}</b>
        </h2>
      </div> -->
      <ul class="newslist">


        <li
          v-for="(item,index) in exploreNewsList"
          :key="index"
          :class="item.images.length>0 ?'notbigpic':'table'"
        >
          <div class="picbox" v-if="item.type == 0">
            <a class="pic" href="javasvcript:;">
              <img :src="item.image" />
            </a>
          </div>
          <div class="picbox" v-if="item.type == 2">
            <a class="pic" href="javasvcript:;">
              <img :src="item.image" />
              <i class="i_video"></i>
            </a>
          </div>
          <div class="picbox"  v-if="item.type == 1">
            <a href="javascript:;" v-for="(ite, ind) in item.images" :key="ind">
              <img :src="ite.url1" />
            </a>
          </div>
          <div class="title">
            <p>{{item.title}}</p>
          </div>
          <div class="text">
            <time>{{Math.floor((time - item.publishTime)/3600)+8}}小时前</time>
            <i v-if="item.commentCount>0 && item.type !== 1 ">评论 {{item.commentCount}}</i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TabBar from "@common/tabbar.vue";
import Newsnav from "./component/newsnav.vue";
import Banner from './component/banner.vue'
import { banner } from "@api/explore";
import { exploreNewsList } from "@api/explore";

export default {
    components: {
    Newsnav,
    TabBar,
    Banner
  },

  async created() {
    let response = await exploreNewsList();
    let response2 = await banner();
    this.exploreNewsList = response.newsList;
    this.getBanner = response2.news;
    // console.log(this.exploreNewsList);



    var t = new Date().getTime();
    this.time = parseInt(t / 1000);
        // console.log(this.time,this.exploreNewsList[0].publishTime);
  },
  data() {
    return {
      getBanner:{},
      exploreNewsList: [],
      time:null
    };
  },
  name: "news"
};

</script>

<style scoped>
#main {
  width: 100%;
  overflow-y: auto;
}
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
  font-size: 0.36rem;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  line-height: 0.9356rem;
  background: rgba(0, 0, 0, 0.5);
}

.banner > .backtitle > b {
  font-weight: 900;
}

.banner > .newslist {
  width: 100%;
}

.newslist {
  padding-left: 0.36rem;
}

.newslist > .table {
  padding-top: 0.36rem;
  padding-bottom: 0.324rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  overflow: hidden;
}

.newslist .table .picbox {
  float: left;
}

.newslist .table .picbox .pic {
  display: block;
  height: 1.8rem;
  width: 1.8rem;
  margin-bottom: 0.0722rem;
  position: relative;
}

.newslist .table .picbox .pic .i_video{
  display: inline-block;
  position: absolute;
  bottom: .12rem;
  right: .12rem;
  width: .69593rem;
  height: .69593rem;
  overflow: hidden;
  background: url(//static1.mtime.cn/html5/20190531185056/images/2014/viceoplay.png) no-repeat center center;
  background-size: cover;
}


.newslist .table .picbox .pic img {
  display: block;
  box-sizing: border-box;
  height: 100%;
  width: 1.8rem;
  object-fit: cover;
}

.table .title {
  float: left;
  width: 5.3rem;
  padding: 0 0.36rem;
  -webkit-box-sizing: border-box;
}

.table .title p {
    width: 100%;
    height: 0.88rem;
    font-size: 0.35rem;
    font-weight: bold;
    line-height: 0.44rem;
    box-sizing: border-box;
    margin-bottom: 0.1678rem;
}

.table .text {
  float: left;
  box-sizing: border-box;
  padding: 0.18rem 0 0.048rem .36rem;
  height: 0.4678rem;
  color: #999;
}

.table .text > time {
  margin-right: 0.90234rem;
}

.newslist .notbigpic {
  display: -webkit-box;
  width: 100%;
  flex-direction: column;
  padding-right: 0.36rem;
  padding-bottom: 0.06rem;
  box-sizing: border-box;
  padding-top: 0.36rem;
  border-bottom: 1px solid #ddd;
  position: relative;
}

.newslist .notbigpic .title {
  width: 100%;
  position: absolute;
  top: 0;
  margin-top: 0.36rem;
}

.newslist .notbigpic .title p {
  display: block;
  width: 100%;
  font-size: 0.35rem;
  font-weight: bold;
  line-height: 0.44rem;
  height: 0.44rem;
}

.notbigpic .picbox {
  padding: 0.24rem 0 0.048rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  margin-top: .4rem;
}

.notbigpic .picbox a {
  display: block;
  width: 2.28rem;
  height: 1.56rem;
  margin-right: 0.02rem;
  overflow: hidden;
  display: block;
}

.notbigpic .picbox a img {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  object-fit: cover;
  height: 100%;
  object-position: left top;
}

.notbigpic .text {
  display: flex;
  padding: 0.18rem 0 0.048rem 0;
  line-height: 0.23982rem;
  color: #999;
  box-sizing: border-box;
}

.notbigpic .text > time {
  display: block;
  margin-right: 0.90234rem;
}
</style>