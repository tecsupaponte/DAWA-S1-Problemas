let message = ""

for (let index = 1; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        message = "fizzbuzz"
    } else if (index % 3 == 0) {
        message = "fizz"
    } else if (index % 5 == 0) {
        message = "buzz"
    } else {
        message = index
    }
    console.log(message)
}