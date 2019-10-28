// variable holding function definition, also known as a function definition
// the word "event" below is a parameter- it signifies that this function is going to handle what happens when an event occurs
// this is an event function- it is literally handling an event and will execute once the specific event action happens. in this case below, it is looking for a "click" event action by the user to occur


const handleParksSearch = event => {

    console.log("Event is a-happenin'", event)

    const inputField = document.querySelector("input")

    console.log("USER INPUT GOES HERE", inputField.value)

    inputField.value = inputField.value.split(' ').join("+")

    // var replaced = str.split(' ').join('+');

    // the function searchParks is being called below. it was defined on the apiManager.js document.
    // the parameter inputField is the declared variable grabbing a reference to the DOM above
    // .value is a property available to use to bring back the value of what it is attached to



    searchParks(inputField.value)
        .then(parksApiResponse => {
            console.log(parksApiResponse)
            displayParkHtml(parksApiResponse)
            inputField.value = ""

        })
}

// Function definition
// this is a function assigned to a variable. you're giving it name by way of a variable so you can call it later 
// when the search button is clicked, it will execute the handlesearch function defined above. when someone clicks on searchButton, the handleSearch function will do all the things
// The way handleSearch is used below, as the second argument on the event listener, is why the function definition above ("const handleSearch = event => {}") has an event paramete

const attachEventlistenerToParksSearchButton = () => {
    console.log("event listener attached!")
    const searchButton = document.getElementById("search-button")
    console.log(searchButton)
    searchButton.addEventListener("click",handleParksSearch)
}

    


//   // "event" above is a parameter ("const = handleSearch")
//   //handleSearch as the 2nd argument after "click" is passing the event that happens ("click") as the argument to "event"
