function userData2() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>  displayUi2(data) )
}

function displayUi2(dataload){
   const ul=  document.getElementById("user-list");
   for (const user of dataload) {
    const li=document.createElement("li");
    li.innerText=user.name;
    ul.appendChild(li)
   }
}

/* 
1. call api ;
2.lode single data for of looping in my web site ;

*/