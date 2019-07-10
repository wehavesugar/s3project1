export default {
	path: '/article/:id',
	component: () => import('@views/home/article'),
	name: 'article',
	props: true
};
