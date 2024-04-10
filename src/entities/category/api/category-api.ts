import type { CategoryAPI } from './types'

enum Endpoints {
    FETCH_CATEGORIES = "7674f5a2-f0a0-40c8-acf1-50845f5202fe"
}

export const useCategoryAPI = (): CategoryAPI => {
    const { apiUrl } = useRuntimeConfig().public
    return {
        fetchCategories() {
            return $fetch(apiUrl + Endpoints.FETCH_CATEGORIES)
        }
    }
}
