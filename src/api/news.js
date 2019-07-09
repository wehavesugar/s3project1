const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            '/news': {
                target: 'http://m.mtime.cn/Service/callback.mi/News/NewsList.api?',
                ws: true,
                changeOrigin: true
            },
            '/trailer': {
                target: 'http://m.mtime.cn/Service/callback.mi/PageSubArea/TrailerList.api?',
                ws: true,
                changeOrigin: true
            },
            '/toplist': {
                target: 'http://m.mtime.cn/Service/callback.mi/TopList/TopListOfAll.api?',
                ws: true,
                changeOrigin: true
            },
            '/review': {
                target: 'http://m.mtime.cn/Service/callback.mi/MobileMovie/Review.api?',
                ws: true,
                changeOrigin: true
            }
        }
    }
}