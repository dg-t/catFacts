// Create DOM element to display pagination button
const createButton = (page, type) => ` 
        <button class="btnPagination" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <span>Go to page ${type === 'prev' ? page - 1 : page + 1}</span>
        </button>
   `;

// Display pagination button
const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if (page === 1 && pages > 1) {
        button = createButton(page, 'next');
    } else if (page < pages) {
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        button = createButton(page, 'prev');
    }

    btnPaginationContainer.insertAdjacentHTML('beforeend', button);
};

// Pagination event
btnPaginationContainer.addEventListener('click', e => {
    const btn = e.target.closest('.btnPagination');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        clearResults();
        displayCatFacts(allCatFacts, goToPage)
    }
})