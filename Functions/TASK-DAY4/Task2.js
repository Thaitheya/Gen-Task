// Print odd numbers in an array
let odd = [1,2,3,4,5]
function findOdd(odd) {

    for(let a = 0; a <= odd.length; a++) {
        if(a % 2 == 0) {
            console.log(odd[a]);
        }
    }
}
findOdd(odd);
// Convert all the strings to title caps in a string array
let string_cap = "i am a good programmer";
function string(str) {
  str = str.toLowerCase().split(' ');
  for(let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
console.log(string(string_cap));

// Sum of all numbers in an array
let aee = [1,2,3,5,62,4];
let sum = 0;
for(let a = 0; a < aee.length ; a++) {
    sum = sum + aee[a];
}
console.log(sum);
// Return all the prime numbers in an array
let oddNumber = [1,2,3,4,5];
function primeNumber(num) {
    for(let a = 0; a <= num.length; a++) {
        if(a % 2 == 0) {
          console.log(num[a]);
        }
    }
}

primeNumber(oddNumber.join(''));
// Return all the palindromes in an array
