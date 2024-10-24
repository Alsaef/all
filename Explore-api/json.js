const user={id:1,name:"amir",job:"actor"};
const stringfy=JSON.stringify(user)
// console.log(user)
// console.log(stringfy)
// javaScript Object notation => (json)

const shop={
    owner:"km",
    address:{
       city:"dhaka",
       company:"samsung",
       home:"narsingdi"
    },
    products:["laptop","phone","head phone"],
    clind:400,
    isOpen:true
}
const json=JSON.stringify(shop)
const jsonPars=JSON.parse(json)
// console.log(shop)
console.log(json)
console.log(jsonPars)