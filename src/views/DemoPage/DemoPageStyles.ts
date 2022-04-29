import { makeStyles } from '@mui/styles';
import { appHeaderHeight } from 'components/AppHeader/AppHeaderStyles';

//Calculate the height of page content by using full view minus the appbar height
const contentHeight = `calc(100vh - ${appHeaderHeight})`;

export const useStyles = makeStyles({ mapContainer: { height: contentHeight } });
