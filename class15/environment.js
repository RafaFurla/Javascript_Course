// Creating an array:
let num = [5, 8, 2, 9, 3];
console.log(`Showing the created array: ${num}`);
// adding a value in an specified position:
num[5] = 6;
console.log(`After adding the number 6 at the key 5: ${num}`);
// adding a value at the end of the array:
num.push(17);
console.log(`After adding the number 17 at the last position of the array: ${num}`);
// adding a value a lot after the last key:
num[14] = 23;
console.log(`After adding the number 23 in the key 14: ${num}`);
console.log(num.length);
console.log(`Showing the number in the key 1: ${num[1]}`);
// Putting the elements into the array in a random position:
num.sort()
console.log(`Showing the array after sorting it: ${num}`);
// Showing in the screen all the elements in the array:
for (var c=0; c < num.length; c += 1) {
console.log(`The key ${c}, have the value: ${num[c]}`);
};
// Showing in the screen all the elements in a different way:
for (var c in num) {
    console.log(`Test: ${num[c]}`);
    };
// Searching an element in the "num" array:
var search = 125
if (num.indexOf(search) == -1) {
    console.log(`The element ${search} is not a content of the array!`)
}
else {
    console.log(`The element ${search} was found at the position ${num.indexOf(search)}`)
}
