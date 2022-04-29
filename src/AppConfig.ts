import { ConfigSettings } from 'types/ConfigSettings';

export class AppConfig {
    private static settings: ConfigSettings | null = null;

    public static getSettings(): ConfigSettings {
        if (AppConfig.settings == null) {
            AppConfig.settings = {
                activeCaptainThirdPartyApiUrlV2: process.env.REACT_APP_ACTIVECAPTAIN_THIRD_PARTY_API_URL_V2 as string,
                googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
                thirdPartyApiKey: process.env.REACT_APP_THIRD_PARTY_API_KEY as string,
                activeCaptainWebviewUrl: process.env.REACT_APP_ACTIVECAPTAIN_WEBVIEW_URL as string,
            };
        }

        return AppConfig.settings;
    }
}
