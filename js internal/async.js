function doSumthing() {
    console.log("third")
}
console.log("first")
console.log("second")
/* setTimeout(()=>{
    console.log("third")
},5000) */

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
console.log("fourth")
console.log("fiveth")