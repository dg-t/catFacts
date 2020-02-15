// DOM elements
const loadFacts = document.getElementById('loadFacts');
const showFacts = document.querySelector('.showFacts')
const factDetails = document.querySelector('.factDetails');
const btnPaginationContainer = document.querySelector('.btnPaginationContainer');

// Global Variable
let allCatFacts;
// API url
const baseUrlProxy = 'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com';
const baseURL = 'https://cat-fact.herokuapp.com';


// Clear results
const clearResults = () => {
    showFacts.innerHTML = '';
    btnPaginationContainer.innerHTML = '';
};

// Clear results
const clearFact = () => {
    factDetails.innerHTML = '';
};