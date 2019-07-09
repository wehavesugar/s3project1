import http from '@utils/http.js';

export const cityList = () => http('get', '/api/cityList');
export const getMovieNow = () =>
	http('get', '/api/movieOnInfoList', { cityId: 10 });
