import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import no from './locales/no.json';
import de from './locales/de.json';

i18n
    .use(detector)
    .init({
        resources: {
            en: {
                translations: en
            },
            de: {
                translations: de
            },
            fr: {
                translations: fr
            },
            no: {
                translations: no
            },
        },
        'load': 'languageOnly',
        'lng': navigator.language || navigator.userLanguage,
        fallbackLng: 'en',
        saveMissing: false,
        debug: process.env.NODE_ENV !== 'production',
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            wait: true,
        },
    });
export default i18n;