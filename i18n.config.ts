export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ru',
    datetimeFormats: {
        'ru': {
            regular: {
                month: 'long',
                day: '2-digit'
            },
            calendarDay: {
                day: 'numeric'
            },
            weekDay: {
                weekday: 'short'
            }
        }
    },
    messages: {
        ru: {
            welcome: 'Welcome'
        }
    }
}))
