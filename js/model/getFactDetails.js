// Fact Class Constructor
class Fact {
    constructor(id) {
        this.id = id;
    }
    getFact = async() => {
        try {
            const response = await fetch(`${baseUrlProxy}/facts/`);
            const result = await response.json();
            let factResults = result.all;

            for (let i = 0; i < factResults.length; i++) {
                const currentFact = factResults[i];

                if (currentFact._id == this.id) {
                    this.textFact = currentFact.text;
                    this.user = `${currentFact.user.name.first} ${currentFact.user.name.last}`
                    this.votes = currentFact.upvotes;
                }
            }

        } catch (error) {
            alert('Something went wrong :(');
        }
    }
}