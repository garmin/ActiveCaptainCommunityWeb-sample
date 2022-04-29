import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { PointOfInterest } from 'types/PointsOfInterest';

export enum Themes {
    light = 'light',
    dark = 'dark',
}

export enum Languages {
    argentina = 'es-AR',
    austria = 'de-AT',
    australia = 'en-AU',
    brazilian = 'pt-BR',
    bulgarian = 'bg-BG',
    canada = 'en-CA',
    chile = 'es-CL',
    chinese = 'zh-CN',
    croatian = 'hr-HR',
    czech = 'cs-CZ',
    danish = 'da-DK',
    dutch = 'nl-NL',
    dutchBelgium = 'nl-BE',
    english = 'en-US',
    finnish = 'fi-FI',
    french = 'fr-FR',
    frenchBelgium = 'fr-BE',
    frenchCanada = 'fr-CA',
    frenchSwitzerland = 'fr-CH',
    german = 'de-DE',
    germanSwitzerland = 'de-CH',
    greek = 'el-GR',
    ireland = 'en-IE',
    italian = 'it-IT',
    japanese = 'ja-JP',
    korean = 'ko-KR',
    mexico = 'es-MX',
    newZealand = 'en-NZ',
    norwegian = 'nb-NO',
    polish = 'pl-PL',
    portuguese = 'pt-PT',
    romanian = 'ro-RO',
    russian = 'ru-RU',
    slovenian = 'sl-SI',
    southAfrica = 'en-ZA',
    spanish = 'es-ES',
    swedish = 'sv-SE',
    thai = 'th-TH',
    turkish = 'tr-TR',
    taiwanese = 'zh-TW',
    unitedKingdom = 'en-GB',
}

export enum Fonts {
    roboto = 'roboto',
    arial = 'arial',
    verdana = 'verdana',
    helvetica = 'helvetica',
    tahoma = 'tahoma',
    trebuchet = 'trebuchet',
    times = 'times',
    georgia = 'georgia',
    garamond = 'garamond',
}

export interface AppState {
    webviewTheme: Themes;
    webviewLanguage: Languages;
    webviewFont: Fonts;
    webviewSettingsModalOpen: boolean;
    demoMap: {
        snackbarAlertMessage: string;
        pointsOfInterest: PointOfInterest[];
        webviewModalOpen: boolean;
        selectedPoiId: number;
        filterObject: object;
    };
}

export const initialState: AppState = {
    webviewTheme: Themes.light,
    webviewLanguage: Languages.english,
    webviewFont: Fonts.roboto,
    webviewSettingsModalOpen: false,
    demoMap: {
        snackbarAlertMessage: '',
        pointsOfInterest: [],
        webviewModalOpen: false,
        selectedPoiId: 0,
        filterObject: {},
    },
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setWebviewTheme: (state, action: PayloadAction<Themes>) => {
            state.webviewTheme = action.payload;
        },
        setWebviewLanguage: (state, action: PayloadAction<Languages>) => {
            state.webviewLanguage = action.payload;
        },
        setWebviewFont: (state, action: PayloadAction<Fonts>) => {
            state.webviewFont = action.payload;
        },
        setWebviewSettingsModalOpen: (state, action: PayloadAction<boolean>) => {
            state.webviewSettingsModalOpen = action.payload;
        },
        setDemoMapWebviewModalOpen: (state, action: PayloadAction<boolean>) => {
            state.demoMap = {
                ...state.demoMap,
                webviewModalOpen: action.payload,
            };
        },
        setDemoMapSnackbarAlertMessage: (state, action: PayloadAction<string>) => {
            state.demoMap = {
                ...state.demoMap,
                snackbarAlertMessage: action.payload,
            };
        },
        setDemoMapPointsOfInterest: (state, action: PayloadAction<PointOfInterest[]>) => {
            state.demoMap = {
                ...state.demoMap,
                pointsOfInterest: action.payload,
            };
        },
        setDemoMapSelectedPoiId: (state, action: PayloadAction<number>) => {
            state.demoMap = {
                ...state.demoMap,
                selectedPoiId: action.payload,
            };
        },
        setDemoMapFilterObject: (state, action: PayloadAction<object>) => {
            state.demoMap = {
                ...state.demoMap,
                filterObject: action.payload,
            };
        },
    },
});

export const {
    setWebviewTheme,
    setWebviewFont,
    setWebviewLanguage,
    setWebviewSettingsModalOpen,
    setDemoMapSnackbarAlertMessage,
    setDemoMapFilterObject,
    setDemoMapPointsOfInterest,
    setDemoMapSelectedPoiId,
    setDemoMapWebviewModalOpen,
} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
