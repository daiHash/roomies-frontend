export default class DateHandler {
  static dateToString (date) {
    if (date === undefined || date === null) return
    const splittedDate = date.split('-')
    const stringDate = ''.concat(...splittedDate)
    return stringDate
  }

  static getAge (birthDate) {
    const now = new Date()

    function isLeap (year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    }

    // days since the birthdate
    let days = Math.floor((now.getTime() - birthDate.getTime()) / 1000 / 60 / 60 / 24)
    let age = 0
    // iterate the years
    for (let y = birthDate.getFullYear(); y <= now.getFullYear(); y++) {
      let daysInYear = isLeap(y) ? 366 : 365
      if (days >= daysInYear) {
        days -= daysInYear
        age++
        // increment the age only if there are available enough days for the year.
      }
    }
    return age
  }

  static showAge (date) {
    if (date === undefined || date === null) return
    const parts = date.match(/(\d{4})(\d{2})(\d{2})/)
    if (parts === null) return
    const dateObj = new Date(parts[1], parts[2] - 1, parts[3])
    return DateHandler.getAge(dateObj)
  }
}
