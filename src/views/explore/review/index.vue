<template>
    <div>
        <TabBar/>
        <div id="main">
            <Newsnav/>
            <div class="banner">
                <div class='imgbox'>
                    <img :src=reviewBanner.imageUrl>
                </div>
                <div class="smallpic">
                    <img :src=reviewBanner.posterUrl>
                </div>
                <h2 class="backtitle">
                    <b>{{reviewBanner.movieName}}</b>
                    <span>
                        <i class="i_block i_dot"></i>
                        <em>{{reviewBanner.title}}</em>
                    </span>
                </h2>
            </div>
            <div class="moviecomment">
                <ul class="_reviewList">
                    <li v-for="(item, index) in reviewList.slice(1)"
                    :key="index"
                    >
                        <h2>
                            <a href="javascript:;">{{item.title}}</a>
                        </h2>
                        <div class="cinema_reviews">
                            <div class="cine_user">
                                <img :src=item.userImage>
                            </div>
                            <div class="cine_txt">
                                <p>
                                    <b>{{item.nickname}}-评分
                                        <strong>《{{item.relatedObj.title}}》</strong>
                                    </b>
                                    <em class="m_score" v-if="item.rating">
                                        <i>{{item.rating}}</i>
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
import {banner} from "@api/explore";
import {reviewList} from "@api/explore";
export default {
    async created(){
        let response = await reviewList()
        let response2 = await banner();
        this.reviewBanner = response2.review;
        this.reviewList = response;
    },
    components:{
        Newsnav,
        TabBar
    },
    data(){
       return{
            reviewBanner:{},
            reviewList:[]
       }
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
            padding: .36rem .36rem .312rem 0;
            margin-right: -1.5em;
        }
        
        ._reviewList li h2 {
            padding-bottom: .168rem;
            font-weight: bold;
        }
        
        ._reviewList li h2 a {
            font-size: .28rem;
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
