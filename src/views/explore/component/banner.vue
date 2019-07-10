<template>
    <div class="banner">
        <div class='imgbox'>
            <img :src= getBanner.imageUrl>
        </div>
        <h2 class="backtitle">
            <b>{{getBanner.title}}</b>
            <!-- <i class="i-vedio"></i> -->
            <!--无法显示,另外以下的播放按钮-->
        </h2>
    </div>
</template>

<script>
export default {
    name: 'banner',
    props:{
        getBanner:{

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
        font-size: 0.36rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        padding: .288rem 0;
        text-align: center;
        line-height: .48rem;
    }
    
    .banner>.backtitle>b {
        display: block;
        /* width: 5.8rem; */
        font-weight: 900;
        margin: 0 auto;
        text-align: center;
        /* line-height: .48rem; */
    }
    
    .banner .backtitle .i-vedio {
        display: block;
        height: .72rem;
        background: url(//static1.mtime.cn/html5/20190531185056/images/2014/viceoplay.png) cover;
        position: absolute;
        bottom: .288rem;
        right: .288rem;
    }
</style>
