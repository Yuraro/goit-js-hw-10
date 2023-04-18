const BASE_URL = 'https://restcountries.com/v3.1/name/';
const fields = 'fields=name,capital,population,flag,languages';

function fetchCountries(name) {
    return fetch('${BASE_URL}${name}?${fields}')
.then(responce => responce.json())
}

export { fetchCountries };

