import Vue from 'vue';
import Router from 'vue-router';

import home from './home';
import list from './list';
import order from './order';
import mine from './mine';
import explore from './explore';
import citylist from './citylist';
import article from './article';
import movie from './explore/movie'

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        home,
        list,
        order,
        mine,
        explore,
        citylist,
        article,
        movie,
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home/hot',
            component: () =>
                import ('@views/home/hot/index.vue')
        },
        {
            path: '/home/coming',
            component: () =>
                import ('@views/home/comming/index.vue')
        },
        {
            path: '/trailer',
            component: () =>
                import ('@views/explore/trailer/index.vue')
        },
        {
            path: '/toplist',
            component: () =>
                import ('@views/explore/toplist/index.vue')
        },
        {
            path: '/review',
            component: () =>
                import ('@views/explore/review/index.vue')
        },
        {
            path: '/news',
            component: () =>
                import ('@views/explore/index.vue')
        },
        {
            path: '/explore',
            redirect: '/news',
            component: () =>
                import ('@views/explore/index.vue')
        },
        {
            path: '/login',
            component: () =>
                import ('@views/explore/login/index.vue')
        },
        {
            path: '/search',
            component: () =>
                import ('@views/home/search/index.vue')
        },
        {
            path: '/list/buytiket',
            component: () =>
                import ('@views/list/buytiket/index.vue')
        }
    ]
});