<template>
  <ul class="_zVfpB">
    <v-touch
      tag="li"
      class="_10VN3"
      v-for="(cinema,index) in cinemaList"
      :key="index"
      @tap="cinemaRoute(cinema.cinemaId)"
    >
      <dl>
        <dt class="_1yfC8">
          <p class="_eaesd">
            <span>{{cinema.cinameName}}</span>
          </p>
          <p v-if="cinema.minPrice" class="_sEOO0">
            <b>{{cinema.minPrice/100}}</b>
            <span>元起</span>
          </p>
        </dt>
        <dd class="_1yfC8 _10hXh">
          <p>{{cinema.address}}</p>
        </dd>
        <dd class="_HsWfu">
          <i v-if="cinema.feature.has3D">3D</i>
          <i v-if="cinema.feature.hasFeature4D">4D</i>
          <i v-if="cinema.feature.hasFeature4K">4K</i>
          <i v-if="cinema.feature.hasFeatureDolby">杜比</i>
          <i v-if="cinema.feature.hasFeatureHuge">巨幕</i>
          <i v-if="cinema.feature.hasIMAX">IMAX</i>
          <i v-if="cinema.feature.hasLoveseat">情侣座</i>
          <i v-if="cinema.feature.hasVIP">VIP</i>
        </dd>
        <dd class="_3R7rX"></dd>
      </dl>
    </v-touch>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import { getCinemas } from "@api/getCinema";
export default {
  name: "CinemaList",
  async created() {
    let response = await getCinemas(this.cityId);
    this.cinemaList = response.data.cinemaList;
  },
  computed: {
    ...mapState({
      cityId: state => state.city.cityId
    })
  },
  methods: {
    cinemaRoute(id) {
      this.$router.push({ name: "buyTicket", params: { cinemaId: id } });
    }
  },
  data() {
    return {
      cinemaList: []
    };
  }
};
</script>

<style scoped>
._zVfpB li._10VN3 {
  position: relative;
  margin-left: 0.2rem;
  padding: 0.3rem 0.3rem 0.3rem 0;
  border-bottom: 1px solid #d8d8d8;
}
._zVfpB li._10VN3 dl ._1yfC8 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
._zVfpB li._10VN3 dl dt p._eaesd span {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  zoom: 1;
  font-size: 0.32rem;
  line-height: 0.45rem;
}
._zVfpB li._10VN3 dl dt p._sEOO0 {
  color: #ff8600;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  zoom: 1;
}
._zVfpB li._10VN3 dl dt p._sEOO0 b {
  font-size: 0.3414rem;
  line-height: 0.43rem;
  font-weight: normal;
}
._zVfpB li._10VN3 dl dt p._sEOO0 span {
  font-size: 0.2rem;
  line-height: 0.43rem;
}
._zVfpB li._10VN3 dl ._1yfC8 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
._zVfpB li._10VN3 dl dd._10hXh p {
  color: #777;
  padding-right: 0.08rem;
  font-size: 0.26rem;
  line-height: 0.37rem;
  font-weight: 400;
}
._zVfpB li._10VN3 dl dd._HsWfu i {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  zoom: 1;
  height: 0.4rem;
  text-align: center;
  margin-top: 0.14rem;
  margin-right: 0.1rem;
  padding: 0.02rem;
  padding-top: 0.06rem;
  vertical-align: baseline;
  font-size: 0.18rem;
  line-height: 0.28rem;
  color: #6d8297;
  border: 1px solid #6d8297;
}
</style>
