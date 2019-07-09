import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();

export const getMovieComing = () =>
	http('get', '/Service/callback.mi/Movie/MovieComingNew.api?locationId=366', {
		t: t
	});
