var scores = [1,2,3,4,5,6];

function callBack(element, index, self) {
    return element * 2;
}
    
var output = scores.map(callBack);

console.log(output);


//Filter


var img = ["😅","🥲","😎","😎"]

function emoji(element) {
   return element === "😎";
}

var con = img.filter(emoji);

console.log(con.join(''));

//Reduce
var scores = [1, 3, 4, 6, 2, 0];
var totalScore = 0;

for (var a = 0; a < scores.length; a++) {
  totalScore += scores[a];
}

console.log(totalScore);

// Calculate total score using for loop
var scores = [1, 3, 4, 6, 2, 0];
var totalScore = 0;

scores.forEach((element) => {
  totalScore += element;
});

console.log(totalScore);

// Reduce
var scores = [1, 3, 4, 6, 2, 0];

function callback(carry, nextElement) {
  console.log(carry, nextElement);
  return carry + nextElement;
}

var output = scores.reduce(callback);
console.log("Answer", output);

Array.prototype.vishnu = function () {
  console.log(this);
};

console.log(Array.prototype);

var data = ["My fn", "Prototype"];
data.vishnu();

//indexOf

var scores = [1, 3, 4, 6, 2, 0];

var element = 4

for(let a = 0; a < scores.length; a++) {
    if(element[a]=== 4) {
        return element;
    }
}
console.log(element)