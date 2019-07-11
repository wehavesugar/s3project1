import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();

export const getMovieDetail = id =>
	http('get', 'Service/callback.mi/movie/Detail.api', {
		movieId: id,
		locationId: 366,
		t
	});
