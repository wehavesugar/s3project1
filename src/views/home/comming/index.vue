<template>
  <div id="wrap">
    <Tabhot />
    <SearchBar />
    <div class="upcoming">
      <div class="mosemovie">
        <h2>
          <b>最受关注</b>
          <span>(10部)</span>
        </h2>
        <div class="moviescroll">
          <ul>
            <li v-for="(item,index) in attention" :key="index">
              <span>{{item.rMonth}}月{{item.rDay}}日</span>
              <div class="moviebox">
                <div class="upmoviepic">
                  <a href="#">
                    <img :src="item.image" alt />
                  </a>
                </div>
                <div class="movieinfo">
                  <div class="info">
                    <a href="#">{{item.title}}</a>
                    <p>
                      <b class="num">{{item.wantedCount}}</b>
                      人想看 {{item.type}}
                    </p>
                    <p class="info_txt">导演：{{item.director}}</p>
                    <p class="info_txt">演员：{{item.actor1}} {{item.actor2}}</p>
                  </div>
                  <div class="btn">
                    <a href="#" class="btn_orange">超前预售</a>
                    <a href="#" class="btn_green">预告片</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="banner">
      <img src="@public/img/szw_750210.jpg" />
    </div>
    <div class="space"></div>
    <div class="movie_content">
      <h2>
        <b>即将上映</b>
        <span>(63部)</span>
      </h2>
      <div class="movielist">
        <div class="month">
          <span>7月</span>
        </div>
        <ul>
          <li v-for="(item,index) in moviecomings" :key="index">
            <div class="day">
              <span>{{item.rDay}}日</span>
            </div>
            <div class="movieboxlist">
              <div class="moviepic">
                <a href="#">
                  <img :src="item.image" alt />
                </a>
              </div>
              <div class="movieinfo">
                <div class="info">
                  <a href="#">{{item.title}}</a>
                  <p>
                    <b class="num">{{item.wantedCount}}</b>
                    人想看 - {{item.type}}
                  </p>
                  <p class="info_txt">导演：{{item.director}}</p>
                </div>
                <div class="btn">
                  <a v-if="item.isTicket" href="#" class="btn_orange">超前预售</a>
                  <a v-if="item.isVideo" href="#" class="btn_green">预告片</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Tabhot from "@components/tabhot.vue";
import SearchBar from "@components/searchbar.vue";
import { getMovieComing } from "@api/coming.js";
export default {
  components: { Tabhot, SearchBar },
  name: "comming",
  async created() {
    let respose = await getMovieComing(this.cityId);
    //console.log(respose);
    this.attention = respose.attention;
    this.moviecomings = respose.moviecomings;
    //console.log(respose.attention);
    console.log(respose.moviecomings);
  },
  computed: {
    ...mapState({
      cityId: state => state.city.cityId
    })
  },
  data() {
    return {
      attention: [],
      moviecomings: []
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#wrap {
  width: 100%;
}

.upcoming {
  width: 100%;
  padding: 0.28rem 0.35rem;
  box-sizing: border-box;
  overflow: hidden;
  box-sizing: border-box;
}
.mosemovie > h2 {
  font-size: 0.36rem;
}
.mosemovie > h2 > span {
  color: #000;
}
.moviescroll {
  padding: 0.34rem 0 0 0;
  overflow-x: auto;
}

.moviescroll ul {
  width: 80rem;
  height: 3.42rem;
  display: flex;
  white-space: nowrap;
}
.moviescroll > ul > li {
  width: 6.82rem;
  position: relative;
  padding: 0.28rem 0 0 0;
  margin-right: 0.2rem;
  border-top: 1px solid #777;
  border-right: 1px solid #777;
}
.moviescroll > ul > li > span {
  position: absolute;
  top: -0.24rem;
  left: 0px;
  color: #777;
  background: #fff;
  display: block;
  width: 1.4rem;
  font-size: 0.32rem;
  text-align: right;
  padding-right: 0.2rem;
}
.moviebox {
  width: 6.2rem;
  height: 3rem;
  display: flex;
}

.upmoviepic {
  width: 2rem;
  height: 3rem;
  margin-right: 0.3rem;
}
.upmoviepic > a {
  display: block;
  width: 1.8rem;
  height: 3rem;
}
.upmoviepic > a > img {
  width: 1.8rem;
  height: 3rem;
}
.movieinfo {
  width: 4.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 3rem; */
}
.movieinfo > .info > a {
  font-size: 0.38rem;
  font-weight: 900;
  line-height: 0.42rem;
}
.movieinfo > .info p {
  font-size: 0.28rem;
  line-height: 0.52rem;
}
.movieinfo > .info p .num {
  color: #ff8600;
}
.movieinfo .btn {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  height: 0.8rem;
}
.movieinfo .btn > a {
  display: block;
  width: 2rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 0.34rem;
}
.btn_orange {
  background: #ff8600;
  color: #fff;
  border: 1px solid #ff8600;
}
.movieinfo .btn > .btn_orange_small {
  display: block;
  width: 1.7rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 0.2rem;
  font-size: 0.26rem;
  background: #ff8600;
  color: #fff;
  border: 1px solid #ff8600;
  margin-top: 0.15rem;
}
.btn_green {
  border: 2px solid #659c0d;
  color: #659c0d;
}
.movieinfo .btn > .btn_green_small {
  display: block;
  width: 1.7rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 0.2rem;
  font-size: 0.26rem;
  border: 1px solid #659c0d;
  color: #659c0d;
  margin-top: 0.15rem;
}
.banner {
  height: 2rem;
}
.banner img {
  width: 100%;
}
.space {
  width: 100%;
  background: #eee;
  height: 0.36rem;
}

.movie_content {
  width: 100%;
  padding: 0.2rem 0 0 0.35rem;
  box-sizing: border-box;
}
.movielist .month {
  border-bottom: 1px solid #bbb;
  padding: 0.15rem 0 0.2rem;
}
.month span {
  font-size: 0.32rem;
}
.movielist > ul > li {
  display: flex;
  padding: 0.4rem 0;
  border-bottom: 2px solid #d8d8d8;
}
.day {
  width: 0.6rem;
  color: #999;
}
.movieboxlist {
  width: 6.4rem;
  display: flex;
}
.moviepic {
  width: 1.5rem;
  height: 2.1rem;
  margin-right: 0.3rem;
}

.moviepic > a {
  display: block;
  width: 1.5rem;
  height: 2.1rem;
}
.moviepic a img {
  display: block;
  width: 1.5rem;
  height: 2.1rem;
}
</style>