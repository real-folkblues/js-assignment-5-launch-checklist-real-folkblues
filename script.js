window.addEventListener("load", function () {

    function init() {
        let numQuestions = document.getElementsByName("fuelLevel" + "cargoMass");
    }
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass === "") {
            alert("All fields are required!");
            event.preventDefault();
        }

        let validNumber = true;
        if (numQuestions.value === isNan) {
            console.log("Please enter a number.");
            alert("Please enter a number");
            validNumber = false;
            event.preventDefault();
        }


    });

    let listedPlanets = myFetch();
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});