# s3project1

项目： 时光网

你没糖小组：
小组成员
李阳春（组长） 梅德城 唐薇

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
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

## 当前项目用到的技术点

```
vue-router + vuex + axios + 路由懒加载 + 公共组件的封装(JS组件 UI组件) + webpack + mint-ui + sass + mockjs + swiper + better-scroll + localStorage/sessionStorage + vue-lazyload
```

### 版本变动

```
2019/07/06 23:50
添加全局组件 TabBar 与 ComponentFooter 现在为全局组件 无需引入 直接使用
编写相关 js 以及更新所有页面下的 ComponentFooter TabBar 引入方式

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
```

### 小组要求

```

目录结构
/dist >>>>>>>>>>>>>>自动生成不要操作 并且放入.gitignore
/node_modules >>>>>>>>>>>>>>只在本地用 npm install 生成 并且放入.gitignore
/src >>>>>>>>>>>>>>生产目录 所有代码和生产文件在此目录下)
/src/api api 文件
/src/assets
/src/common >>>>>>>>>>>>>>共用组件 如 header navBar footer 等)
/src/components >>>>>>>>>>>>>>所有其他小组件放在这个目录下)
/src/router/router.js >>>>>>>>>>>>>>路由文件
/src/store vuex store 文件
/src/utils 工具文件
/src/views/子页面文件夹/\*.vue >>>>>>>>>>>>>>子页面文件夹 子页面以及其子页面模板
/src/App.vue App.vue
/src/main.js main.js
/public >>>>>>>>>>>>>>所有静态文件 css js font img
.gitignore
babel.config.js
package-lock.json
package.json package.json 调配此文件代码前一定要和组长沟通
readme.md
vue.config.js >>>>>>>>>>>>>>调配此文件代码前一定要和组长沟通

语义化命名 》》》包括但不限于文件名 变量名等 避免抽象词 避免冗余修饰词 (例如 item 下 应为 item.id 而不是 item.goodsID 或者 item.itemID） 不确定时征询组长
避免代码冲突 只修改自己分配到的代码部分 其他目录下的代码 一定要沟通过再动

认真记录每次 commit 时的 message
```

### 雷点

### vue.config.js 下的 devServer.proxy 配置

```
secure: false,
pathRewrite: { '^/api': '' }
```
