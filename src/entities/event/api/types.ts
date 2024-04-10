import type { EventItem } from '../types'

interface EventsResponse {
    events: EventItem[]
}

export interface EventAPI {
    fetchEvents: () => Promise<EventsResponse>
}
