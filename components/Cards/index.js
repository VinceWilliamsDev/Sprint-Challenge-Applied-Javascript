// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response)

    })
    .catch(err => console.log(err))



function articleCardMaker(article) {
    // create elements
    const articleWrapper = document.createElement("div")
    const headline = document.createElement("div")
    const authorWrapper = document.createElement("div")
    const photoFrame = document.createElement("div")
    const photo = document.createElement("img")
    const author = document.createElement("span")

    // add class names
    articleWrapper.className = "card"
    headline.className = "headline"
    authorWrapper.className = "author"
    photoFrame.className = "img-container"

    // add text content
    headline.textContent = `${article.headline}`
    author.textContent =`${article.authorName}`

    // add img url
    photo.src = `${article.authorPhoto}`

    // nest the elements
    articleWrapper.appendChild(headline)
    articleWrapper.appendChild(authorWrapper)
    authorWrapper.appendChild(photoFrame)
    photoFrame.appendChild(photo)
    authorWrapper.appendChild(author)

    // append the cards to the DOM
    const cardContainer = document.querySelector(".cards-container")

    cardContainer.appendChild(articleWrapper)
}