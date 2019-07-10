<template>
    <div>
        <TabBar/>
        <div id="main">
            <Newsnav/>
            <Banner :trailerBanner = 'trailerBanner'/>
            <ul class="newslist">
                <li class="table" v-for="(item, index) in trailerNewsList" :key="index">
                    <div class="npic">
                        <a href="javascript:void(0);">
                            <i class="i_video"></i>
                            <img :src= item.coverImg>
                        </a>
                    </div>
                    <div class="newstxt">
                        <h2>{{item.movieName}}</h2>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TabBar from "../../../common/tabbar.vue";
import Newsnav from "../component/newsnav";
import Banner from '../component/banner.vue';
import {trailerNewsList} from "@api/explore";
import { banner } from "@api/explore";
export default {
    async created(){
        let response = await trailerNewsList();
        let response2 = await banner();
        this.trailerNewsList = response.trailers;
        this.trailerBanner = response2.trailer;
    },
    components:{
        Newsnav,
        Banner,
        TabBar
    },
    data(){
        return{
            trailerNewsList:[],
            trailerBanner:{}
        }
    },
    name: 'trailer'
}
</script>

<style scoped>
    .newslist {
        width: 100%;
        padding-left: .36rem;
        box-sizing: border-box;
    }
    
    .newslist li {
        display: -webkit-box;
        width: 100%;
        border-bottom: 1px solid #ddd;
        padding: .36rem 0;
        position: relative;
        box-sizing: border-box;
    }
    
    .npic {
        width: 3rem;
        height: 1.8rem;
    }
    
    .npic a {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    
    .npic a .i_video {
        display: inline-block;
        position: absolute;
        bottom: .12rem;
        right: .12rem;
        width: .69593rem;
        height: .69593rem;
        overflow: hidden;
        background: url(//static1.mtime.cn/html5/20190531185056/images/2014/viceoplay.png) no-repeat center center;
        background-size: cover;
    }
    
    .npic a img {
        width: 100%;
        height: auto;
        display: block;
    }
    
    .newstxt {
        padding: .072rem .36rem 0;
        box-sizing: border-box;
        width: 4.14rem;
        height: 1.92rem;
    }
    
    .newstxt h2 {
        font-size: .352rem;
        line-height: .52rem;
        font-weight: bold;
    }
</style>
