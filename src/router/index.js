import Vue from 'vue';
import Router from 'vue-router';

import home from './home';
import list from './list';
import order from './order';
import mine from './mine';
import explore from './explore';
import citylist from './citylist';

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
            path: '/home/comming',
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
            path: '/detail',
            component: () =>
                import ('@views/explore/detail/index.vue')
        },
        {
            path: '/toplist/movie',
            component: () =>
                import ('@views/explore/movie/index.vue')
        }
    ]
});