import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();

export const getShortComment = id =>
	http('get', '/Service/callback.mi/Showtime/MovieComments.api', {
		movieId: id,
		pageIndex: 1,
		t
	});
//https://m.mtime.cn/Service/callback.mi/Showtime/MovieComments.api?movieId=255471&pageIndex=1&t=201971115315093583
