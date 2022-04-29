import { makeStyles } from '@mui/styles';

interface FilterControlStylesProps {
    isDarkTheme: boolean;
}

export const useStyles = makeStyles({
    mapFilterFrameContainer: (props: FilterControlStylesProps) => {
        const { isDarkTheme } = props;
        return {
            padding: '0px !important',
            backgroundColor: isDarkTheme ? 'black' : 'inherit',
        };
    },
    controlContainer: { border: 'none !important' },
    controlButton: { fontSize: '17px' },
    mapFilterFrame: {
        border: 'none',
        width: '100%',
        height: '50vh',
    },
});
