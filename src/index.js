import './css/styles.css';
import { fetchCountries } from './fetch-countries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function clearCountryInfo() {
    countryInfo.innerHTML = '';
}

function clearCountryList() {
    countryList.innerHTML = '';
}

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
                Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
                clearCountryInfo();
                clearCountryList();
            } else {
                Notiflix.Notify.failure('Oops, there is no country with that name');
                clearCountryInfo();
                clearCountryList();
            }
        })
        .catch(error => {
            if (error.response.status === '404') {
                Notiflix.Notify.failure('Oops, there is no country with that name');
            }
            console.log(error);
            clearCountryInfo();
            clearCountryList();
        });
};

function renderCountryList(countries) {
    const list = countries
        .map(
            c =>
                `<li class="country--item">
                    <img src="${c.flags.svg}" alt="Country flag"
                        width="40", height="30">
                    <span class="country-list--name">${c.name.official}</span>
                </li>`
        )
        .join('');
    countryList.insertAdjacentHTML('beforeend', list);
}

function renderCountryInfo(country) {
    return (countryInfo.innerHTML = `
    <h2>${country.name.official}</h2>
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <img src="${country.flags.svg}" alt="${country.name.official} flag">
    <h3>Languages:</h3>
    <div>
        <ul>
        ${Object.values(country.languages)
            .map(language => `
            <li>${language}</li>
        `).join('')}
        </ul>
    </div>
`);
};
