<template>
  <div>
    <TabBar />
    <div id="main">
      <div class="userlogin">
        <ul class="loginbox">
            <li>
                <div class="table_v_c">
                    <i class="i_user"></i>
                    <input name="loginname" type="txt" class="td" placeholder="登录邮箱/手机号码" value="">
                </div>
            </li>
            <li>
                <div class="table_v_c">
                    <i class="i_password"></i>
                    <input name="password" type="password" class="td" placeholder="密码" value="">
                    <a class="i_showpass" href="javascript:void(0);" data-selector="tooglePassword">
                        <span>显示密码</span>
                    </a>
                </div>
            </li>
        </ul>
        <a href="javascript:void(0);" data-selector="submit" class="m_btn_blue">
            <span>登录</span>
        </a>
        <div class="loing table">
            <p class="td">
                <a href="javascript:void(0);" data-selector="signup">免费注册</a>
            </p>
            <p class="td">
                <a href="#!/member/retrievepassword">找回密码</a>
            </p>
        </div>
        <dl class="otherlogin">
            <dt><span>使用第三方登录</span></dt>
            <dd>
                <ul class="table_vh_c">
                    <li>
                        <a href="https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=weibo" title="新浪" class="o_sina">
                        </a>
                    </li>
                    <li>
                        <a href="https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=qq" title="QQ" class="o_qq">
                        </a>
                    </li>
                </ul>
            </dd>
        </dl>
    </div>
    </div>
  </div>
</template>

<script>
import TabBar from "@common/tabbar.vue";
export default {
  components: {
    TabBar
  },
  name: "login"
};
</script>

<style scoped>
.userlogin .loginbox {
  background: #fff;
  margin: 0;
  box-shadow: 0 3px 3px rgba(51, 51, 51, 0.1);
  box-sizing: border-box;
}

.userlogin .loginbox li {
  margin-left: 1.32rem;
  border-bottom: 1px solid #d8d8d8;
  padding: 0.144rem 0;
  box-sizing: border-box;
  position: relative;
}

.table_v_c {
  height: 100%;
  -webkit-box-align: center;
  width: 100%;
}

.i_user,
.i_password {
  display: block;
  width: 0.45594rem;
  height: 0.55188rem;
  position: absolute;
  margin-left: -0.72rem;
  margin-right: -0.24rem;
}

.i_user {
  background: url(../../../../public/img/i_user.png) no-repeat;
  background-size: cover;
}

.i_password {
  width: 0.48rem;
  height: 0.52782rem;
  background: url(../../../../public/img/i_password.png) no-repeat;
  background-size: cover;
}

.userlogin .loginbox li input {
  display: block;
  font-size: 1.5em;
  height: 0.45218rem;
  line-height: 0.45218rem;
  margin: 0.19336rem 0;
  border: none;
}

.userlogin .loginbox li .i_showpass {
  display: block;
  margin-right: 0.36rem;
  color: #1e7dd7;
  cursor: pointer;
  line-height: 0.5rem;
  position: absolute;
  top: 0.3rem;
  right: 0px;
}

.i_showpass span {
  font-size: 0.3rem;
}

.userlogin .m_btn_blue {
  margin: 0.48rem 0.36rem 0;
  display: block;
  padding: 0.276rem 0;
  background: #1e7dd7;
  border: 1px solid #1e7dd7;
  color: #fff;
  border-radius: 9.6rem;
  text-align: center;
}

.userlogin .m_btn_blue span {
  font-size: 0.32rem;
}

.table {
  width: 100%;
  display: -webkit-box;
  box-sizing: border-box;
}

.loing {
  display: flex;
  justify-content: space-between;
}

.loing p {
  font-weight: bold;
}

.loing p a {
  padding: 0 0.49218rem;
  line-height: 1.14rem;
  display: block;
  color: #1e7dd7;
  font-size: 1.4em;
}

.loing p:last-child a {
  text-align: right;
  color: #777;
  font-weight: normal;
}

.otherlogin {
  margin: 0.12rem 0.36rem 0;
  border-top: 1px solid #d8d8d8;
  padding-bottom: 0.6rem;
  box-sizing: border-box;
}

.otherlogin dt {
  text-align: center;
  margin-top: -0.168rem;
  margin-bottom: 0.48rem;
  background: #fff;
  font-size: 0.28rem;
}

.otherlogin dt span {
  font-size: 1.2em;
  color: #999;
  padding: 0 0.14062rem;
  background: #f6f6f6;
}

.table_vh_c {
  display: -webkit-box;
  -webkit-box-pack: center;
  width: 100%;
}

.table_vh_c li {
  box-sizing: border-box;
}

.o_sina {
  background: url(../../../../public/img/o_sina.png) no-repeat;
  background-size: cover;
}

.o_sina,
.o_qq,
.o_weixin {
  display: block;
  width: 1.32rem;
  height: 1.32rem;
  border-radius: 50%;
}

.otherlogin li:last-child {
  margin-left: 0.6rem;
}

.o_qq {
  background: url(../../../../public/img/o_qq.png) no-repeat;
  background-size: cover;
}
</style>