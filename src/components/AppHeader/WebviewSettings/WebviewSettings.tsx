import { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { selectApp, setWebviewTheme, setWebviewLanguage, setWebviewFont, setWebviewSettingsModalOpen } from 'appSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
    fontSelectOptions,
    languageSelectOptions,
    themeSelectOptions,
} from 'components/AppHeader/WebviewSettings/WebviewSettingsSelectOptions';
import { useStyles } from 'components/AppHeader/WebviewSettings/WebviewSettingsStyles';
import { Box } from '@mui/material';

const WebviewSettings: FC = () => {
    const classes = useStyles();
    const languageInputLabelId = 'language-input-label-id';
    const languageLabel = 'Country/Region';
    const themeInputLabelId = 'theme-input-label-id';
    const themeLabel = 'Theme';
    const fontInputLabelId = 'font-input-label-id';
    const fontLabel = 'Font';

    const state = useAppSelector(selectApp);
    const dispatch = useAppDispatch();

    const onLanguageSelectChange = (event: SelectChangeEvent<any>) => {
        dispatch(setWebviewLanguage(event.target.value));
    };

    const onThemeSelectChange = (event: SelectChangeEvent<any>) => {
        dispatch(setWebviewTheme(event.target.value));
    };

    const onFontSelectChange = (event: SelectChangeEvent<any>) => {
        dispatch(setWebviewFont(event.target.value));
    };

    return (
        <Dialog
            fullWidth
            onClose={() => {
                dispatch(setWebviewSettingsModalOpen(false));
            }}
            maxWidth="xs"
            open={state.webviewSettingsModalOpen}
        >
            <DialogTitle>Webview Settings</DialogTitle>
            <DialogContent>
                <Box className={classes.settingsFormControlContainer}>
                    <FormControl fullWidth>
                        <InputLabel id={languageInputLabelId}>{languageLabel}</InputLabel>
                        <Select
                            label={languageLabel}
                            value={state.webviewLanguage}
                            labelId={languageInputLabelId}
                            onChange={onLanguageSelectChange}
                        >
                            {languageSelectOptions.map((op) => (
                                <MenuItem value={op.languageCode}>{op.language}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box className={classes.settingsFormControlContainer}>
                    <FormControl fullWidth>
                        <InputLabel id={themeInputLabelId}>{themeLabel}</InputLabel>
                        <Select
                            label={themeLabel}
                            labelId={themeInputLabelId}
                            value={state.webviewTheme}
                            onChange={onThemeSelectChange}
                        >
                            {themeSelectOptions.map((op) => (
                                <MenuItem value={op.themeCode}>{op.theme}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box className={classes.settingsFormControlContainer}>
                    <FormControl fullWidth>
                        <InputLabel id={fontInputLabelId}>{fontLabel}</InputLabel>
                        <Select
                            label={fontLabel}
                            labelId={fontInputLabelId}
                            value={state.webviewFont}
                            onChange={onFontSelectChange}
                        >
                            {fontSelectOptions.map((op) => (
                                <MenuItem value={op.fontCode}>{op.font}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default WebviewSettings;
