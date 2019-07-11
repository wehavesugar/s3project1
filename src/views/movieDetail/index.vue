<template>
    <div>
        <div id="main">
            <header class="header">
                <a href="javascript:;" class="back" @click="handleBack"></a>
                <a href="javascript:;" class="collection"></a>
                <a href="javascript:;" class="share"></a>
            </header>
            <div class="topbackground" :style="{background:'url('+ backgroundImage +')'}">
            </div>
            <div class="cinemabox">
                <div class="cinema_pic">
                    <a href="javascript:;">
                        <img :src="info.image" :alt="info.titleCn">
                    </a>
                </div>
                <div class="cinema_txt">
                    <header>
                        <a href="javascript:;">
                            <h2>{{info.titleCn}}</h2>
                            <p>{{info.titleEn}}</p>
                        </a>
                        <b class="baidu_score">
                                <i class="m_score">{{info.rating}}</i>
                            </b>
                    </header>
                    <div class="td">
                        <p>
                            <b>有彩蛋</b> - {{info.runTime}}
                        </p>
                        <p>{{info.type}}</p>
                        <p>{{info.year}}年6月28日中国上映 </p>
                    </div>
                    <aside class="m_cin_btn table" id="wantwatchbox">
                        <a href="javascript:;" id="wantButton" class="td m_btn_ngray">
                            <span>我想看</span>
                        </a>
                        <a href="javascript:;" id="ratingButton" class="baidu_blue m_btn_green">
                            <span>我要评分</span>
                        </a>
                    </aside>
                </div>
            </div>
            <div class="cin_otherinfo ">
                <div class="title">
                    <i class="i_block i_dot"></i>
                    <b>{{info.commonSpecial}}</b>
                </div>
                <div class="ticketButton">
                    <a href="javascript:;" class="m_btn_orange">
                        <span>查影讯/购票</span>
                    </a>
                </div>
            </div>
            <div class="marginuse"></div>
            <div class="marginuse1"></div>
            <article id="plotRegion" class="cin_more">
                <p>{{info.content}}</p>
                <a href="javascript:;" class="m_btn_tmore"></a>
            </article>
            <div class="marginuse"></div>
            <div class="marginuse1"></div>
            <article class="shoplistbox" id="relGoodsContainer" style="">
                <h2>
                    <a href="/?mid=238037#!/commerce/list/">
                        <span class="i_tnext"></span>
                        <b>电影周边(4)</b>
                    </a>
                </h2>
                <div class="othershop" style="margin-right:0px;">
                    <ul>
                        <li jump-type="goods" jump-id="108107" data-mtime-tracker="#!/commerce/item/108107/">
                            <div class="goodsbox" style="box-shadow:none;">
                                <div class="mtips">
                                    <i class="i_purchase" style="background-color:#25ACBD">新品</i>
                                </div>
                                <div class="picbox">
                                    <img class="m_img" src="http://img5.mtime.cn/mg/2019/06/20/181310.49294644.jpg">
                                </div>
                                <dl class="txtbox">
                                    <dt>复联4蜘蛛侠钥匙扣</dt>
                                    <dd><b>￥65.00</b></dd>
                                </dl>
                            </div>
                        </li>
                        <li jump-type="goods" jump-id="108114" data-mtime-tracker="#!/commerce/item/108114/">
                            <div class="goodsbox" style="box-shadow:none;">
                                <div class="picbox">
                                    <img class="m_img" src="http://img5.mtime.cn/mg/2019/04/18/135635.95611701.jpg">
                                </div>
                                <dl class="txtbox"><dt>复联4蜘蛛侠短袖T恤</dt>
                                    <dd><b>￥99.00</b></dd>
                                </dl>
                            </div>
                        </li>
                    </ul>
                </div>
            </article>
            <div class="marginuse"></div>
            <div class="marginuse1"></div>
            <article class="credits">
                <h2>
                    <a href="#!/movie/238037/fullcredits/">
                        <span class="i_tnext"></span>
                        <b>{{info.personCount}}位演职员</b>
                    </a>
                </h2>
                <div class="table">
                    <dl>
                        <dt>导演</dt>
                        <dd>
                            <ul class="table">
                                <li>
                                    <a href="#!/person/1561252/" class="picbox">
                                        <img :src="director.directorImg" class="m_img">
                                    </a>
                                    <a href="#!/person/1561252/">
                                        <h3>{{director.directorName}}</h3>
                                    </a>
                                    <a href="#!/person/1561252/">
                                        <p>{{director.directorNameEn}}</p>
                                    </a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt class="table">主要演员</dt>
                        <dd>
                            <ul class="table">
                                <li class="" v-for='(actor,index) in actorList' :key=index>
                                    <a href="#!/person/1796400/" class="picbox">
                                        <img :src="actorList[index].actorImg" class="m_img">
                                    </a>
                                    <a href="#!/person/1796400/">
                                        <h3>{{actorList[index].actor}}</h3>
                                    </a>
                                    <a href="#!/person/1796400/">
                                        <p>{{actorList[index].actorEn}}</p>
                                    </a>
                                    <a href="#!/person/1796400/" class="picbox small">
                                        <img src="#" class="m_img">
                                    </a>
                                    <p>饰：{{actorList[index].roleName}}</p>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </article>
            <div class="marginuse"></div>
            <div class="marginuse1"></div>
            <article class="credits">
                <h2>
                    <a href="#!/movie/238037/posters_and_images/">
                        <span class="i_tnext"></span>
                        <b>{{info.imageCount}}张图片</b>
                    </a>
                </h2>
                <div class="showpic">
                    <ul class="cin_scrollpic">
                        <li v-for='(pic,index) in images' :key=index>
                            <a href="#!/movie/238037/posters_and_images/">
                                <img :src="pic">
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
            <div class="shadow"></div>
            <div class="long_comment">
                <a href="#">
                    <span> 精选影评 (<b> {{long_comment_num}} </b>)</span>
                    <span class="i_tnext"></span>
                </a>
                <section class="com_txt">
                    <a href="#">
                        <h3>{{long_comment.title}}</h3>
                        <p>{{long_comment.content}}</p>
                    </a>
                </section>
                <section class="com_person">
                    <img :src="long_comment.headurl" alt="">
                    <div class="person_name">
                        <p class="p_name">{{long_comment.nickname}}</p>
                        <p class="p_time">{{ timeConverter(long_comment.modifyTime)}}</p>
                    </div>
                </section>
            </div>
            <div class="shadow"></div>
            <div class="short_comment">
                <h3><span> 网友短评 (<b> {{short_comment_num}} </b>)</span></h3>
                <ul class="short_comment_ul">
                    <li v-for="(short_comment,index) in short_comment" :key=index>
                        <div class="com_pic">
                            <img :src="short_comment.caimg" alt="">
                        </div>
                        <dl class="s_com_txt">
                            <dd>
                                <b class="comment_short">{{short_comment.ca.slice(0,10)}}</b>
                                <b>
                                    <i>{{Math.floor((time-short_comment.cd)/3600/1000)+8}} 小时前</i>
                                    <i>-评</i>
                                    <em class="m_score">{{short_comment.cr}}</em>
                                </b>
                            </dd>
                            <dt>
                                <a href="#">
                                    <p>{{short_comment.ce}}</p>
                                    <span>
                                        <i class="i_reply"></i>
                                        <span>回复</span>
                                        <i class="i_praise"></i>
                                        <span>赞</span>
                                    </span>
                                </a>
                            </dt>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="shadow"></div>
        </div>
    </div>
