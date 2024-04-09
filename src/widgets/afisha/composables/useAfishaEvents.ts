import EventsAPI from '../../../entities/event'

export const useAfishaEvents = async () => {
    const fetchingEvents = ref(false)
    async function fetchEvents() {
        try {
            fetchingEvents.value = true
            const response = await EventsAPI.fetchEvents();
            return await response.json();
        } catch (error) {
            throw new Error('Failed to fetch events' + error)
        } finally {
            fetchingEvents.value = false
        }
    }

    const {labels, events: eventsData} = await fetchEvents()

    return {
        categories: labels ?? [],
        events: eventsData ?? [],
        fetchingEvents
    }
}
