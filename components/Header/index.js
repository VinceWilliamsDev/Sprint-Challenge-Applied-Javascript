// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerWrapper = document.createElement("div")
    const date = document.createElement("span")
    const header = document.createElement("h1")
    const temp = document.createElement("span")

    headerWrapper.className = "header"
    date.className = "date"
    temp.className = "temp"

    date.textContent = "MARCH 28, 2019"
    header.textContent = "Lambda Times"
    temp.textContent = "98°"

    headerWrapper.appendChild(date)
    headerWrapper.appendChild(header)
    headerWrapper.appendChild(temp)
    
    return headerWrapper
}

headerContainer = document.querySelector(".header-container")

headerContainer.appendChild(Header())

