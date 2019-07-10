import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';

const t = getTimeStamp();
export const getCinemas = locationId =>
	http('get', '/api/proxy/ticket/onlineCinemasByCity.api', {
		locationId: locationId,
		_: t
	});
