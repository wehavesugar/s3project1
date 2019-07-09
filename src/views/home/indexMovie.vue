<template>
  <section class="m_bg_white">
    <article class="indexmovie">
      <h2>
        <a href="#/home/hot/">
          <i class="i_tnext"></i>
          <b>正在热映（{{movies.length}}部）</b>
        </a>
      </h2>
      <ul style="overflow: hidden;">
        <li v-for="(movie,index) in movies.slice(0,8)" :key="index">
          <a :href="'#/movie/'+movie.id+'/'">
            <div class="mpic">
              <img :src="movie.img" class="img_box" />
              <em v-if="movie.r>0" class="m_score">
                <i>{{movie.r}}</i>
              </em>
            </div>
            <p>
              <span>{{movie.t}}</span>
            </p>
          </a>
        </li>
      </ul>
    </article>
    <article class="indexmovie indexclick">
      <h2>
        <a href="#/home/coming/">
          <i class="i_tnext"></i>
          <b>即将上映（{{comingMovies}}部）</b>
        </a>
      </h2>
    </article>
  </section>
</template>

<script>
import { getHomeData } from "@api/home";
export default {
  name: "IndexMovie",
  async created() {
    let response = await getHomeData();
    this.movies = response.ms;
    this.comingMovies = response.totalComingMovie;
  },
  data() {
    return {
      movies: [],
      comingMovies: ""
    };
  }
};
</script>

<style scoped>
.m_bg_white {
  background: #fff;
}
.indexmovie li p {
  padding: 0.125rem 0 0;
  width: 1.75rem;
  margin-bottom: 0.25rem;
  height: 0.95rem;
  overflow: hidden;
}

.indexmovie li p span {
  font-size: 0.3283rem;
  line-height: 1.2;
}

.m_score i {
  font-size: 0.275‬rem;
}
.m_score {
  position: absolute;
  right: 0.075rem;
  top: 0.075rem;
  background: #659d0e;
  width: 0.5rem;
  height: 0.45rem;
  color: #fff;
  border-radius: 0;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  line-height: 0.45rem;
  text-align: center;
}
.indexmovie li .mpic img {
  width: 100%;
  border: 0;
  border: 1px solid #ddd;
}
.indexmovie li .mpic {
  position: relative;
  margin: auto;
  width: 1.625rem;
  height: 2.45rem;
}
.indexmovie li {
  display: inline-block;
  width: 25%;
  height: 3.6497916rem;
  text-align: center;
  margin: auto;
}
.indexmovie {
  padding: 0.5em 1.5em 1.5em;
}
.indexmovie h2 {
  position: relative;
  zoom: 1;
}
.indexmovie h2 a {
  display: block;
  line-height: 2;
}
.i_tnext,
.i_next {
  width: 0.336rem;
  height: 0.192rem;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.096rem;
  overflow: hidden;
  line-height: 2.64rem;
  text-indent: -999px;
  transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  display: block;
  background: #fff url("../../../public/img/i-tmore.png") no-repeat center
    center;
  background-size: auto 0.192rem;
}
.indexmovie h2 b {
  font-size: 0.422rem;
  color: #333;
}
.indexclick {
  margin-top: -0.25rem;
  border-top: 1px solid #d8d8d8;
  margin-left: 0.375rem;
  padding-left: 0;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
</style>
