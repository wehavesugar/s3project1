<template>
    <div class="banner">
        <div class='imgbox'>
            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F07%2F19%2F103505.79149520.jpg" alt="《勇敢者游戏2》首曝预告强森好搞笑">
        </div>
        <h2 class="backtitle">
            <b>《勇敢者游戏2》首曝预告
                强森好搞笑</b>
            <i class="i-vedio"></i>
            <!--无法显示,另外以下的播放按钮-->
        </h2>
    </div>
</template>

<script>
export default {
    name: 'banner'
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
        font-size: .48rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        padding: .288rem 0;
        text-align: center;
    }
    
    .banner>.backtitle>b {
        display: block;
        width: 5.8rem;
        font-weight: 900;
        margin: 0 auto;
        text-align: center;
        line-height: .48rem;
    }
    
    .banner .backtitle .i-vedio {
        display: block;
        width: .72rem;
        height: .72rem;
        background: url(//static1.mtime.cn/html5/20190531185056/images/2014/viceoplay.png) cover;
        position: absolute;
        bottom: .288rem;
        right: .288rem;
    }
</style>
