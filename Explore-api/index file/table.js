function table() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => display(data))
}

function display(loadData) {
    const main=document.getElementById("main-section")
    main.classList.add("tabil")
    for (const dataUser of loadData) {
       console.log(dataUser)
       const div=document.createElement("div") 
       div.innerHTML=`
       <h3>user id: ${dataUser.userId} </h3>
       <h4>title: ${dataUser.title} </h4>
       `;
       main.appendChild(div)
    }
}

table()