<template>
  <div>
    <TabBar />
    <div id="main">
      <Newsnav />
      <div class="banner">
        <div class="imgbox">
          <img
            :src=exploreNewsTitle.imageUrl
          />
        </div>
        <h2 class="backtitle">
          <b>{{exploreNewsTitle.title}}</b>
        </h2>
      </div>
      <ul class="newslist" >
        <li 
        v-for="(item,index) in exploreNewsList" :key="index"
        :class="item.images.length>0 ?'notbigpic':'table'">
          <!-- 单图样式 -->
          <div v-show="item.images.length = 0">
            <a class="pic" href="javasvcript:;" >
              <img :src=item.image />
            </a>
            <div class="content">
              <h4>{{item.title}}</h4>
              <div class="text">
                <time>12小时前{{item.publishTime}}</time>
                <span v-show="commentCount > 0">评论 {{item.commentCount}}</span>
              </div>
            </div>
          </div>
          <!-- 多图样式 -->
          <p>{{item.title}}</p>
          <div class="picbox" v-show="item.images.length > 0" >
            <a href="javascript:;" v-for="(ite,ind) in item.images" :key='ind'>
              <img :src=ite.url1 />
            </a>
          </div>
          <div class="text">
            <time>12小时前{{item.publishTime}}</time>
            <span v-show="commentCount > 0">评论 {{item.commentCount}}</span>
          </div>
        </li>
        <li class="notbigpic">
          <div>
            <div>
              <p>周迅主演《保持沉默》人物海报</p>
            </div>
            <div class="picbox">
              <a href="javascript:;">
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F07%2F03%2F113740.90728550.jpg"
                />
              </a>
              <a href="javascript:;">
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F07%2F03%2F112542.76939198.jpg"
                />
              </a>
              <a href="javascript:;">
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F07%2F03%2F112619.35721881.jpg"
                />
              </a>
            </div>
            <div class="text">
              <time>8小时前</time>
            </div>
          </div>
        </li>
        <li class="table">
          <div>
            <a class="pic" href="javasvcript:;">
              <img
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F09%2F161109.41751548.jpg&width=150&height=150&clipType="
              />
            </a>
            <div class="content">
              <h4>"摔跤吧爸爸"女主"遵循信仰"退演..</h4>
              <div class="text">
                <time>12小时前</time>
                <span>评论 12</span>
              </div>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import TabBar from "@common/tabbar.vue";
import Newsnav from "./component/newsnav.vue";
import { banner } from "@api/explore";
import { exploreNewsList } from "@api/explore";
export default {
  async created(){
    let response2 = await banner();
    let response = await exploreNewsList();
    // console.log(response2.newsList);
    this.exploreNewsTitle = response2.news;
    this.exploreNewsList = response.newsList;
    console.log(this.exploreNewsList);
    for(var i = 0; i < this.exploreNewsList.length; i++){
      console.log(this.exploreNewsList[i].image)
    }
  },
  data(){
    return{
      exploreNewsTitle:{},
      exploreNewsList:[]
    }
  },
  components: {
    Newsnav,
    TabBar
  },
  name: "explore"
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
}

.newslist > .table >div{
    display: flex;
}


.newslist > .table >div > .pic {
  display: block;
  height: 1.8rem;
  width: 1.8rem;
  margin-bottom: 0.0722rem;
}

.newslist > .table >div > .pic > img {
  display: block;
  box-sizing: border-box;
  height: 100%;
  width: 1.8rem;
  object-fit: cover;
}

.table>div > .content {
  padding: 0 0.36rem;
  box-sizing: border-box;
  width: 100%;
}

.table >div > .content > h4 {
  width: 100%;
  height: 0.88rem;
  font-size: 0.4rem;
  font-weight: bold;
  line-height: 0.44rem;
  box-sizing: border-box;
  margin-bottom: 0.1678rem;
}

.table >div > .content > .text {
  box-sizing: border-box;
  padding: 0.18rem 0 0.048rem 0;
  height: 0.4678rem;
  color: #999;
}

.table >div > .content > .text > time {
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
}

.newslist .notbigpic > div {
  width:100%;
}

.newslist .notbigpic > div > div > p {
    display: block;
    width: 100%;
    font-size: 0.44rem;
    font-weight: bold;
    line-height: 0.44rem;
    height: .44rem;
}

.notbigpic > div> .picbox {
  padding: 0.24rem 0 0.048rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
}

.notbigpic > div>  .picbox > a {
  display: block;
  width: 2.28rem;
  height: 1.56rem;
  margin-right: 0.02rem;
  overflow: hidden;
  display: block;
}

.notbigpic >div> .picbox > a > img {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    object-fit: cover;
    height: 100%;
    object-position: left top;
}

.notbigpic >div> .text {
  padding: 0.18rem 0 0.048rem 0;
  line-height: 0.23982rem;
  color: #999;
  box-sizing: border-box;
}

.notbigpic >div> .text > time {
  display: block;
  margin-right: 0.90234rem;
}
</style>