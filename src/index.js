import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
let name = "";

const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', handleInput, debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
    e.preventDefault();
    name = e.target.value.trim();
}

async function handleInput() {
const query = searchBox.value.trim();

    if (query.length === 0) {
    clearResults();
    return;
}

    const countries = await fetchCountries(query);

if (countries.length === 0) {
    countryList.innerHTML = '<li>No countries found</li>';
    countryInfo.innerHTML = '';
    return;
}

    const countryItems = countries.map((country) => {
    const item = document.createElement('li');
    item.textContent = country.name;
    item.addEventListener('click', () => displayCountryInfo(country));
    return item;
});

countryList.innerHTML = '';
countryItems.forEach((item) => countryList.appendChild(item));
}

function clearResults() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}

function displayCountryInfo(country) {
    const { name, capital, population, languages, flag } = country;

const info = `
    <h2>${name}</h2>
    <img src="${flag}" alt="${name} flag" width="200">
    <p><strong>Capital:</strong> ${capital}</p>
    <p><strong>Population:</strong> ${population}</p>
    <p><strong>Languages:</strong> ${languages.map((lang) => lang.name).join(', ')}</p>
`;

countryInfo.innerHTML = info;
}



