class Movie {
    //Created a constructor for the following properties such as title, studio and rating...
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        //If the rating is given the given data will be printed 
        //If there is no rating given the default will be "PG" 
        this.rating = rating || "PG";
    }    
} 

//Created a function to filter out only "PG" rated movies
function getPG(movies) {
    const pgMovies = [];
    for(let i = 0; i < movies.length; i++) {
        if(movies[i].rating == "PG") {
            pgMovies.push(movies[i]);
        }
    }
    return pgMovies;
}
const movie = [
    new Movie("The BatMan","WB","PG"),
    new Movie("End Game","Marvel",""),
    new Movie("Infinity War","Marvel","PG"),
    //created a new instance using the given input.
    new Movie("Casino Royale","Eon Productions","PG13")
];
const needPG = getPG(movie)
console.log(needPG)