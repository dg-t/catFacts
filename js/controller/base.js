// DOM elements
const loadFacts = document.getElementById('loadFacts');
const showFacts = document.querySelector('.showFacts')
const factDetails = document.querySelector('.factDetails');
const btnPaginationContainer = document.querySelector('.btnPaginationContainer');

// Global Variable
let allCatFacts;
// Base API url with proxy
const baseUrlProxy = 'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com';