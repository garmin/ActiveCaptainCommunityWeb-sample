import { FC, SyntheticEvent, useEffect } from 'react';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import { AppConfig } from 'AppConfig';
import { LayersControl, MapContainer, Marker, Tooltip } from 'react-leaflet';
import { LayerType } from 'types/Map';
// eslint-disable-next-line object-curly-newline
import { DivIcon, Icon, LatLng, Point, Map, LatLngBounds } from 'leaflet';
import { PointsOfInterestAPI } from 'api/PointsOfInterest';
import { BboxResponse } from 'types/PointsOfInterest';
import { useStyles } from 'views/DemoPage/DemoMap/DemoMapStyles';
import DemoMapHooks from 'views/DemoPage/DemoMap/DemoMapHooks';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import FilterControl from 'views/DemoPage/DemoMap/FilterControl';
import WebviewDialog from './WebviewDialog';
import {
    selectApp,
    setDemoMapPointsOfInterest,
    setDemoMapSelectedPoiId,
    setDemoMapSnackbarAlertMessage,
    setDemoMapWebviewModalOpen,
} from 'appSlice';
import { useAppDispatch, useAppSelector } from 'hooks';

const DemoMap: FC = () => {
    const classes = useStyles();
    const googleMapsApiKey = AppConfig.getSettings().googleMapsApiKey;
    const defaultMapCenter = new LatLng(38.8661248, -94.7912704);
    const defaultMapZoom = 6;
    const iconSize = 38;
    const mapMaxBoundsViscosity = 1.0;
    const mapMaxBounds = new LatLngBounds(
        {
            lat: -90,
            lng: -180,
        },
        {
            lat: 90,
            lng: 180,
        },
    );
    const minZoom = 2;
    const maxZoom = 20;

    const state = useAppSelector(selectApp);
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(setDemoMapWebviewModalOpen(false));
        };
    }, []);

    const getPointsOfInterest = (bounds: LatLngBounds, zoom: number, filterParam?: object) => {
        PointsOfInterestAPI.getPointsOfInterest(bounds, zoom, filterParam ? filterParam : state.demoMap.filterObject)
            .then((result: BboxResponse) => {
                dispatch(setDemoMapPointsOfInterest(result.pointsOfInterest));
            })
            .catch(() => {
                dispatch(setDemoMapSnackbarAlertMessage('An API error occurred while loading points of interest.'));
            });
    };

    const onMapCreated = (createdMap: Map) => {
        getPointsOfInterest(createdMap.getBounds(), createdMap.getZoom());
    };

    const handleSnackbarClose = (_event?: SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setDemoMapSnackbarAlertMessage(''));
    };

    return (
        <>
            <Snackbar
                open={state.demoMap.snackbarAlertMessage !== ''}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity="error" variant="filled">
                    {state.demoMap.snackbarAlertMessage}
                </Alert>
            </Snackbar>
            <MapContainer
                maxBounds={mapMaxBounds}
                maxBoundsViscosity={mapMaxBoundsViscosity}
                minZoom={minZoom}
                maxZoom={maxZoom}
                whenCreated={onMapCreated}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                scrollWheelZoom={true}
            >
                <DemoMapHooks getPointsOfInterest={getPointsOfInterest} />
                <WebviewDialog getPointsOfInterest={getPointsOfInterest} />
                <FilterControl getPointsOfInterest={getPointsOfInterest} />
                <LayersControl>
                    <LayersControl.BaseLayer checked name="Road Map">
                        <ReactLeafletGoogleLayer apiKey={googleMapsApiKey} type={LayerType.roadMap} />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Hybrid">
                        <ReactLeafletGoogleLayer apiKey={googleMapsApiKey} type={LayerType.hybrid} />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Satellite">
                        <ReactLeafletGoogleLayer apiKey={googleMapsApiKey} type={LayerType.satellite} />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Terrain">
                        <ReactLeafletGoogleLayer apiKey={googleMapsApiKey} type={LayerType.terrain} />
                    </LayersControl.BaseLayer>
                </LayersControl>
                {state.demoMap.pointsOfInterest.map((p) => {
                    const position = new LatLng(p.mapLocation.latitude, p.mapLocation.longitude);
                    let icon;
                    if (p.poiCount === 1) {
                        icon = new Icon({
                            iconUrl: p.iconUrl,
                            iconSize: new Point(iconSize, iconSize),
                            iconAnchor: [0, iconSize],
                        });
                    } else {
                        icon = new DivIcon({
                            iconSize: new Point(iconSize, iconSize),
                            iconAnchor: [iconSize / 2, iconSize / 2],
                            className: classes.mapDivIcon,
                            html: `<img src="${p.iconUrl}" /><span aria-hidden="true">${p.poiCount}</span>`,
                        });
                    }

                    return (
                        <Marker
                            eventHandlers={{
                                click: () => {
                                    if (p.poiCount === 1) {
                                        dispatch(setDemoMapSelectedPoiId(p.id));
                                        dispatch(setDemoMapWebviewModalOpen(true));
                                    }
                                },
                            }}
                            position={position}
                            icon={icon}
                            riseOnHover
                        >
                            {p.name && <Tooltip>{p.name}</Tooltip>}
                        </Marker>
                    );
                })}
            </MapContainer>
        </>
    );
};

export default DemoMap;
