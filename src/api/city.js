import http from '@utils/http.js';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();
//https://ticket-m.mtime.cn/api/proxy/ticket/Showtime/HotCitiesByCinema.api?_=1562808693671
export const cityList = () =>
	http('get', '/api/proxy/ticket/Showtime/HotCitiesByCinema.api', { _: t });
export const getMovieNow = () =>
	http('get', '/api/movieOnInfoList', { cityId: 366 });
