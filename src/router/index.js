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
		}
	]
});
