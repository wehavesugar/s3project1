import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {}
// });

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home
	}
});
