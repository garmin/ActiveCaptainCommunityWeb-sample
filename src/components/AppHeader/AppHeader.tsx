import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ActiveCaptainLogo from 'components/ActiveCaptainLogo';
import { useStyles } from './AppHeaderStyles';
import Settings from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import WebviewSettings from './WebviewSettings';
import { useAppDispatch } from 'hooks';
import { setWebviewSettingsModalOpen } from 'appSlice';

const AppHeader: FC = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logoContainer}>
                        <ActiveCaptainLogo />
                    </div>
                    <div>
                        <IconButton
                            onClick={() => {
                                dispatch(setWebviewSettingsModalOpen(true));
                            }}
                            color="inherit"
                        >
                            <Settings fontSize="large" />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <WebviewSettings />
        </>
    );
};

export default AppHeader;
