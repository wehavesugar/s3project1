import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();

export const getLongComment = id =>
	http('get', '/Service/callback.mi/Movie/HotLongComments.api', {
		movieId: id,
		pageIndex: 1,
		t
	});
