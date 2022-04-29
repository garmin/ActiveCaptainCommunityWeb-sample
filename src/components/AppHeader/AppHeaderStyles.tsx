import { makeStyles } from '@mui/styles';
import { blue } from '@mui/material/colors';

export const appHeaderHeight = '4.0rem';

export const useStyles = makeStyles(() => ({
    appBar: {
        zIndex: 1250,
        transition: 'width 0.25s',
        height: appHeaderHeight,
    },
    toolbar: {
        width: '100%',
        height: appHeaderHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        background: blue[800],
    },
    logoContainer: {
        height: '2.5rem',
        display: 'flex',
        paddingTop: '3px',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
    },
}));
