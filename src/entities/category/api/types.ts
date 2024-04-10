import type { CategoryItem } from '../types'

interface CategoriesResponse {
    labels: CategoryItem[]
}

export interface CategoryAPI {
    fetchCategories: () => Promise<CategoriesResponse>
}
