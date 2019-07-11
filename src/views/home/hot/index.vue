<template>
  <div id="wrap">
    <Tabhot />
    <SearchBar />
    <div class="content">
      <ul>
        <li v-for="(item,index) in hotmovie" :key="index">
          <div class="movie_img">
            <a href="#">
              <img :src="item.img" />
              <i v-show="item.isHot" class="i_hot"></i>
            </a>
          </div>
          <div class="movie_con">
            <dl>
              <dd>
                <h3 class="movie_name">{{item.t}}</h3>
                <i v-show="item.r>0" class="m_score">{{item.r}}</i>
              </dd>
              <dt>
                <p class="movie_detail">
                  <i v-show="item.commonSpecial" class="i_dot"></i>
                  <span>{{item.commonSpecial}}</span>
                </p>
                <div class="info">
                  <i v-show="item.is3D" class="info_3D"></i>
                  <b v-show="item.isDMAX" class="info_screen"></b>
                </div>
              </dt>
            </dl>
            <div class="fuc">
              <i>
                <i>{{item.cC}}</i>家影院上映
                <i>{{item.NearestShowtimeCount}}</i>场
              </i>
              <a href="#">购票</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Tabhot from "@components/tabhot.vue";
import SearchBar from "@components/searchbar.vue";
import { getMovieHot } from "@api/hot.js";
import { mapState } from "vuex";
//console.log(getMovieHot);
export default {
  components: { Tabhot, SearchBar },
  name: "hot",
  async created() {
    let respose = await getMovieHot(this.cityId);
    //console.log(respose);
    this.hotmovie = respose.ms;
    console.log(respose.ms);
  },
  computed: {
    ...mapState({
      cityId: state => state.city.cityId
    })
  },
  data() {
    return {
      hotmovie: []
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
.content {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.3514rem;
}
.content ul {
  overflow: hidden;
  width: 100%;
}
.content ul li {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.2rem 0 0.2rem 0;
  border-bottom: 1px solid #d8d8d8;
}
.content ul li .movie_img {
  width: 1.52rem;
  height: 2.2rem;
  margin-right: 0.2rem;
  position: relative;
}
.movie_img img {
  width: 100%;
}
.movie_img .i_hot {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 0.73rem;
  height: 0.73rem;
  background: url(../../../../public/img/i_hot.png) no-repeat 0 0;
  background-size: contain;
}
.content ul li .movie_con {
  width: 5.28rem;
  height: 2.2rem;
}
.movie_con dd {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}
.movie_con .movie_name {
  font-size: 0.36rem;
  font-weight: 900;
  margin-right: 0.2rem;
}
.movie_con .m_score {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #659d0e;
  color: #fff;
}
.movie_con dt {
  width: 100%;
}
.movie_detail {
  padding: 0.1rem 0;
}
.movie_detail .i_dot {
  display: inline-block;
  width: 0.3rem;
  height: 0.25rem;
  background: url(../../../../public/img/i_dot_01.png) no-repeat 0 0;
  background-size: contain;
  margin: 0 0;
}
.movie_detail span {
  color: #659d0e;
  font-size: 0.28rem;
}
.info {
  height: 0.4rem;
}
.info_3D {
  display: inline-block;
  background: url(../../../../public/img/ia_cine_05.png) no-repeat 0 0;
  background-size: contain;
  width: 0.4rem;
  height: 0.38rem;
}
.info_screen {
  display: inline-block;
  background: url(../../../../public/img/ia_cine_15.png) no-repeat 0 0;
  background-size: contain;
  width: 1rem;
  height: 0.38rem;
}
.fuc {
  width: 100%;
  height: 0.82rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fuc i {
  height: 0.8rems;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.26rem;
  color: #999;
}
.fuc a {
  width: 1.6rem;
  height: 0.6rem;
  background: #ff8600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  color: #fff;
  font-size: 0.3rem;
}
</style>