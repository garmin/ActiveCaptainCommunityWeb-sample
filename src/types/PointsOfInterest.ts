export interface PointOfInterest {
    mapLocation: MapLocation;
    name?: string;
    iconUrl: string;
    webviewUrl?: string;
    poiCount: number;
    id: number;
}

export interface MapLocation {
    latitude: number;
    longitude: number;
}

export interface BboxResponse {
    pointsOfInterest: PointOfInterest[];
}
