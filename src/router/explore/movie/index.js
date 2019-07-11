export default {
    path: '/toplist/movie/:id',
    name: 'movie',
    props: true,
    component: () =>
        import ('@views/explore/movie/index.vue')
};