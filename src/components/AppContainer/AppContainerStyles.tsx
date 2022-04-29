import { makeStyles } from '@mui/styles';
import { appHeaderHeight } from 'components/AppHeader/AppHeaderStyles';

export const useStyles = makeStyles({
    contentContainer: {
        flexGrow: 1,
        marginTop: appHeaderHeight,
    },
});
