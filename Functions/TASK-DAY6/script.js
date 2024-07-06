const xhr = new XMLHttpRequest();
const url = 'https://restcountries.com/v3.1/all';


//Get all the countries from Asia continent /region using Filter method
// xhr.onreadystatechange = function () {
//         const data = JSON.parse(xhr.response);

//         const asianCountries = data.filter(country => country.region === 'Asia');

//         asianCountries.forEach(country => console.log("Countries from Asia continent/region:  " + country.name.common));
// };
// xhr.open("GET", url, true);
// xhr.send();


//Get all the countries with a population of less than 2 lakhs using Filter method

// xhr.onreadystatechange = function() {
//     const data = JSON.parse(xhr.responseText);
//     if(xhr.readyState === 4 && xhr.status === 200) {
//     const populationOfCountries = data.filter(country => country.population < 200000);
//     populationOfCountries.forEach(country => console.log( "Countries population: " + country.population))
//     }
// } 
// xhr.open("GET", url, true);
// xhr.send();

//Print the following details name, capital, flag, using forEach method
// xhr.onreadystatechange = function() {
//       const data = JSON.parse(xhr.responseText);
//       if(xhr.readyState === 4 && xhr.status === 200) {
//         const countryDetails = data.forEach(country => 
//         console.log(`Name: ${country.name.common} ||| Capital: ${country.capital} ||| Flag: ${country.flag}`))
//       }
// }
// xhr.open("GET", url,true);
// xhr.send();

// //Print the total population of countries using reduce method
//     xhr.onreadystatechange = function() {
//     const data = JSON.parse(xhr.responseText);
//     if(xhr.readyState === 4 && xhr.status === 200) {
//          const population_of_countries = data.reduce((total, country)=> total += country.population, 0)
//          console.log(`Total Population: ${population_of_countries}`)

//     }
// }
//  xhr.open("GET", url,true);
//  xhr.send();

//Print the country that uses US dollars as currency.
xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const usdCountries = data.filter(country => {
            return country.currencies && country.currencies.USD;
        });

        usdCountries.forEach(country => console.log(country.name.common));
    }
};

xhr.send();
