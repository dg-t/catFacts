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