import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import common from './common';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	common,
	render: h => h(App)
}).$mount('#app');
