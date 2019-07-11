import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();

export const getMovieComing = cityId =>
	http('get', '/Service/callback.mi/Movie/MovieComingNew.api', {
		locationId: cityId,
		t: t
	});
