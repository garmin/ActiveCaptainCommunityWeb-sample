import { AxiosRequestConfig } from 'axios';
import { ApiBase } from 'api/ApiBase';
import { LatLngBounds } from 'leaflet';
import { BboxResponse } from 'types/PointsOfInterest';
import { AppConfig } from 'AppConfig';

export class PointsOfInterestAPI {
    public static getPointsOfInterest(bounds: LatLngBounds, zoom: number, filterObject: object): Promise<BboxResponse> {
        const latMax = 90;
        const latMin = -90;
        const lonMax = 180;
        const lonMin = -180;

        const options: AxiosRequestConfig = {
            url: '/points-of-interest/bbox',
            headers: { apiKey: AppConfig.getSettings().thirdPartyApiKey },
            data: {
                ...filterObject,
                south: Math.max(bounds.getSouth(), latMin),
                west: Math.max(bounds.getWest(), lonMin),
                north: Math.min(bounds.getNorth(), latMax),
                east: Math.min(bounds.getEast(), lonMax),
                zoomLevel: zoom,
            },
        };
        return ApiBase.post<BboxResponse>(options);
    }
}
