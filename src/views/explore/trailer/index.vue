<template>
    <div>
        <TabBar/>
        <div id="main">
            <Newsnav/>
            <Banner/>
            <ul class="newslist">
                <li class="table">
                    <div class="npic">
                        <a href="javascript:void(0);">
                            <i class="i_video"></i>
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F06%2F29%2F002009.16684021_120X90X4.jpg">
                        </a>
                    </div>
                    <div class="newstxt">
                        <h2>《速度与激情:特别行动》曝全新..</h2>
                    </div>
                </li>
                <li class="table">
                    <div class="npic">
                        <a href="javascript:void(0);">
                            <i class="i_video"></i>
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F06%2F29%2F002009.16684021_120X90X4.jpg">
                        </a>
                    </div>
                    <div class="newstxt">
                        <h2>《速度与激情:特别行动》曝全新..</h2>
                    </div>
                </li>
                <li class="table">
                    <div class="npic">
                        <a href="javascript:void(0);">
                            <i class="i_video"></i>
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F06%2F29%2F002009.16684021_120X90X4.jpg">
                        </a>
                    </div>
                    <div class="newstxt">
                        <h2>《速度与激情:特别行动》曝全新..</h2>
                    </div>
                </li>
                <li class="table">
                    <div class="npic">
                        <a href="javascript:void(0);">
                            <i class="i_video"></i>
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F06%2F29%2F002009.16684021_120X90X4.jpg">
                        </a>
                    </div>
                    <div class="newstxt">
                        <h2>《速度与激情:特别行动》曝全新..</h2>
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
export default {
    components:{
        Newsnav,
        Banner,
        TabBar
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
