import { makeStyles } from '@mui/styles';

interface WebviewDialogStylesProps {
    isDarkTheme: boolean;
}

export const useStyles = makeStyles({
    webviewFrameContainer: (props: WebviewDialogStylesProps) => {
        const { isDarkTheme } = props;
        return {
            '&.MuiDialogContent-root': {
                padding: '0px',
                backgroundColor: isDarkTheme ? 'black' : 'inherit',
            },
        };
    },
    webviewFilterFrame: {
        border: 'none',
        width: '100%',
        height: '80vh',
    },
});
