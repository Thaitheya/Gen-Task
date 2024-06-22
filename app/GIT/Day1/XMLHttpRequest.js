const URI = ("http://127.0.0.1:5500/GIT/Day1/data.json")
const request = new XMLHttpRequest();

request.open("GET",URI);
request.send();

request.onreadystatechange = function() {
    console.log(JSON.parse(this.response));
}
    

