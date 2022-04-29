import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FC, useEffect, useState } from 'react';
import { useStyles } from './FilterControlStyles';
import { AppConfig } from 'AppConfig';
import { LatLngBounds } from 'leaflet';
import { useMap } from 'react-leaflet';
import qs from 'qs';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectApp, setDemoMapFilterObject, Themes } from 'appSlice';

interface Props {
    getPointsOfInterest: (bounds: LatLngBounds, zoom: number, filterParam?: object) => void;
}

const FilterControl: FC<Props> = (props) => {
    const map = useMap();
    const activeCaptainWebviewUrl = AppConfig.getSettings().activeCaptainWebviewUrl;
    const thirdPartyApiKey = AppConfig.getSettings().thirdPartyApiKey;
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { getPointsOfInterest } = props;

    const state = useAppSelector(selectApp);
    const classes = useStyles({ isDarkTheme: state.webviewTheme === Themes.dark });
    const dispatch = useAppDispatch();

    const [filterUrl, setFilterUrl] = useState<string>(
        `${activeCaptainWebviewUrl}/mapfilter?apikey=${thirdPartyApiKey}&${qs.stringify(state.demoMap.filterObject)}`,
    );

    useEffect(() => {
        let messageListener = (event: MessageEvent<any>) => {
            const eventObject = JSON.parse(event.data);
            if (eventObject.event && eventObject.event.toLowerCase() === 'filterchange') {
                const filterObject = eventObject.eventMessage.data;
                dispatch(setDemoMapFilterObject(filterObject));
                getPointsOfInterest(map.getBounds(), map.getZoom(), filterObject);
            }
        };

        window.addEventListener('message', messageListener);

        return () => {
            window.removeEventListener('message', messageListener);
        };
    });

    return (
        <Box className="leaflet-bottom leaflet-left">
            <Box className={`leaflet-control leaflet-bar ${classes.controlContainer}`}>
                <Button
                    onClick={() => {
                        setModalOpen(true);
                    }}
                    className={classes.controlButton}
                    variant="contained"
                    color="primary"
                >
                    POI Filter
                </Button>
                <Dialog
                    fullWidth
                    onClose={() => {
                        setModalOpen(false);
                        setFilterUrl(
                            `${activeCaptainWebviewUrl}/mapfilter` +
                                `?apikey=${thirdPartyApiKey}&${qs.stringify(state.demoMap.filterObject)}`,
                        );
                    }}
                    maxWidth="xs"
                    disableEscapeKeyDown
                    open={modalOpen}
                >
                    <DialogContent className={classes.mapFilterFrameContainer}>
                        <iframe
                            className={classes.mapFilterFrame}
                            src={
                                `${filterUrl}&theme=${state.webviewTheme}&font=${state.webviewFont}` +
                                `&locale=${state.webviewLanguage}`
                            }
                        ></iframe>
                    </DialogContent>
                </Dialog>
            </Box>
        </Box>
    );
};

export default FilterControl;