</template>

<script>
import { getMovieDetail } from "@api/movieDetail";
import { getLongComment } from "@api/longComment";
import { getShortComment } from "@api/shortComment";

export default {
    name: 'movieDetail',
    props:['id'],
    async created(){
        let response = await getMovieDetail(this.id);
        this.info=response;
        this.director=response.director;
        this.actorList=response.actorList;
        this.images=response.images;
        this.backgroundImage=response.image;

        let longComment = await getLongComment(this.id);
        this.long_comment = longComment.comments[0];
        this.long_comment_num =  longComment.totalCount;
        
        var t = new Date().getTime();
        this.time = t;

        
        let shortComment = await getShortComment(this.id);
        console.log(shortComment.cts[0].cd,t)

        this.short_comment = shortComment.cts;
        this.short_comment_num =  shortComment.totalCommentCount;
    },
    data(){
        return{
            info:{},
            director:{},
            actorList:{},
            images:[],
            backgroundImage: "",

            long_comment:[],
            long_comment_num:'',

            short_comment:[],
            short_comment_num:'',
            time:null
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        },
        timeConverter(UNIX_timestamp) {
      var a = new Date(UNIX_timestamp * 1000);
      var year = a.getFullYear();
      var month = a.getMonth() + 1;
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
      var sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
      var time =
        year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
      return time;
    }

    }
}
</script>

