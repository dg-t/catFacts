// Display pagination button
const displayPaginationBtn = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if (page === 1 && pages > 1) {
        button = renderPaginationBtn(page, 'next');
    } else if (page < pages) {
        button = `
        ${renderPaginationBtn(page, 'prev')}
        ${renderPaginationBtn(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        button = renderPaginationBtn(page, 'prev');
    }

    btnPaginationContainer.insertAdjacentHTML('beforeend', button);
};

// Create DOM element to display pagination button
const renderPaginationBtn = (page, type) => ` 
        <button class="btnPagination" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <span>Go to page ${type === 'prev' ? page - 1 : page + 1}</span>
        </button>
   `;