function add(a, b, ...c) {

    console.log(c);
    let sum = a + b;

    for(let x = 0; x < c.length;x++) {
        sum += c[x];
    }
    return sum;
}
console.log(add(10,20,30,40,50,60))