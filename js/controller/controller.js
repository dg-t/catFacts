// Main Button to load all facts
loadFacts.addEventListener('click', e => {
    clearResults();
    getCatFacts();
});

// Pagination Event
btnPaginationContainer.addEventListener('click', e => {
    const btn = e.target.closest('.btnPagination');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        clearResults();
        displayAllFacts(allCatFacts, goToPage)
    }
})

// DisplayFactDetails Events
if (displayFactDetails) {
    ['hashchange', 'load'].forEach(event => window.addEventListener(event, displayFactDetails));
}

// Clear results for all facts and pagination btn
const clearResults = () => {
    showFacts.innerHTML = '';
    btnPaginationContainer.innerHTML = '';
};

// Clear results for fact details
const clearFact = () => {
    factDetails.innerHTML = '';
};