<style scoped>
#main{
    position: relative;
}
.header {
            width: 100%;
            height: 1.056rem;
            /* background: #1c2635; */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 0.5rem;
            box-sizing: border-box;
            position: relative;
            z-index: 3;
        }
        
        .back {
            display: block;
            width: 1.056rem;
            height: 1.056rem;
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
            text-align: center;
            background: url(../../../public/img/h_btn_back.png) no-repeat .3rem center;
            background-size: 20%;
        }
        
        .share {
            display: block;
            width: 1.056rem;
            height: 1.056rem;
            position: absolute;
            top: 0;
            right: 0;
            color: #fff;
            text-align: center;
            background: url(../../../public/img/i_h_share.png) no-repeat 0.3rem center;
            background-size: 48%;
        }
        
        .collection {
            display: block;
            width: 1.056rem;
            height: 1.056rem;
            position: absolute;
            top: 0;
            right: .78rem;
            color: #fff;
            text-align: center;
            background: url(../../../public/img/i_h_collection.png) no-repeat center center;
            background-size: 50%;
        }
        
        .topbackground {
            /* background: url(../../../public/img/get6.jpg) center top no-repeat; */
            background-position:center top;
            background-repeat: no-repeat;
            width: 100%;
            height: 3.36rem;
            background-size: 100% auto;
            -webkit-filter: blur(12px);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
        }
        
        .cinemabox {
            padding-left: .36rem;
            z-index: 2;
            position: relative;
            display: flex;
        }
        
        .cinema_pic {
            overflow: hidden;
            margin-right: .24rem;
            padding: .048rem;
            width: 2.51994rem;
            height: 3.744rem;
            background: #fff;
        }
        
        .cinemabox .cinema_pic a {
            width: 2.52rem;
            height: 3.74376rem;
            display: block;
        }
        
        .cinemabox .cinema_pic a img {
            display: block;
            width: 100%;
            height: 100%;
        }
        
        .cinema_txt header {
            color: #fff;
            margin: .12rem .36rem .384rem 0;
            position: relative;
            box-sizing: border-box;
        }
        
        .cinema_txt header a {
            display: block;
            color: #fff
        }
        
        .cinema_txt header a h2 {
            font-size: .42rem;
            line-height: .58rem;
            text-overflow: ellipsis;
            font-weight: bold;
        }
        
        .cinema_txt header a p {
            display: block;
            text-overflow: ellipsis;
            height: .3055rem;
            font-size: .282rem;
            line-height: .3656rem;
        }
        
        .cinema_txt .baidu_score {
            background: #659d0e;
            display: block;
            width: .67188rem;
            height: .67188rem;
            text-align: center;
            line-height: .67188rem;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: .456rem;
            box-sizing: border-box;
            line-height: .64rem;
        }
        
        .cinema_txt .baidu_score .m_score {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: .33rem;
        }
        
        .cinema_txt .td {
            box-sizing: border-box;
        }
        
        .cinemabox .cinema_txt .td p {
            padding-bottom: .096rem;
            font-weight: bold;
            box-sizing: border-box;
            font-size: .282rem;
            line-height: .38rem;
        }
        
        .cinemabox .cinema_txt .td p b {
            color: #659d0e;
            font-weight: normal;
            box-sizing: border-box;
        }
        
        .m_cin_btn {
            margin-top: .132rem;
            width: auto;
            display: block;
        }
        
        .m_cin_btn a {
            display: inline-block;
            margin-right: .12rem;
            padding: .228rem 0;
            border: 1px solid #999;
            color: #777;
            border-radius: .5rem;
            text-align: center;
            box-sizing: border-box;
        }
        
        .m_cin_btn a span {
            font-size: .329rem;
            height: 100%;
            width: 1.89188rem;
            display: block;
            height: .31962rem;
            line-height: .31963rem;
        }
        
        .m_btn_green {
            border: 1px solid #659c0d;
            color: #659c0d;
        }
        
        .cin_otherinfo {
            padding: .192rem 0 .288rem;
            box-sizing: border-box;
        }
        
        .cin_otherinfo .title {
            color: #fd8900;
            box-sizing: border-box;
            text-align: center;
            height: .32rem
        }
        
        .cin_otherinfo .title .i_dot {
            display: inline-block;
            width: .31188rem;
            height: .28782rem;
            background: url(../../../public/img/i_dot.png) no-repeat;
            background-size: cover;
            margin: -.096rem .072rem 0 0;
        }
        
        .cin_otherinfo .title b {
            display: inline-block;
            font-size: .32rem;
            line-height: .32rem;
            height: .32rem
        }
        
        .cin_otherinfo .ticketButton {
            width: 100%;
        }
        
        .cin_otherinfo .ticketButton a {
            display: block;
            padding: .276rem 0;
            margin: .348rem .36rem .264rem;
            background: #ff8600;
            color: #fff;
            border: 1px solid #ff8600;
            border-radius: .5rem;
            text-align: center;
            /* height: .37988rem; */
        }
        
        .cin_otherinfo .ticketButton a span {
            font-size: .38rem;
            line-height: .38rem;
            font-weight: bold;
        }
        
        .marginuse {
            width: 100%;
            height: .12rem;
            background: #fff;
            box-shadow: 0 0.2em 0.2em rgba(51, 51, 51, 0.05);
        }
        
        .marginuse1 {
            width: 100%;
            height: .40781rem;
            background: #f6f6f6
        }
        
        .cin_more {
            padding: .264rem .36rem 0;
        }
        
        .cin_more p {
            font-size: .32rem;
            color: #333;
            line-height: .4921rem;
            height: .9844rem;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .m_btn_tmore {
            display: block;
            background: #fff url(../../../public/img/i-tmore.png) no-repeat center center;
            height: .696rem;
            background-size: 5%;
        }
        .shoplistbox {
            padding: .096rem .36rem .048rem;
            box-sizing: border-box;
            display: none;
        }
        .credits{
            padding: .4rem .34rem;
        }

        .credits h2,
        .shoplistbox h2 {
            margin-bottom: .216rem;
        }
        
        .shoplistbox h2 a {
            display: block;
            padding: .24rem 0;
            color: #333;
            position: relative;
        }
        
        .i_tnext {
            width: .33594rem;
            height: .19188rem;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -0.1rem;
            overflow: hidden;
            transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            display: block;
            background: #fff url(../../../public/img/i-tmore.png) no-repeat center center;
            background-size: 100%;
        }
        
        .othershop ul {
            overflow: hidden;
            zoom: 1;
            position: relative;
        }
        
        .shoplistbox li:first-child {
            margin-left: 0;
        }
        
        .shoplistbox li {
            box-shadow: none;
            margin-left: .05062rem;
            width: 13.5rem;
            margin-top: 0;
        }
        
        .othershop li {
            width: 49.25%;
            min-height: 5.28rem;
            display: inline-block;
            position: relative;
            background-color: #fff;
            margin-bottom: .12rem;
        }
        
        .othershop li .goodsbox {
            background: #fff;
            position: relative;
        }
        
        .othershop li .mtips {
            position: absolute;
            left: 0rem;
            top: 0rem;
            z-index: 3;
            top: .096rem;
        }
        
        .mtips i {
            padding: .048rem .072rem;
            display: inline-block;
            color: #fff;
            background-color: #25ACBD;
            margin-right: .12rem;
            margin-top: -.072rem;
        }
        
        .shoplistbox li .picbox {
            height: 3.24rem;
            box-shadow: 0 0 1px rgba(0, 0, 0, .15);
        }
        
        .othershop li .picbox {
            margin-bottom: .24rem;
        }
        
        .m_img {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .othershop li .txtbox {
            padding: 0 .24rem;
        }
        
        .othershop li .txtbox dt {
            font-size: .254rem;
            line-height: .36rem;
            min-height: .72rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: .048rem;
        }
        
        .othershop li .txtbox dd {
            padding-bottom: .12rem;
        }
        
        .othershop li .txtbox dd b {
            color: #ff8600;
            font-size: .3rem;
        }
        
        .credits h2 a {
            display: block;
            padding: .24rem 0;
            color: #333;
            position: relative;
            box-sizing: border-box;
        }
        
        .credits h2 span {
            float: right;
        }
        
        .i_tnext {
            width: .33599rem;
            height: .192rem;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -.3rem;
            overflow: hidden;
            line-height: 2.64rem;
            transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
        }
        
        .i_tnext {
            display: block;
            background: #fff url(../../../public/img/i-tmore.png) no-repeat center center;
            background-size: auto .192rem;
            height: .696rem;
        }
        
        .credits h2 b {
            font-size: .396rem;
            line-height: .52rem;
            overflow: hidden;
        }
        
        .table {
            width: 100%;
            display: -webkit-box;
        }
        
        .credits dl:first-child {
            border: 0;
            padding-left: 0;
            width: 2.04rem;
            margin-right: .216rem;
        }
        
        .credits dl {
            padding-bottom: .096rem;
        }
        
        .credits dt {
            font-size: .28rem;
        }
        
        .credits dd {
            padding-top: .12rem;
        }
        
        .credits li {
            width: 1.56rem;
            text-align: center;
        }
        
        .credits li:last-child {
            margin-right: 0;
        }
        
        .credits .picbox {
            display: block;
            width: 2.05187rem;
            overflow: hidden;
            height: 3.12rem;
            margin: 0 auto .49188rem;
        }
        
        .credits h3 {
            font-size: .288rem;
            font-weight: normal;
            line-height: .3376rem;
            height: 1.2em;
            overflow: hidden;
            margin-bottom: .08438rem;
        }
        
        .credits li p {
            font-size: .264rem;
            height: .5156rem;
        }
        
        .credits dl:last-child .picbox {
            width: 2.05188rem;
            height: 2.05188rem;
        }
        
        .credits dl:last-child dd li {
            width: 2.04rem;
            text-align: center;
            color: #333;
            margin-right: .36em;
        }
        
        .cin_scrollpic {
            display: flex;
        }
        
        .cin_scrollpic li {
            width: 1.695rem;
            height: 1.60782rem;
            -webkit-box-flex: 1;
            -moz-box-flex: 1;
            box-flex: 1;
            word-wrap: break-word;
            text-align: center;
            overflow: hidden;
        }
        
        .cin_scrollpic li a {
            display: block;
            width: 1.58376rem;
            height: 1.58376rem;
            margin: auto;
        }
        
        .cin_scrollpic li a img {
            display: block;
            width: 100%;
            height: 100%;
        }
        .shadow {
            height: 0.4rem;
            background: #f6f6f6;
        }

        .long_comment {
            padding: .34rem;

        }

        .long_comment>a {
            display: block;
            color: #333;
            position: relative;
            height: .5rem;
        }

        .long_comment>a>span {
            display: inline-block;
            font-size: .4rem;
            margin-right: .2rem;
            color: #000;
        }

        .long_comment>a>i {
            width: .32rem;
            height: .32rem;
            position: absolute;
            right: 0;
            top: 0;
        }

        .com_txt {
            padding: .32rem 0;
        }

        .com_txt a {
            display: block;
            overflow: hidden;
        }

        .com_txt a h3 {
            font-size: .4rem;
            margin-bottom: .2rem;
        }

        .com_txt a p {
            font-size: .32rem;
            line-height: .44rem;
        }

        .com_person {
            display: flex;
            justify-content: space-between;
            height: .96rem;
        }

        .com_person>img {
            width: 0.96rem;
            height: 0.96rem;
            border-radius: 50%;
            background: pink;
        }

        .person_name {
            height: 0.96rem;
            width: 5.6rem;
        }

        .person_name p {
            font-size: .30rem;
            color: #777;
            line-height: .44rem;
        }

        .short_comment {
            padding: .34rem 0 .34rem .34rem;
        }

        .short_comment h3 {
            display: inline-block;
            font-size: .4rem;
            margin-right: .2rem;
        }

        .short_comment_ul {
            overflow: hidden;
        }

        .short_comment_ul li {
            display: flex;
            padding-top: .34rem;
            border-bottom: 1px solid #999;
        }

        .com_pic {
            width: 0.96rem;
            height: 0.96rem;
            margin-right: .32rem;
            border-radius: 50%;
            background: pink;
        }

        .com_pic img{
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        .s_com_txt {
            width: 5.6rem;
            padding-right: .32rem;
        }

        .s_com_txt dd {
            margin-bottom: .12rem;
            display: flex;
            justify-content: space-between;
        }

        .s_com_txt dd b {
            color: #999;
            font-size: .28rem;
        }

        .m_score {
            /* width: 0.4rem; */
            height: 0.4rem;
            line-height: .4rem;
            font-size: .24rem;
            background: #659d0e;
            color: #fff;
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            padding: 0 .1rem;
        }

        .s_com_txt dd p {
            font-size: .30rem;
            line-height: .46rem;
        }

        .s_com_txt dd span {
            display: block;
            display: flex;
            justify-content: flex-end;
        }

        .s_com_txt>dt>a {
            display: block;
            overflow: hidden;
        }

        .s_com_txt>dt>a>p {
            font-size: .3rem;
            color: #333;
        }

        .s_com_txt>dt>a>span {
            font-size: .32rem;
            color: #999;
            display: flex;
            justify-content: flex-end;
            margin-bottom: .3rem;
        }

        .s_com_txt>dt>a>span>i {
            margin-right: .1rem;
        }

        .i_reply {
            display: block;
            width: 0.46rem;
            height: 0.46rem;
            background: url(../../../public/img/ico_reply.png);
            background-size: contain;
        }

        .i_praise {
            display: block;
            width: 0.42rem;
            height: 0.42rem;
            background: url(../../../public/img/ico_praise.png);
            background-size: contain;
        }
</style>
