import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();

export const getMovieHot = () =>
	http(
		'get',
		'/Service/callback.mi/Showtime/LocationMovies.api?locationId=366',
		{
			t: t
		}
	);
