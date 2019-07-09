<template>
  <div class="wrap">
    <header class="header">
      <a @click="backward()" href="#" class="back"></a>
      <a href="#" class="share"></a>
    </header>
    <div class="content">
      <div class="toptitle">
        <h2>皮卡丘凭什么征服全世界？</h2>
        <p>
          <time>2019-5-7 8:57:00</time>
          <span>
            <a href="#">评论22</a>
            <a href="#">相关电影/影人</a>
          </span>
        </p>
      </div>
      <div class="txtmid">
        <div>
          <div class="preview-img">
            <img
              src="//imgproxy.mtime.cn/get.ashx?uri=https%3A%2F%2Fimg5.mtime.cn%2FCMS%2FNews%2F2019%2F05%2F07%2F011922.32868839_620X620.jpg&width=355&height=0&clipType=3"
              alt
            />
          </div>
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div>
          <b>时光网特稿</b> 《大侦探皮卡丘》将于5月10日登陆内地影院，作为宝可梦系列首部真人电影，皮卡丘也打破次元壁，从二次元穿越到三次元现身，不知大家对皮卡丘的毛茸茸造型评价如何？
        </div>
        <div class="preview-img">
          <img
            src="//imgproxy.mtime.cn/get.ashx?uri=https%3A%2F%2Fimg5.mtime.cn%2FCMS%2FNews%2F2019%2F05%2F07%2F125603.66876788_620X620.jpg&width=355&height=0&clipType=3"
            alt
          />
        </div>
        <div class="news_editor">
          <p>(作者：日灼 编辑：日灼)</p>
        </div>
      </div>
    </div>
    <div class="news_tool">
      <ul>
        <li class="reply">
          <i class="i_reply">
            <b class="replynum">
              <span>22</span>
            </b>
          </i>
        </li>
        <li class="info">
          <a href="#">
            <span>相关电影/影人</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  methods: {
    backward() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
#wrap {
  width: 100%;
}
.header {
  width: 100%;
  height: 1.056rem;
  background: #1c2635;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  box-sizing: border-box;
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
  background: url(../../../../public/img/h_btn_back.png) no-repeat 0.3rem center;
  background-size: contain;
}
.share {
  display: block;
  width: 1rem;
  height: 0.4rem;
  position: absolute;
  top: 0.36rem;
  right: 0.1rem;
  color: #fff;
  text-align: center;
  background: url(../../../../public/img/i_h_share.png) no-repeat 0.3rem center;
  background-size: contain;
}
.content {
  padding: 0.34rem;
  overflow: hidden;
}
.toptitle {
  padding-bottom: 0.34rem;
}
.toptitle h2 {
  font-size: 0.36rem;
  line-height: 0.5rem;
  font-weight: normal;
}
.toptitle p {
  margin-top: 0.34rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.28rem;
}
.toptitle p time {
  color: #999;
}
.toptitle p span a {
  color: #1e7dd7;
  margin-left: 0.2rem;
}
.txtmid {
  overflow: hidden;
  font-size: 0.3rem;
}
.preview-img img {
  max-width: 100%;
  height: 3.6rem;
}
.txtmid > div {
  padding-top: 0.8rem;
}
.news_tool {
  padding: 0.1rem 0.32rem;
  border-top: 1px solid #979797;
  border-bottom: 1px solid #979797;
}
.news_tool ul {
  display: flex;
  justify-content: space-between;
}
.news_tool ul li {
  display: flex;
  align-items: center;
}
.news_tool ul .reply {
  position: relative;
  width: 3rem;
  height: 1rem;
}
.reply .i_reply {
  display: block;
  width: 1rem;
  height: 0.5rem;
  position: absolute;
  color: #fff;
  text-align: center;
  background: url(../../../../public/img/ico_reply.png) no-repeat 0.3rem center;
  background-size: contain;
}
.reply .i_reply .replynum {
  font-weight: normal;
  font-size: 0.2rem;
  background: red;
  color: #fff;
  position: absolute;
  right: 0.1rem;
  top: -0.1rem;
  border-radius: 3em;
  text-align: center;
  width: 0.3rem;
  height: 0.3rem;
}
.replynum span {
  font-size: 0.2rem;
}
.info a {
  display: block;
  width: 2.7rem;
  height: 0.72rem;
  text-align: center;
  line-height: 0.72rem;
  border: 1px solid #979797;
  border-radius: 0.36rem;
  font-size: 0.34rem;
  color: #979797;
}
</style>
