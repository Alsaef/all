function comment() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => webDistlay(data))
}
function webDistlay(commentData) {
    const mainContainer=document.getElementById("main");
   for (const userData of commentData) {
       console.log(userData)
       const div=document.createElement("div")
       div.innerHTML=`
       <h2>name: ${userData.name} </h2>
       <h3>post id: ${userData.postId} </h3>
       <h4>user comment: ${userData.body}</h4>
       <h4>user email: ${userData.email}</h4>
       `;
       mainContainer.appendChild(div)
   }

}

comment()