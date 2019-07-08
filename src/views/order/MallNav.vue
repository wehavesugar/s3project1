<template>
  <nav class="mallnav m_bg_whiteb">
    <ul>
      <li>
        <a data-url="http://mall.wv.mtime.cn/#!/commerce/list/?c1=25">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161133.99290860.jpg"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161133.99290860.jpg"
            style="display: block;"
          />
          <p>模玩</p>
        </a>
      </li>
      <li>
        <a data-url="http://mall.wv.mtime.cn/#!/commerce/list/?c1=8">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161141.82690725.jpg"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161141.82690725.jpg"
            style="display: block;"
          />
          <p>数码</p>
        </a>
      </li>
      <li>
        <a data-url="http://mall.wv.mtime.cn/#!/commerce/list/?c1=42">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161148.25620959.jpg"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161148.25620959.jpg"
            style="display: block;"
          />
          <p>服饰</p>
        </a>
      </li>
      <li>
        <a data-url="http://mall.wv.mtime.cn/#!/commerce/list/?c1=43">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161155.82939104.jpg"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161155.82939104.jpg"
            style="display: block;"
          />
          <p>家居</p>
        </a>
      </li>
      <li>
        <a
          data-url="http://mall.wv.mtime.cn/#!/commerce/list/?q=%E6%98%9F%E7%90%83%E5%A4%A7%E6%88%98"
        >
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161224.10155577.jpg"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161224.10155577.jpg"
            style="display: block;"
          />
          <p>星战</p>
        </a>
      </li>
      <li>
        <a data-url="http://mall.wv.mtime.cn/#!/commerce/list/?q=%E6%BC%AB%E5%A8%81">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161315.97010262.jpg"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161315.97010262.jpg"
            style="display: block;"
          />
          <p>漫威</p>
        </a>
      </li>
      <li>
        <a data-url="http://mall.wv.mtime.cn/#!/commerce/list/?q=%E8%9D%99%E8%B6%85">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161325.50615572.jpg"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161325.50615572.jpg"
            style="display: block;"
          />
          <p>蝙超</p>
        </a>
      </li>
      <li>
        <a data-url="http://mall.wv.mtime.cn/#!/commerce/list/">
          <img
            data-original="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161342.70896250.jpg"
            class="m_img"
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161342.70896250.jpg"
            style="display: block;"
          />
          <p>全部</p>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MallNav"
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
