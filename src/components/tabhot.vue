<template>
  <header class="header">
    <a @click="backward()" href="#" class="back"></a>
    <ul class="show_option">
      <li class="opt_active">
        <a href="#">
          <span>正在热映</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>即将上映</span>
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "tabhot",
  methods: {
    backward() {
      this.$router.back();
    },
    cityList() {
      this.$router.push("/citylist");
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 1.056rem;
  background: #1c2635;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  position: relative;
}
.back {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  top: 0.3rem;
  left: 0.1rem;
  color: #fff;
  text-align: center;
  background: url(../../public/img/h_btn_back.png) no-repeat 0.3rem center;
  background-size: contain;
}
.show_option {
  float: left;
  width: 5.16rem;
  height: 0.6756rem;
  background: #0d121a;
  border-radius: 0.3378rem;
  text-align: center;
}
.show_option > li {
  width: 2.5622rem;
  height: 0.6356rem;
  border-radius: 0.3178rem;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
.show_option > li > a {
  display: block;
}
.show_option > li > a > span {
  color: #999;
  font-size: 0.28rem;
}
.opt_active {
  background: #1c2635;
}
.opt_active a {
  color: #fff;
}
</style>
