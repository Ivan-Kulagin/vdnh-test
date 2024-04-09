export const getNextDates = (amount: number): Promise<Date[]> => {
    return new Promise((resolve) => {
        const dates = [];
        const currentDate = new Date();

        for (let i = 0; i < amount; i++) {
            const nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + i);
            dates.push(nextDate);
        }
        resolve(dates)
    });
}
