import type { DateTimeFormat } from '@intlify/core-base'
const dateTimeFormat: DateTimeFormat = {
  regular: {
    month: "long",
    day: "2-digit"
  },
  day2Digit: {
    day: "2-digit"
  },
  dayNumeric: {
    day: "numeric"
  },
  weekDay: {
    weekday: "short"
  },
  month: {
    month: "long"
  }
}
export default dateTimeFormat
