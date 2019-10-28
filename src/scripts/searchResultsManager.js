// Each park should be diaplayed as shown in the HTML sample below:

/* <article>
    <h3>Park Name</h3>
    <p>State the park in located in</p>
</article> */

// variable buildParkHtml is holding a template literal of some HTML code
// "park" is a parameter the developer created
// <article class=${park.visited ? "visited" : "not-visited"}>

const buildParkHtml = park => `
 <article class=${park.visited ? "visited" : "not-visited"}>
  <h4>${park.name}</h4>
  <p>
    ${park.state}
  </p>
</article>
`




// const buildParkHtml = park => {

//     const parkClass = ""

//     if (park.visited) {
//         // ***this is a newly delcared variable to store the class of "visited"
//         parkClass = "visited"    
//     } else {
//         // ***this is a newly delcared variable to store the class of "visited"
//         parkClass = "not-visited"
//     }

//     return `
//         <article class=${parkClass}>
//         <h4>${park.name}</h4>
//         <p>
//         ${park.state}
//         </p>
//     </article>
//    `

// }
// ***how do you know that return in the function above? Ask yourself- what si the point of this function and what are you trying to return?





// variable displayParkHtml is holding a function that will display what comes back from the API fetch 
// nationalPark is a parameter for all the park data that comes back.
// the data that comes back will be your argument to the allRecipes parameter
// let parkResultHtml is your variable to store all the park data form the API and display it in HTML (it's the HTML template literal you have up there yay!)
// syntax description: parameter that is equal to all the recipe data that comes back from fetch.forEachMethod("park" is the parameter name created by the developer referring to a single item of the data inside the nationalPark parameter)
// allthethings.forEach(one of the things)
// let parkHtml will capture each individual html component/snippet
// let parkHTML is another newly declared variable local to your function being stored inside your .forEach ... you won't find this anywhere else before now, you are delcaring it store your function call to the buildRecipeHtml (function stored inside variable named that) which returns HTML code for each search result that came back in your API fetch. 
// Another note about buildParkHtml(recipe): the word "park" is being passed in as the argument for the buildParkeHtml function. the first time you see "recipe" in this code below is inside the .forEach method
// we are adding the HTML snippets captured by let parkHtml INTO the empty string we created inside the parkresultHtml variable


const displayParkHtml = nationalPark => {
    let parkResultHtml = ""
    console.log("the data from the API", nationalPark)
    nationalPark.forEach(park => {
        let parkHtml = buildParkHtml(park)
        parkResultHtml = parkHtml

    })

    // the variable searchResultsSection is obtaining a reference to the DOM for an element with a class of search-results 
    const searchResultsSection = document.querySelector(".search-results")
    searchResultsSection.innerHTML = parkResultHtml
}