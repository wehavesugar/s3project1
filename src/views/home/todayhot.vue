<template>
  <section class="m_bg_gray">
    <mallshop />
    <div class="m_bg_white todayhot">
      <h2>
        <a href="javascript:void(0)">
          <b>今日热点</b>
        </a>
      </h2>
      <ul id="hotPoints">
        <li v-for="(article,index) in articles" :key="index">
          <div class="table">
            <div class="todaypic">
              <a :href="'#/home/news/'+article.id">
                <img class="m_img img_box" :src="article.img" />
              </a>
            </div>
            <div class="todaytxt td">
              <h2>
                <a :href="'#/news/movie'+article.id">{{article.title}}</a>
              </h2>
              <p>
                <span>{{article.desc}}</span>
              </p>
              <p>
                <time>2019-05-07 16:57:00</time>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { getTodayHot } from "@api/home";
import Mallshop from "@components/mallShop.vue";
export default {
  name: "todayHot",
  components: { Mallshop },
  async created() {
    const response = await getTodayHot();
    this.articles = response.hotPoints;
  },
  data() {
    return {
      articles: []
    };
  },
  methods: {}
};
</script>

<style scoped>
.m_bg_gray {
  background: #f6f6f6;
}
.todayhot {
  padding-top: 0.125rem;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  background: white;
}
.todayhot h2 {
  position: relative;
}
.todayhot h2 a {
  display: block;
  line-height: 2;
}
.todayhot h2 a b {
  font-size: 0.42rem;
  color: #000;
}
.todayhot li:first-child {
  padding-top: 0;
}
.todayhot li {
  border-bottom: 1px solid #d8d8d8;
  padding: 0.325rem 0 0.3rem 0;
}
.table {
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: box;
}
.todayhot li .todaypic {
  margin-right: 0.25rem;
  width: 2.8rem;
  display: inline-block;
}
.todayhot li .todaypic a {
  display: block;
  overflow: hidden;
  height: 2rem;
}
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
.todayhot li .todaytxt h2 {
  padding: 0 0 0.1rem 0;
}
.todayhot li .todaytxt h2 a {
  font-size: 0.37rem;
  line-height: 1.1;
  color: #000;
}
.todayhot li .todaytxt p {
  padding: 0.048rem 0;
}
.todayhot li .todaytxt p span {
  font-size: 0.28rem;
  color: #777;
}
.todayhot li .todaytxt p time {
  font-size: 0.2rem;
  color: #999;
}
.todayhot li:last-child {
  border: 0;
}
.m_img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
