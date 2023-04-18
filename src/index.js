import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

async function onSearchInput(event) {
    const searchQuery = event.target.value.trim();

if (!searchQuery) {
    clearCountryInfo();
    clearCountryList();
    return;
}

try {
    const countries = await fetchCountries(searchQuery);

    if (countries.length === 1) {
        renderCountryInfo(countries[0]);
        clearCountryList();
    } else if (countries.length > 1 && countries.length <= 10) {
        renderCountryList(countries);
        clearCountryInfo();
    } else if (countries.length > 10) {
        showNotification('Too many matches found. Please enter a more specific query.');
        clearCountryInfo();
        clearCountryList();
    } else {
        showNotification('Country not found.');
        clearCountryInfo();
        clearCountryList();
    }
} catch (error) {
    showNotification('Error fetching data.');
    clearCountryInfo();
    clearCountryList();
}
}

function renderCountryList(countries) {
    countryList.innerHTML = '';
    countries.forEach(country => {
    const listItem = document.createElement('li');
    listItem.textContent = country.name.official;
    listItem.addEventListener('click', () => {
        renderCountryInfo(country);
        clearCountryList();
    });
    countryList.appendChild(listItem);
});
}

function renderCountryInfo(country) {
const html = `
    <h2>${country.name.official}</h2>
    <img src="${country.flags.svg}" alt="Flag of ${country.name.official}" width="300">
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Languages:</strong> ${country.languages.map(lang => lang.name).join(', ')}</p>
`;
    countryInfo.innerHTML = html;
}

function clearCountryList() {
    countryList.innerHTML = '';
}

function clearCountryInfo() {
    countryInfo.innerHTML = '';
}
