// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
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
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

arcticlePromise = axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    // call the function created below HERE
    // const bootstrapArray = res.data.articles.bootstrap;
    // console.log(bootstrapArray[0].headline);

    const bootstrapArray = res.data.articles.bootstrap;
    // const jsHeadlinesArray = res.data.articles.javascript;
    // const techHeadlinesArray = res.data.articles.technology;
    // const jqueryArray = res.data.articles.jquery;
    // const nodejsArray = res.data.articles.node;

    // resArray = [bootstrapArray, jsHeadlinesArray, techHeadlinesArray, jqueryArray, nodejsArray];

    // resArray.forEach(obj => {
    //     let singleCardDiv = cardCreatorFromRes(obj);
    //     cardsContainerParent.appendChild(singleCardDiv);
    let singleCardDiv = cardCreatorFromRes(bootstrapArray);
    cardsContainerParent.appendChild(singleCardDiv);
    })

    // const authorCard = cardCreatorFromRes(res);
    // cardsContainerParent.append(authorCard);
// })
.catch(err => {
    // handle error
});


// WHERE YOU WILL APPEND EVERYTHING ONCE ALL THE CODE RUNS
const cardsContainerParent = document.querySelector('cards-container');
// DO NOT TOUCH



function cardCreatorFromRes(resObject) {


    

    resObject.forEach((element, indx) => {
        let singleCardDiv = document.createElement('div');
        singleCardDiv.classList.add('card');

        let singleCardHeadline = document.createElement('div');
        singleCardHeadline.textContent = resObject[indx].headline;
        singleCardHeadline.classList.add('headline');

        singleCardDiv.appendChild(singleCardHeadline);


        let authorDiv = document.createElement('div');
        authorDiv.classList.add('author');

        singleCardDiv.appendChild(authorDiv);



        let imgContainterDiv = document.createElement('div');
        imgContainterDiv.classList.add('img-container');
        authorDiv.appendChild(imgContainterDiv);

    
        const imgOfAuthor = document.createElement('img');
        imgOfAuthor.src = resObject[indx].authorPhoto;
        imgContainterDiv.appendChild(imgOfAuthor);


        const authorNameSpan = document.createElement('span');
        authorNameSpan.textContent = resObject[indx].authorName;
        authorDiv.appendChild(authorNameSpan);

        // append it all to parent div

        
    }); return singleCardDiv;
};