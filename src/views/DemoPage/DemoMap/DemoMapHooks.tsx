import { LatLngBounds } from 'leaflet';
import { FC } from 'react';
import { useMapEvents, useMap } from 'react-leaflet';

interface Props {
    getPointsOfInterest: (bounds: LatLngBounds, zoom: number) => void;
}

const DemoMapHooks: FC<Props> = (props) => {
    const { getPointsOfInterest } = props;
    const map = useMap();

    const onMapMoveEndEvent = () => {
        getPointsOfInterest(map.getBounds(), map.getZoom());
    };

    useMapEvents({ moveend: onMapMoveEndEvent });
    return null;
};

export default DemoMapHooks;
