import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();

export const getCinema = id =>
	http('get', '/cinema/showtime.api', {
		t,
		cinemaId: id
	});

//https://ticket-api-m.mtime.cn/cinema/showtime.api?t=201971019342336328&cinemaId=9694
