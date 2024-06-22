//Using Object
var data = {

    nama : "Thaitheya"
}

var dataCopy = {...data};

dataCopy.age = 24;
console.log(data);
console.log(dataCopy);

//Using Array

var data = [1,2,3];

var dataCopy = [...data];

dataCopy.push(4);

console.log(data);
console.log(dataCopy);