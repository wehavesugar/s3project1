<template>
  <div>
    <div class="_2c8t9">
      <div class="_ofKlH">
        <div class="_1rior">
          <div class="_2tj9_">
            <b>深圳</b>
            <i class="i_block i_city"></i>
          </div>
          <input type="text" id="searchbox" placeholder="筛选影院" value />
          <a class="_386K1" style="display: none;"></a>
          <a class="_uWRXs">
            <span>搜索</span>
          </a>
        </div>
      </div>
    </div>
    <div class="_3HOBO">
      <ul class="_2TG3p">
        <li>
          <a href="javascript:void(0)">
            <span>离我最近</span>
            <i></i>
          </a>
        </li>
        <li class="_2CsUq"></li>
        <li>
          <a href="javascript:void(0)">
            <span>全城</span>
            <i></i>
          </a>
        </li>
        <li class="_2CsUq"></li>
        <li>
          <a href="javascript:void(0)">
            <span>影厅特效</span>
            <i></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityFilter"
};
</script>

<style scoped>
._3HOBO ._2TG3p li._2CsUq {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1px;
  flex: 0 0 1px;
  height: 0.30527rem;
  background: #d8d8d8;
  overflow: hidden;
}
._3HOBO ._2TG3p li a span {
  font-size: 0.26rem;
  line-height: 0.35rem;
}
._3HOBO ._2TG3p li a {
  color: #777;
  display: block;
  padding-top: 0.2238671875rem;
  padding-bottom: 0.2238671875rem;
}
._3HOBO ._2TG3p li {
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
  text-align: center;
}
._3HOBO ._2TG3p {
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

._2c8t9 ._ofKlH {
  background: #f6f6f6;
  position: relative;
  height: 100%;
  padding: 0.183164rem 0.35615234rem 0.178076rem;
  border-bottom: 1px solid #d8d8d8;
}
._2c8t9 ._ofKlH ._1rior {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
._2c8t9 ._ofKlH ._1rior ._2tj9_ {
  margin-right: 0.3561rem;
  height: 0.8125rem;
  line-height: 0.8125rem;
}
._2c8t9 ._ofKlH ._1rior ._2tj9_ b {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  zoom: 1;
  font-size: 0.3rem;
  font-weight: 400;
}
.i_city {
  width: 0.225rem;
  height: 0.125rem;
  margin-left: 0.125rem;
  margin-top: 0.075rem;
  background: url("/../public/img/i_tmore.png") no-repeat;
  background-size: 0.225rem 0.1198rem;
}
.i_block {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  zoom: 1;
}
._2c8t9 ._ofKlH ._1rior input {
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
  display: block;
  font-size: 0.32rem;
  width: 2.340429rem;
  height: 0.69979rem;
  padding-top: 0.01rem;
  margin-left: 0.5391rem;
  padding-right: 0.5391rem;
  padding-left: 0.7129rem;
  border: 1px solid #bbb;
  border-radius: 0.1640625rem;
  background: #fff url("/../public/img/search_ico_02.png") 0.1640625rem center;
  background-size: 0.4265625rem 0.4265625rem;
  position: relative;
  z-index: 0;
}
._2c8t9 ._ofKlH ._1rior ._uWRXs {
  box-sizing: border-box;
  color: #333;
  width: 1.4653125rem;
  display: block;
  text-align: right;
  height: 0.69979rem;
  line-height: 0.69979rem;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-left: 0.1628125rem;
}
</style>
