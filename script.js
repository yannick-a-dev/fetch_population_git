const searchInput = document.getElementById('search');
const results = document.getElementById('results');

let countries;
let searchTerm = ''

//API REQUEST
const fetchCountries = async() => {
    countries = await fetch('https://restcountries.com/v2/all?fields=name,capital,currencies'
    ).then(res => res.json())
    console.log(countries)
  
};

const showCountries = async() => {
    await fetchCountries();

    results.innerHTML = (

        countries

         .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()
         ))
         .map(country =>(
         `
         <li class="country-item">
           <h3 class="country-name">${country.name}</h3>
           <h3 class="country-capital">${country.capital}</h3>
           <h3 class="country-currencies">${country.currencies}</h3>
         </li>
         
         `
        )).join('') // en mettant .join('') nous donne un resultat sans virgule
    );

};

showCountries();

//INPUT SETUP 
//target.value pour pointer tout ce qui est tapé dans un input
searchInput.addEventListener('input', (e) => {searchTerm = e.target.value;
    showCountries();
});
