import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { AppConfig } from 'AppConfig';
import { selectApp, setDemoMapWebviewModalOpen, Themes } from 'appSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { LatLngBounds } from 'leaflet';
import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useStyles } from 'views/DemoPage/DemoMap/WebviewDialog/WebviewDialogStyles';

interface Props {
    getPointsOfInterest: (bounds: LatLngBounds, zoom: number) => void;
}

const WebviewDialog: FC<Props> = (props) => {
    const { getPointsOfInterest } = props;
    const state = useAppSelector(selectApp);
    const classes = useStyles({ isDarkTheme: state.webviewTheme === Themes.dark });
    const map = useMap();
    const dispatch = useAppDispatch();

    const activeCaptainWebviewUrl = AppConfig.getSettings().activeCaptainWebviewUrl;
    const thirdPartyApiKey = AppConfig.getSettings().thirdPartyApiKey;

    useEffect(() => {
        let messageListener = (event: MessageEvent<any>) => {
            const eventObject = JSON.parse(event.data);
            if (eventObject.event && eventObject.event.toLowerCase() === 'delete') {
                getPointsOfInterest(map.getBounds(), map.getZoom());
                dispatch(setDemoMapWebviewModalOpen(false));
            }
        };

        window.addEventListener('message', messageListener);

        return () => {
            window.removeEventListener('message', messageListener);
        };
    });

    return (
        <Dialog
            fullWidth
            onClose={() => {
                dispatch(setDemoMapWebviewModalOpen(false));
            }}
            maxWidth="sm"
            disableEscapeKeyDown
            open={state.demoMap.webviewModalOpen}
        >
            <DialogContent className={classes.webviewFrameContainer}>
                <iframe
                    className={classes.webviewFilterFrame}
                    src={
                        `${activeCaptainWebviewUrl}/${state.demoMap.selectedPoiId}?` +
                        `apikey=${thirdPartyApiKey}&theme=${state.webviewTheme}` +
                        `&font=${state.webviewFont}&locale=${state.webviewLanguage}`
                    }
                ></iframe>
            </DialogContent>
        </Dialog>
    );
};

export default WebviewDialog;
