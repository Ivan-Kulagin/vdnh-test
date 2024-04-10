import { type EventAPI } from './types'

// https://vdnh.ru/api_v1/events/getEvents/?date=1712485338
enum Endpoints {
    FETCH_EVENTS = "https://run.mocky.io/v3/4b5f406e-e5b2-40e1-b8cb-f6ee71f679b1"
}

export const api: EventAPI = {
    fetchEvents() {
        return $fetch(Endpoints.FETCH_EVENTS)
    }
}
