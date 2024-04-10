import type { EventAPI } from './types'

enum Endpoints {
    FETCH_EVENTS = "b2e710c1-1ae4-4ec5-8dc7-f8bea25c3ac5"
}

export const useEventAPI = (): EventAPI => {
    const { apiUrl } = useRuntimeConfig().public
    return {
        fetchEvents() {
            return $fetch(apiUrl + Endpoints.FETCH_EVENTS)
        }
    }
}
