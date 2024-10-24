console.log("event.js");
// option 2 importent
function makeBlack() {
    document.body.style.backgroundColor="black";
    document.getElementById("dom").style.color="white";
}

// option 3
let makeBlueBtn= document.getElementById("blue");
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
   document.body.style.backgroundColor="blue";
   document.getElementById("dom").style.color="white";
}

// option 3 another

let makePurplebtn=document.getElementById("purple");
makePurplebtn.onclick= function makePurple() {
    document.body.style.backgroundColor="purple";
    document.getElementById("dom").style.color="white";
}
// option 4

const makePinkBtn=document.getElementById("pink");
makePinkBtn.addEventListener("click", makePink)
function makePink() {
 document.body.style.backgroundColor="pink";
 document.getElementById("dom").style.color="white"
}
// option 4

const makeGrayBtn=document.getElementById("gray");
makeGrayBtn.addEventListener("click", function makeGray() {
    document.body.style.backgroundColor="gray";
    document.getElementById("dom").style.color="white";
});

// option 4 final
document.getElementById("orange").addEventListener("click",function () {
    document.body.style.backgroundColor="orange";
    document.getElementById("dom").style.color="white";
})