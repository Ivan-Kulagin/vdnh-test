import type { EventItem } from 'entities/event'
import type { CategoryItem } from 'entities/category'
import { dateToUnix, isSameUnixDay } from 'shared/utils/dates'

export const categoryFilter = (eventItem: EventItem, category: CategoryItem): boolean => {
    return category.value ? eventItem.type.toLowerCase() === category.value?.toLowerCase() : true
}

export const dateFilter = (eventItem: EventItem, date?: Date | null): boolean => {
    return date ? isSameUnixDay(eventItem.unix, dateToUnix(date)) : true
}
