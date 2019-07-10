<template>
    <div>
        <TabBar/>
        <div id='main'>
            <Newsnav/>
            <div class="banner">
                <div class='imgbox'>
                    <img :src=toplistBanner.imageUrl >
                </div>
                <h2 class="backtitle">
                    <b>{{toplistBanner.title}}</b>
                </h2>
            </div>
            <div class="newslist">
                <ul class="topmenu">
                    <li>
                        <a href="javascript:;">
                            <i class="top01 top-icon"></i>
                            <p>
                                <span>时光Top100</span>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i class="top02 top-icon"></i>
                            <p>
                                <span>华语Top100</span>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i class="top03 top-icon"></i>
                            <p>
                                <span>全球票房榜</span>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="topnews">
                <v-touch tag='li' @tap="handleTo(item.id)" class="_link" v-for="(item, index) in toplistNews"
                :key='index'
                :id=item.id>
                    <a href="javascript:void(0);">
                        <div class="toptxt">
                            <h2>
                                <b>{{item.topListNameCn}}</b>
                            </h2>
                            <p class="txt_elli"><span>{{item.summary}}</span></p>
                        </div>
                        <i class="i_tnext"></i>
                    </a>
                </v-touch>
            </ul>
        </div>
    </div>
</template>

<script>
import TabBar from "@common/tabbar.vue";
import Newsnav from '../component/newsnav.vue'
import {banner} from "@api/explore";
import { toplistNews } from "@api/explore";
export default {
    async created(){
        let response = await toplistNews();
        let response2 = await banner();
        this.toplistNews = response.topLists;
        this.toplistBanner = response2.topList;
        
    },
    components:{
        Newsnav,
        TabBar
    },
    data(){
        return{
            toplistNews:[],
            toplistBanner:{}
        }
    },
    name: 'toplist',
    methods:{
        handleTo(id){
            this.$router.push({name:'movie', params:{id}});
        }
    }
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
        
        .backtitle {
            width: 100%;
            color: #fff;
            font-size: .36rem;
            position: absolute;
            bottom: 0;
            left: 0;
            text-align: center;
            line-height: .9356rem;
            background: rgba(0, 0, 0, 0.5);
        }
        
        .banner>.backtitle>b {
            font-weight: 900;
        }
        
        .banner>.newslist {
            width: 100%;
        }
        
        .newslist {
            margin-top: .6rem;
        }
        
        .newslist .topmenu {
            box-sizing: border-box;
            display: flex;
            width: 100%;
        }
        
        .newslist .topmenu li {
            width: 33.3%;
            text-align: center;
        }
        
        .newslist .topmenu li a {
            width: 100%;
            height: 100%;
            text-align: center;
            overflow: hidden;
        }
        
        .newslist .topmenu .top-icon {
            display: block;
            width: 1.17594rem;
            height: 1.17594rem;
            border-radius: 50%;
            margin: 0 auto;
        }
        
        .newslist .topmenu .top01 {
            background: url(//static1.mtime.cn/html5/20190531185056/images/2014/top01.png) no-repeat;
            background-size: cover;
        }
        
        .newslist .topmenu li:nth-of-type(1) p {
            color: #1498c9;
        }
        
        .newslist .topmenu .top02 {
            background: url(//static1.mtime.cn/html5/20190531185056/images/2014/top02.png) no-repeat;
            background-size: cover;
        }
        
        .newslist .topmenu li:nth-of-type(2) p {
            color: #3bc7c2;
        }
        
        .newslist .topmenu .top03 {
            background: url(//static1.mtime.cn/html5/20190531185056/images/2014/top03.png) no-repeat;
            background-size: cover;
        }
        
        .newslist .topmenu li:nth-of-type(3) p {
            color: #ffc12d;
        }
        
        .newslist .topmenu p {
            display: block;
            padding-top: .296rem;
        }
        
        .newslist .topmenu span {
            font-size: .28rem;
            line-height: .28rem;
        }
        
        .topnews {
            border-top: 1px solid #d8d8d8;
            margin-top: .504rem;
        }
        
        .topnews li {
            padding-left: 0.36rem;
            width: 100%;
            box-sizing: border-box;
        }
        
        .topnews li a {
            display: block;
            width: 100%;
            text-align: left;
            padding: .408rem 0;
            position: relative;
            border-bottom: 1px solid #d8d8d8;
            box-sizing: border-box;
        }
        
        .toptxt {
            box-sizing: border-box;
        }
        
        .topnews li a h2 {
            margin-right: .72rem;
            line-height: .48rem;
            box-sizing: border-box;
        }
        
        .topnews li a h2 b {
            font-size: .24rem;
            color: #333;
            font-weight: bold;
        }
        
        .topnews li a p {
            margin-top: .14rem;
            padding-right: .72rem;
            height: .4rem;
        }
        
        .topnews li a p span {
                font-size: .3rem;
                color: #777;
                width: 100%;
                height: .4rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                display: inline-block;
        }
        
        .topnews li .i_tnext {
            display: block;
            background: #fff url(//static1.mtime.cn/html5/20190531185056/images/2014/i-tmore.png) no-repeat center center;
            width: .3rem;
            height: .336rem;
            position: absolute;
            right: .24rem;
            top: 50%;
            margin-top: -.2rem;
            overflow: hidden;
            line-height: .336rem;
            transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
        }
</style>
