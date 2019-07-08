<template>
    <div>
        <TabBar/>
        <div id="main">
            <Newsnav/>
            <div class="banner">
                <div class='imgbox'>
                    <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F03%2F01%2F173620.86296561.jpg" alt="这明明是《蜘蛛侠：谁是卧底》啊!">
                </div>
                <div class="smallpic">
                    <img alt="蜘蛛侠：英雄远征" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F05%2F31%2F163639.93224012_1280X720X2.jpg">
                </div>
                <h2 class="backtitle">
                    <b>蜘蛛侠：英雄远征</b>
                    <span>
                        <i class="i_block i_dot"></i>
                        <em>这明明是《蜘蛛侠：谁是卧底》..</em>
                    </span>
                </h2>
            </div>
            <div class="moviecomment ">
                <ul class="_reviewList">
                    <li>
                        <h2>
                            <a href="javascript:;">这明明是《蜘蛛侠：谁是卧底》啊!</a>
                        </h2>
                        <div class="cinema_reviews">
                            <div class="cine_user">
                                <img alt="冷子墨" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg32.mtime.cn%2Fup%2F2013%2F06%2F26%2F161117.68950441_128X128.jpg">
                            </div>
                            <div class="cine_txt">
                                <p>
                                    <b>冷子墨-评分
                                        <strong>《蜘蛛侠：英雄远征》</strong>
                                    </b>
                                    <em class="m_score">
                                        <i>6.0</i>
                                    </em>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Newsnav from '../component/newsnav.vue'
import TabBar from "@common/tabbar.vue";
export default {
    components:{
        Newsnav,
        TabBar
    },
    name: 'review'
}
</script>

<style scoped>
    .banner {
            width: 100%;
            height: 4.32rem;
            position: relative;
        }
        
        .banner>.imgbox {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .banner>.imgbox>img {
            width: 100%;
            display: block;
        }
        
        .banner .smallpic {
            width: 1.5118rem;
            height: 2.28rem;
            position: absolute;
            left: .36rem;
            bottom: .24rem;
            z-index: 2;
        }
        
        .banner .smallpic img {
            border: 1px solid #fff;
            width: 100%;
            height: auto;
            display: block;
        }
        
        .backtitle {
            width: 100%;
            color: #fff;
            font-size: .36rem;
            position: absolute;
            bottom: 0;
            left: 0;
            text-align: left;
            background: rgba(0, 0, 0, 0.5);
            padding: .3rem 0 .204rem 2.16rem;
        }
        
        .banner>.backtitle>b {
            font-weight: 900;
            display: block;
            line-height: .42rem;
        }
        
        .banner>.backtitle span {
            display: block;
            padding-top: .144rem;
            color: #fff;
        }
        
        .banner>.backtitle span i {
            display: inline-block;
            width: .26376rem;
            height: .24rem;
            background: url(//static1.mtime.cn/html5/20190531185056/images/2014/i_dot_03.png) no-repeat;
            background-size: cover;
        }
        
        .banner>.backtitle span em {
            font-size: .3rem;
            color: #ddd;
        }
        
        .moviecomment {
            box-sizing: border-box;
        }
        
        ._reviewList {
            padding: .36rem;
        }
        
        ._reviewList li {
            border-bottom: 1px solid #d8d8d8;
            padding: 0 .36rem .312rem 0;
            margin-right: -1.5em;
        }
        
        ._reviewList li h2 {
            padding-bottom: .168em;
            font-weight: bold;
        }
        
        ._reviewList li h2 a {
            font-size: .37rem;
            color: #333;
        }
        
        .moviecomment ._reviewList li .cinema_reviews {
            box-sizing: border-box;
            display: flex;
        }
        
        .moviecomment ._reviewList li .cinema_reviews .cine_user {
            width: .5rem;
            height: .5rem;
            margin-right: .12rem;
            border-radius: 50%;
        }
        
        .moviecomment ._reviewList li .cinema_reviews .cine_user img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 50%;
        }
        
        .moviecomment ._reviewList li .cinema_reviews .cine_txt p {
            color: #777;
            line-height: .48rem;
        }
        
        .moviecomment ._reviewList li .cinema_reviews .cine_txt p b {
            font-size: .3rem;
            display: inline-block;
            vertical-align: middle;
            line-height: .48rem;
        }
        
        .moviecomment ._reviewList li .cinema_reviews .cine_txt p b strong {
            color: #333;
        }
        
        .moviecomment ._reviewList li .cinema_reviews .cine_txt .m_score {
            margin-left: .12rem;
            background: #659d0e;
            width: .48rem;
            height: .4318rem;
            color: #fff;
            border-radius: 0;
            display: inline-block;
            vertical-align: middle;
            overflow: hidden;
            line-height: 1.8em;
            text-align: center;
            vertical-align: middle;
        }
        
        .moviecomment ._reviewList li .cinema_reviews .cine_txt .m_score i {
            font-size: .26rem;
        }
</style>
