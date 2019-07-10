import http from '@utils/http';
import { getTimeStamp } from '@utils/timestamp';

const t = getTimeStamp();

export const banner = () =>
    http('get', 'Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api', {
        t: t
    });

export const exploreNewsList = () =>
    http('get', 'Service/callback.mi/News/NewsList.api', {
        t: t
    });

export const trailerNewsList = () =>
    http('get', 'Service/callback.mi/PageSubArea/TrailerList.api', {
        t: t
    });


export const toplistNews = () =>
    http('get', 'Service/callback.mi/TopList/TopListOfAll.api', {
        t: t
    });

export const reviewList = () =>
    http('get', 'Service/callback.mi/MobileMovie/Review.api', {
        t: t
    });

export const topListDetails = (num) =>
    http('get', 'Service/callback.mi/TopList/TopListDetails.api', {
        t: t,
        pageIndex: 1,
        type: 2,
        toplistId: num,
        pageSubAreaID: num
    });