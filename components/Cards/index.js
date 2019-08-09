// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// *** Axios Get *** //

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( data => {
console.log('Working', data);

const articles = data.data.articles;
const Cards = document.querySelector('.cards-container');
console.log(articles);

// *** Bootstrap *** //

articles.bootstrap.forEach(card => {
    Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
    })

// *** Javascript *** //

articles.javascript.forEach(card => {
    Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
    })

// *** Jquery *** //

articles.jquery.forEach(card => {
    Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
    })

// *** Node *** //

articles.node.forEach(card => {
    Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
    })

// *** Tech *** //

articles.technology.forEach(card => {
    Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));
    })
    })

// *** Neg *** //



// *** Card Creator Function *** //



// *** Const's *** //



// *** Class *** //



// *** Text *** //



// *** Append *** //



// *** Return *** //