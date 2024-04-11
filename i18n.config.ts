import ruLocale from './lang/ru/locale';
import ruDateTime from './lang/ru/datetime';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'ru',
    datetimeFormats: {
        ru: ruDateTime
    },
    messages: {
        ru: ruLocale
    }
}))
