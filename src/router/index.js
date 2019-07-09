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
			component: () => import('@views/home/hot/index.vue')
		},
		{
			path: '/home/coming',
			component: () => import('@views/home/comming/index.vue')
		},
		{
			path: '/search',
			component: () => import('@views/home/search/index.vue')
		},
		{
			path: '/news',
			component: () => import('@views/home/news/index.vue')
		},
		{
			path: '/list/buytiket',
			component: () => import('@views/list/buytiket/index.vue')
		}
	]
});
