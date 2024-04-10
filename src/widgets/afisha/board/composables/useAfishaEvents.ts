import { EventAPI } from 'entities/event'

export const useAfishaEvents = async () => {
    async function fetchEvents() {
        try {
            const response = await EventAPI.fetchEvents();
            return await response.json();
        } catch (error) {
            throw new Error('Failed to fetch events' + error)
        }
    }

    const {labels, events: eventsData} = await fetchEvents()

    return {
        categories: labels ?? [],
        events: eventsData ?? []
    }
}
