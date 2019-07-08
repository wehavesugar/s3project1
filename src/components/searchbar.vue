<template>
  <div class="movie_search">
    <div class="hea_search">
      <div class="table_v_c">
        <div @click="cityList()" class="cityshow">
          <b>深圳</b>
          <i class="i_block i_city"></i>
        </div>
        <p class="input td">
          <a href="#/search/">
            <span>影片/影院/影人，任你搜</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    cityList() {
      this.$router.push("/citylist");
    }
  }
};
</script>

<style scoped>
.movie_search .hea_search {
  background: #f6f6f6;
  padding: 0.2rem 0.375rem 0.1875rem;
  border-bottom: 1px solid #d8d8d8;
}

.movie_search .cityshow {
  margin-right: 0.375rem;
  height: 0.875rem;
  line-height: 0.875rem;
}

.movie_search .cityshow b {
  font-size: 0.375rem;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
}

.hea_search,
.hea_search .table_v_c,
.table_v_c {
  height: 100%;
  display: -webkit-box;
  -webkit-box-align: center;
  -moz-box-align: center;
  box-align: center;
}
.cityshow b {
  font-size: 0.28rem;
  font-weight: normal;
  float: left;
  margin-top: 0.2rem;
}
.i_city {
  width: 0.225rem;
  height: 0.125rem;
  margin-left: 0.125rem;
  margin-top: 0.075rem;
  background: url("../../public/img/i_city.png") no-repeat;
  background-size: cover;
}
.i_block {
  display: inline-block;
}
.movie_search .hea_search .input {
  /* 1 em =  15.75px*/
  font-size: 0.459375rem;
  height: 0.7875rem;
  line-height: 1.2;
  padding: 0 0.590625rem 0 0.65625rem;
  border-radius: 0.1640625rem;
  background: #fff url("../../public/img/search_ico_01.png") no-repeat
    0.1640625rem center;
  background-size: 0.4265625rem 0.4265625rem;
  position: relative;
  z-index: 0;
}

.hea_search a,
.hea_search a span {
  display: block;
  width: 3.9866666rem;
}
.movie_search .hea_search .input span {
  display: inline-block;
  vertical-align: middle;
  color: #777;
  font-size: 0.3283rem;
  line-height: 0.7709rem;
}
.movie_search .hea_search .input {
  border: 1px solid #bbb;
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
</style>
