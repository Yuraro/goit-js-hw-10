import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function onSearchInput(event) {
    const searchQuery = event.target.value.trim();

if (!searchQuery) {
    clearCountryInfo();
    clearCountryList();
    return;
}

fetchCountries(searchQuery)
    .then(countries => {
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
    })
    .catch(error => {
        if (error && error.response && error.response.status === 404) {
        showNotification('Country not found.');
        }
    clearCountryInfo();
    clearCountryList();
        });
};

function renderCountryList(countries) {
    countryList.innerHTML = `
    <ul>
    ${countries.map(country => `
        <li>
            <img src="${country.flags.svg}" alt="${country.name.official} flag">
            <span>${country.name.official}</span>
        </li>
    `).join('')}
    </ul>
`;
};

function renderCountryInfo(country) {
    countryInfo.innerHTML = `
    <h2>${country.name.official}</h2>
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <img src="${country.flags.svg}" alt="${country.name.official} flag">
    <h3>Languages:</h3>
    <div>
        <ul>
        ${Object.values(country.languages).map(language => `
            <li>${language}</li>
        `).join('')}
        </ul>
    </div>
</div>
`;
};
