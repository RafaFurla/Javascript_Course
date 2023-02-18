function evenodd(n) {
    if (n % 2 == 0){
        return "Even!";
    }
    else {
        return "Odd!";
    }
}

resp = evenodd(6);
console.log(resp);

// ****************************************

function sum(n=0, m=0) {
    return n + m;
}

console.log(sum(10, 5));

// ***************************************

var k = function(x) {
    return x*2;
}

console.log(k(10));


// **************************************

function factorial(num) {
    if (num == 1) {
        return num;
    }
    else {
        return num * factorial(num-1);
    }
}

console.log(factorial(5));