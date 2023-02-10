var age = 18;
console.log(`You have ${age} years.`)
if (age < 16) {
    console.log("Can't vote.");
} else if (age >= 16 && age < 18) { 
    console.log("Optional Vote.")
} else {
    console.log("Obligatory vote!")
}
