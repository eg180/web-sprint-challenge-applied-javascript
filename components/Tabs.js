// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const topics_promise = axios.get('https://lambda-times-api.herokuapp.com/topics')
.then (res => {
    // mess with data here
    const topicsParentDiv = document.querySelector('.topics');


    let topicsArray = res.data.topics;
    topicsArray.forEach((element, indx) => {
        let tabTopic = document.createElement('div');
        tabTopic.classList.add('tab');
        tabTopic.textContent = res.data.topics[indx];
        // appending all the above to the Parent Div
        topicsParentDiv.appendChild(tabTopic);


    
    // TROUBLE-SHOOTING
    // let topicsArray = res.data.topics;
    // topicsArray.forEach(element => {
    //     console.log(element);
    // });
        
    })
}) 
.catch(err => {
    return err;
});


