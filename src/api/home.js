import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
//https://m.mtime.cn/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=20197915102715086
const t = getTimeStamp();

export const getMall = () =>
	http('get', '/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api', {
		t: t
	});
export const getHomeData = () =>
	http('get', '/Service/callback.mi/Showtime/LocationMovies.api', {
		locationId: 366,
		t: t
	});

export const getTodayHot = () =>
	http('get', '/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api', {
		t: t
	});

// export const getHomeData = () =>
// 	http('get', '/api/movieOnInfoList', { cityId: 10 });

//https://m.mtime.cn/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2019791961593510
