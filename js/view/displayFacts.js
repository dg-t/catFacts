// Create DOM element to display Cat Facts
// Set pagination to display no more then 10 facts per page
const displayCatFacts = (allFacts, page = 1, resPerPage = 10) => {

    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    allCatFacts.slice(start, end).forEach(fact => {
        const list = document.createElement("li");
        const anchor = document.createElement("a");

        anchor.id = fact._id;
        anchor.href = '#/' + fact._id;
        anchor.textContent = fact.text;

        list.appendChild(anchor);
        showFacts.appendChild(list);
        showFacts.appendChild(document.createElement("br"));
        showFacts.appendChild(document.createElement("hr"));

        return allFacts;
    })

    renderButtons(page, allFacts.length, resPerPage);

}

// Get fact by ID and display details
const displayFactDetails = async() => {

    const factId = window.location.hash.replace('#/', '');

    if (factId) {
        clearFact();
        const newFact = new Fact(factId);

        try {
            await newFact.getFact();
            renderFactDetails(newFact)

        } catch (err) {
            alert('Error Getting Facts')
        }
    }
}

// Display fact details
const renderFactDetails = fact => {
    const markup = `
    <p><span class="text-dark">Added by:</span> ${fact.user} </p>
    <p><span class="text-dark">Votes:</span> ${fact.votes} </p>
    <p><span class="text-dark">Fact:</span><br /> ${fact.textFact} </p>
    `
    factDetails.insertAdjacentHTML('afterbegin', markup);
}

// Add multiple events to displayFactDetails
['hashchange', 'load'].forEach(event => window.addEventListener(event, displayFactDetails));

// Button to load all facts
loadFacts.addEventListener('click', e => {
    clearResults();
    getCatFacts();
});