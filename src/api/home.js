import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';

const t = getTimeStamp();

export const getMall = () =>
	http('get', '/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api', {
		t: t
	});
export const getHomeData = cityID =>
	http('get', '/Service/callback.mi/Showtime/LocationMovies.api', {
		locationId: cityID,
		t: t
	});

export const getTodayHot = () =>
	http('get', '/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api', {
		t: t
	});
