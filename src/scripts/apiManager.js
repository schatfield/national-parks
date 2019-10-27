// / This is a variable storing a defined function (const searchReipes).
// this is where the searchRecipes function is being defined. it is called on the event manager.js document
// searchInput is a parameter (highlight it and have a look!)
// whatever a user types into the search bar will be the arugment that's passed in to searchInput passed 
// the fetch method is connecting (making a GET request) to the api URL
// it's using template literal for the api url and the API key and the whatever the search input from the user was (e.g. "pasta")
// the whole template literal statement in the fetch method is known as an "endpoint" or the entire URL.
// the fetch moethod is creating a "promise" of a return
// the .then handles the return


const searchParks = (searchInput) => fetch(`${apiBaseUrl}${searchInput}`).then(response => response.json())

// const searchRecipes = (searchInput) => fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`)
// .then(response => response.json())

// This is another way to write what Jisie wrote above in a syntax that may be more familiar:
// const searchRecipes = (searchInput) => { 
//     return fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`).then(response => response.json());
// }
