export const dateToUnix = (date: Date): number => {
    return Math.floor(date.getTime() / 1000)
}

export const isSameUnixDay = (unix1: number, unix2: number): boolean => {
    return unix1 - (unix1 % 86400) === unix2 - (unix2 % 86400)
}
