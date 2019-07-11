import { cityList } from '@api/city';
const state = {
	cityList: [],
	hotList: [],
	cityInitialList: [],
	cityFlag: true,
	cityName: sessionStorage.getItem('cityName') || '深圳',
	cityId: sessionStorage.getItem('cityId') || 366
};

const mutations = {
	handleModifyCityInfo(state, params) {
		state.cityName = params.n;
		state.cityId = params.id;
		sessionStorage.setItem('cityName', params.n);
		sessionStorage.setItem('cityId', params.id);
	},
	mutationCityData(state, params) {
		//热门城市
		state.hotList = params.slice(0, 9);
		const cityList = [];
		//城市列表 拼音首字母
		for (let i = 0; i < params.length; i++) {
			//获取城市的首字母
			let cityInitial = params[i].pinyinFull[0].toUpperCase();

			if (hasInitial(cityInitial)) {
				cityList.push({
					index: cityInitial,
					list: [{ id: params[i].id, n: params[i].n }]
				});
			} else {
				for (let j = 0; j < cityList.length; j++) {
					if (cityInitial == cityList[j].index) {
						cityList[j].list.push({ id: params[i].id, n: params[i].n });
						break;
					}
				}
			}
		}

		//判断首字母是否在CityList中存在
		function hasInitial(cityInitial) {
			var bStop = true;

			//不存在
			if (cityList.length == 0) {
				bStop = true;
			} else {
				for (var i = 0; i < cityList.length; i++) {
					if (cityList[i].index == cityInitial) {
						//存在
						bStop = false;
						break;
					}
				}
			}

			//没找到是true  找到了是false
			return bStop;
		}

		//字典排序
		cityList.sort((a, b) => {
			if (a.index > b.index) {
				return 1;
			} else {
				return -1;
			}
		});
		state.cityList = cityList;
		state.cityFlag = false;
	}
};

const actions = {
	async getCityList({ commit }) {
		let response = await cityList();
		let cityData = response.p;
		commit('mutationCityData', cityData);
	}
};

export default {
	state,
	mutations,
	actions,
	namespaced: true
};
