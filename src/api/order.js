import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';

const t = getTimeStamp();

export const marketFirstPage = () =>
    http('get', 'Service/callback.mi/PageSubArea/MarketFirstPageNew.api', {
        t: t
    });