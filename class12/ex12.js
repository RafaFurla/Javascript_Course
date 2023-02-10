var now = new Date()
var hour = now.getHours()
console.log(`Now it's ${hour} hours.`)
if (hour < 12) {
    console.log(`Good morning!`)
} else if (hour <= 18) {
    console.log("Good afternoon!")
} else {
    console.log("Good Night!")
}
