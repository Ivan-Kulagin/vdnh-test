export const applyFilters = <T>(to: T[], filters: ((item: T) => boolean)[]) => {
    return to.filter(item => filters.reduce((acc, curr) => {
        return acc && curr(item)
    }, true))
}
