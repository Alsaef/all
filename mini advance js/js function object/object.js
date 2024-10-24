var student = {
    name: "ratul",
    roll: 67740,
    depertment: "cst",
    skill: "html css javascript"
}

var myMobile = {
    brand:"realmi",
    model:"c21Y",
    price:12000,
    storage:"32gb", 
}
myMobile.price=15000;
myMobile.storage="64gb"
console.log(myMobile);
console.log(myMobile.brand);
var popertyKey=Object.keys(myMobile);
var popertyValue=Object.values(myMobile)
console.log(popertyKey)
console.log(popertyValue)
