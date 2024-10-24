/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)) */

const Url = 'https://jsonplaceholder.typicode.com/todos/1';
    // fetch(Url)
    //     .then(response => response.json())
    //     .then(json => console.log(json))  

function loadData() {
    fetch(Url)
    .then(response => response.json())
    .then(json => console.log(json))  
}