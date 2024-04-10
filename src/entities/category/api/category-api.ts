import { type CategoryAPI } from './types'

enum Endpoints {
    FETCH_CATEGORIES = "https://run.mocky.io/v3/bla-bla-bla"
}

export const api: CategoryAPI = {
    fetchEvents() {
        return fetch(Endpoints.FETCH_CATEGORIES)
    }
}
