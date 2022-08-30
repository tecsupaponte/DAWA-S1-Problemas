function timeConversion(time) {
    time = time.split(":")
    let hour = time[0]
    let minutes = time[1]
    let seconds = time[2].substring(0, 2)
    let period = time[2].substring(2, 4)

    if (period == "PM") {
        if (hour != 12) {
            hour = str(Number(hour) + 12)
        }
    } else {
        if (hour == 12) {
            hour = "00"
        }
    }

    time[0] = hour
    time[1] = minutes
    time[2] = seconds
    time = time.join(":")

    return time
}

console.log(timeConversion("12:01:00PM"))
console.log(timeConversion("12:01:00AM"))