import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';

const t = getTimeStamp();

export const getHotKeyWords = () =>
	http('get', '/Service/callback.mi/Search/HotKeyWords.api', {
		t: t
	});
