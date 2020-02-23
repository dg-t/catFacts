// Get Cat facts
const getCatFacts = async() => {
    try {
        const response = await fetch(`${baseUrlProxy}/facts`);
        const result = await response.json();
        allCatFacts = result.all;

        displayAllFacts(allCatFacts)

    } catch (err) {
        alert('Something went wrong :(');
    }
}