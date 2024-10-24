function postData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => singleDataPost(data))
}


function singleDataPost(dataLoad) {
    const postContainer=document.getElementById("post-container");
    postContainer.classList.add("post")
   for (const post of dataLoad) {
    console.log(post)
    const div= document.createElement("div")
    div.innerHTML=`
     <h4>user- ${post.userId}</h4>
     <h5>post: Title ${post.title}</h5>
     <p>post discription ${post.body}</p>
    `
    postContainer.appendChild(div)
   }
}
postData()