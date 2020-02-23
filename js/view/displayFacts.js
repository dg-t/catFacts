// Display Cat Facts
// Set pagination to display no more then 10 facts per page
const displayAllFacts = (allFacts, page = 1, resPerPage = 10) => {

    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    if (allCatFacts) {
        allCatFacts.slice(start, end).forEach(fact => {
            renderAllFacts(fact)
            return allFacts;
        })
    }

    displayPaginationBtn(page, allFacts.length, resPerPage);
}

// Create DOM element to render all cat facts
const renderAllFacts = fact => {
    const markup = `
    <li>
        <a href="#/${fact._id}" id="${fact._id}" >${fact.text} </a>
        <br /> <hr /> 
    </li>
    `
    showFacts.insertAdjacentHTML('afterbegin', markup);
}