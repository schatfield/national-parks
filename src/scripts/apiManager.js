// variable storing your API baseURL to be used in your fetch call below 

const apiBaseUrl = "http://localhost:8088/parks"


// / This is a variable storing a defined function (const searchParks).
// this is where the searchParks function is being defined. it is called on the event manager.js document
// searchInput is a parameter (highlight it and have a look!) it will make whatever the user types in to the inptu field the argument that's passed into the function
// whatever a user types into the search bar will be the arugment that's passed in to searchInput passed 
// the fetch method is connecting (making a GET request) to the api URL
// it's using template literal for the api url and the API key and the whatever the search input from the user was (e.g. "Yellowstone national park")
// the whole template literal statement in the fetch method is known as an "endpoint" or the entire URL.
// the fetch moethod is creating a "promise" of a return
// the .then handles the return

const searchParks = (searchInput) => fetch(`${apiBaseUrl}?name=${searchInput}`).then(response => response.json())





