// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// *** Axios Get *** //

axios.get('https://lambda-times-backend.herokuapp.com/topics')

// *** Pos *** //

.then(function(response){
console.log(response);

createTab(response.data.topics);
})

// *** Neg *** //

.catch(function(error){
console.log(error);
})

// *** Function/create/itterate/content/append *** //

function createTab(topicsArray){

    const topics = document.querySelector('.topics')

    topicsArray.forEach((topic) => {
    const tab = document.createElement('div');

    tab.classList.add('tab');
    tab.textContent = topic;
    
    topics.appendChild(tab);
    
    });
    }

