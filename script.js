let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = prompt("enter your operator in add sub multi divi");
let d;
console.log("input a", a);
console.log("input b", b);
// console.log("input c", c);
if (c == "add") {
    d = a + b;
    console.log("Addition of a&b is", d)
}
else if (c == "sub") {
    d = a - b
    console.log("Subtration of a&b is", d)
}
else if (c == "multi") {
    d = a * b
    console.log("Multiplication of a&b is", d)
}
else if (c == "divi") {
    d = a / b
    console.log("Division of a&b is", d)
}
else {
    console.log("invalied comment"  )
}

