import { AppConfig } from 'AppConfig';
import { ConfigSettings } from 'types/ConfigSettings';

describe('AppConfig', () => {
    test('getSettings should return an object', () => {
        const settings: ConfigSettings = AppConfig.getSettings();
        expect(settings).not.toBeNull();
        expect(settings.googleMapsApiKey).toBe('999999');
    });
});
