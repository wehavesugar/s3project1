import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';
const t = getTimeStamp();

export const getArticle = id =>
	http('get', '/Service/callback.mi/News/Detail.api', {
		newsId: id,
		t
	});
///Service/callback.mi/News/Detail.api?newsId=1591621&t=201971014214285855
