export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ru',
    datetimeFormats: {
        'ru': {
            regular: {
                month: 'long',
                day: '2-digit'
            },
            day2Digit: {
                day: '2-digit'
            },
            dayNumeric: {
                day: 'numeric'
            },
            weekDay: {
                weekday: 'short'
            },
            month: {
                month: 'long'
            }
        }
    },
    messages: {
        ru: {
            welcome: 'Welcome'
        }
    }
}))
