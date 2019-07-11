import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';

const t = getTimeStamp();


export const aritcleSlide = () =>
    http('get', 'Service/callback.mi/PageSubArea/MarketFirstPageNew.api', {
        t: t
    });