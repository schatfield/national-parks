// / the variable holding the function definition (we call this function on main.js)

// Question- why is the () empty on this function?

const buildAndAppendSearchForm = () => {
    // here we are assigning a string to the variable declared below the HTML string ( const searchForm)
    const searchForm = `
        <section class="search-form">
        <h3> Search for parks: </h3>
        <input type="text" placeholder="search for parks">
        <button id = "search-button">Search</button>
        </section>
        <section class="search-results"></section>
        `

    // this console.log will show you the HTML string stored in the variable "searchForm"
    console.log("SEARCH FORM", searchForm)

    // .querySelector searches the DOM for the first "ID" called container ("#container) and assigns it to the variable named containerDiv

    const searchFormDiv = document.querySelector("#search-form")

    // the variable containerDiv is holding the reference to the DOMfor the DIV on out HTML document. .innerHTML(this is the space betwen the opening and closing div tags in this example) will be populated with the value of the searchForm variable above.

    searchFormDiv.innerHTML = searchForm
}

console.log("is this working?")


