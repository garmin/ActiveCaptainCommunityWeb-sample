import { Fonts, Languages, Themes } from 'appSlice';

interface LanguageSelectOption {
    language: string;
    languageCode: Languages;
}

export const languageSelectOptions: LanguageSelectOption[] = [
    {
        language: 'English (Default)',
        languageCode: Languages.english,
    },
    {
        language: 'Argentina',
        languageCode: Languages.argentina,
    },
    {
        language: 'Australia',
        languageCode: Languages.australia,
    },
    {
        language: 'Österreich | Austria',
        languageCode: Languages.austria,
    },
    {
        language: 'België (Nederlands) | Belgium (Dutch)',
        languageCode: Languages.dutchBelgium,
    },
    {
        language: 'Belgique (Français) | Belgium (French)',
        languageCode: Languages.frenchBelgium,
    },
    {
        language: 'Brasil',
        languageCode: Languages.brazilian,
    },
    {
        language: 'България | Bulgaria',
        languageCode: Languages.bulgarian,
    },
    {
        language: 'Canada (English)',
        languageCode: Languages.canada,
    },
    {
        language: 'Canada (Français) | Canada (French)',
        languageCode: Languages.frenchCanada,
    },
    {
        language: 'Chile',
        languageCode: Languages.chile,
    },
    {
        language: 'Mainland China',
        languageCode: Languages.chinese,
    },
    {
        language: 'Hrvatska | Croatia',
        languageCode: Languages.croatian,
    },
    {
        language: 'Česká Republika',
        languageCode: Languages.czech,
    },
    {
        language: 'Danmark | Denmark',
        languageCode: Languages.danish,
    },
    {
        language: 'Suomi | Finland',
        languageCode: Languages.finnish,
    },
    {
        language: 'France',
        languageCode: Languages.french,
    },
    {
        language: 'Deutschland | Germany',
        languageCode: Languages.german,
    },
    {
        language: 'Ελλάδα | Greece',
        languageCode: Languages.greek,
    },
    {
        language: 'Ireland',
        languageCode: Languages.ireland,
    },
    {
        language: 'Italia | Italy',
        languageCode: Languages.italian,
    },
    {
        language: '日本 | Japan',
        languageCode: Languages.japanese,
    },
    {
        language: '한국 | Korea',
        languageCode: Languages.korean,
    },
    {
        language: 'México',
        languageCode: Languages.mexico,
    },
    {
        language: 'Nederland | Netherlands',
        languageCode: Languages.dutch,
    },
    {
        language: 'New Zealand',
        languageCode: Languages.newZealand,
    },
    {
        language: 'Norge | Norway',
        languageCode: Languages.norwegian,
    },
    {
        language: 'Polska | Poland',
        languageCode: Languages.polish,
    },
    {
        language: 'Portugal',
        languageCode: Languages.portuguese,
    },
    {
        language: 'Romania',
        languageCode: Languages.romanian,
    },
    {
        language: 'Россия | Russia',
        languageCode: Languages.russian,
    },
    {
        language: 'Slovenija | Slovenia',
        languageCode: Languages.slovenian,
    },
    {
        language: 'South Africa',
        languageCode: Languages.southAfrica,
    },
    {
        language: 'España | Spain',
        languageCode: Languages.spanish,
    },
    {
        language: 'Sverige | Sweden',
        languageCode: Languages.swedish,
    },
    {
        language: 'Suisse (Français) | Switzerland (French)',
        languageCode: Languages.frenchSwitzerland,
    },
    {
        language: 'Schweiz (Deutsch) | Switzerland (German)',
        languageCode: Languages.germanSwitzerland,
    },
    {
        language: 'Taiwan Region',
        languageCode: Languages.taiwanese,
    },
    {
        language: 'ประเทศไทย | Thailand',
        languageCode: Languages.thai,
    },
    {
        language: 'Türkiye | Turkey',
        languageCode: Languages.turkish,
    },
    {
        language: 'United Kingdom',
        languageCode: Languages.unitedKingdom,
    },
];

interface ThemeSelectOption {
    theme: string;
    themeCode: Themes;
}

export const themeSelectOptions: ThemeSelectOption[] = [
    {
        theme: 'Light (Default)',
        themeCode: Themes.light,
    },
    {
        theme: 'Dark',
        themeCode: Themes.dark,
    },
];

interface FontSelectOption {
    font: string;
    fontCode: Fonts;
}

export const fontSelectOptions: FontSelectOption[] = [
    {
        font: 'Roboto (Default)',
        fontCode: Fonts.roboto,
    },
    {
        font: 'Arial',
        fontCode: Fonts.arial,
    },
    {
        font: 'Verdana',
        fontCode: Fonts.verdana,
    },
    {
        font: 'Helvetica',
        fontCode: Fonts.helvetica,
    },
    {
        font: 'Tahoma',
        fontCode: Fonts.helvetica,
    },
    {
        font: 'Trebuchet',
        fontCode: Fonts.trebuchet,
    },
    {
        font: 'Times',
        fontCode: Fonts.times,
    },
    {
        font: 'Georgia',
        fontCode: Fonts.georgia,
    },
    {
        font: 'Garamond',
        fontCode: Fonts.garamond,
    },
];
