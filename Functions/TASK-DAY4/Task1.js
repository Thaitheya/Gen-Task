//Do the below programs in anonymous function & IIFE

// Print odd numbers in an array
// let a = [1,2,3,4,5,6,7,8,9,10];
// for(let i = 0; i < a.length; i++) {
//     if(a[i] % 2 == 1) {
//         console.log(a[i]);
//     }
    
// }


// Convert all the strings to title caps in a string array
function sentence(str){
  str = str.toLowerCase().split();
  for(let i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join()
}
console.log(sentence("i am good programmer"));

// Sum of all numbers in an array
    function sum(arr) {  
        let sum = 0;
        for (let i = 0; i < arr.length; i++)  
            sum += arr[i];  
        return sum;  
    }  
    let arr = [12, 3, 4, 15];
    console.log("Sum of given array is " + sum(arr));

// Return all the prime numbers in an array
function findPrime(start , end) {
   let primes = [];

   for(let y = start; y < end - 1; y++) {
      if(isPrime(y)) {
         primes.push(y);
      }
   }
   return primes;
}
function isPrime(num) {
  if(num <= 1) return false;
   for(let a = 2; a < num; a++) {
     if(num % a == 0) {
        return false;
     }
   }
   return true;
}

console.log(findPrime(2,20).join());

// Return all the palindromes in an array
function palindrome(string) {
  for (let index = 0; index < string.length/2; index++) {
    if(string[index] !== string[string.length - 1-index]){
       return false;
    }
    return true;
  }
}
console.log(palindrome("madam"))
// Return median of two sorted arrays of the same size.

// Remove duplicates from an array
let ar = [1,2,2,3,4,5,5,6,7,9,10]
function removeDDup(element) {
  return [...new Set (element)]
}
console.log(removeDDup(ar).join());
// Rotate an array by k times

const rotateArray = function(nums, k) {
    for(let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
    }
    return nums;
}
let list = [1,2,3,4,5]
console.log(rotateArray(list, 8).join())