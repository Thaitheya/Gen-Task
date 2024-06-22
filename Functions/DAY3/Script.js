//IIFE

(function (message) {
  console.log(message)
})("Hello World");

var sudan;
console.log(typeof sudan)
sudan = () => {
    console.log("Execute Sudan");
    return 10;
}

console.log(typeof sudan);
console.log(sudan());