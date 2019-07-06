# s3project1

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

############################版本变动#######################
2019/07/06
小组项目 更换为 vue-cli 框架
此更新使用新的 repo 并且所有开发任务移至 dev 分支
dev 分支下每个组员自己创建自己的分支并在自己分支内完成相应任务

1 tabBar 不再是 app.vue 下面默认载入的组件了 自己写的页面需要的时候去 common/tabbar.vue 引入 （explore 页面已经做好更正了）

2 路由改配成了 路由懒加载 自己写的新页面需要自己在 router 目录下找到或创建相应目录写入新的文件 并在 router/index.js 里面注册

3 vue.config.js 里配置了 resolve.alias 以后所有路径可以用别名代替繁琐的'../../'
'@' : src 目录
'@api' src/api 目录
‘@common’ src/common 目录
'@components' src/components 目录
"@router" src/router 目录
"@store" src/store 目录
"@utils" src/utils 目录
"@views" src/views 目录

############################雷点#######################

### vue.config.js 下的 devServer.proxy 配置

secure: false,
pathRewrite: { '^/api': '' }
