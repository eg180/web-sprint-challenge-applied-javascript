// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // guts parent 
    const headerr = document.createElement('header');
    // end of guts parent

    const spanDate = document.createElement('span');
    spanDate.classList.add('date');
    spanDate.textContent = 'March 28, 2020';
    headerr.appendChild(spanDate);
    
    const h1Title = document.createElement('h1');
    h1Title.textContent = 'Lambda Times';
    headerr.appendChild(h1Title);

    spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');
    spanTemp.textContent = '98°';
    headerr.appendChild(spanTemp);

    // entry point 
    headerContainer = document.querySelector('.header-container');

    // append our div to the entry point
    headerContainer.appendChild(headerr);


};

Header();