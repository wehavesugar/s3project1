<template>
  <nav class="mallnav m_bg_whiteb">
    <ul>
      <li v-for="(item, index) in navigatorIcon" :key="index">
        <a :data-url=item.url>
          <img
            :data-original=item.image
            class="m_img"
            :src=item.image
            style="display: block;"
          />
          <p>{{item.iconTitle}}</p>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { marketFirstPage } from '../../api/order.js'
export default {
  name: "MallNav",
  async created(){
    let response = await marketFirstPage();
    this.navigatorIcon = response.navigatorIcon;
  },
  data(){
    return{
      navigatorIcon: []
    }
  }
};
</script>

<style scoped>
.mallnav {
  margin-bottom: 0.325rem;
}
.m_bg_whiteb {
  border-bottom: 1px solid #e5e4e4;
  box-shadow: 0 0.1rem 0.1rem rgba(51, 51, 51, 0.01);
  background: white;
  position: relative;
  z-index: 2;
}

.mallnav ul {
  font-size: 0.3rem;
  color: #777;
  overflow: hidden;
}
.mallnav li {
  float: left;
  width: 25%;
}
.mallnav li a {
  display: block;
  text-align: center;
  color: #777;
  padding: 0.3rem 0 0.275rem;
}
.mallnav li p {
  padding: 0.075rem;
  line-height: 1.4;
  color: #777;
}
.mallnav li img {
  width: 1rem;
  height: 1rem;
  margin: auto;
}
</style>
