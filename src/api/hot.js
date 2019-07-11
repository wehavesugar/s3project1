import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();

export const getMovieHot = cityId =>
	http('get', '/Service/callback.mi/Showtime/LocationMovies.api', {
		locationId: cityId,
		t: t
	});
