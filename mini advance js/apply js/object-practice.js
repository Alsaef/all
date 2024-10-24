/* var list={
    name:"Ratul",
    age:20,
    skillProfeson:"Developer And Programmer",
    home:"Narsingdi"
}
var keyName="age"
var keys=list.age;
var Change=list.age=21;
console.log(list,keyName, keys);
console.log("change:",Change); */

var list={
    name:"Ratul",
    age:20,
    skillProfeson:"Developer And Programmer",
    home:"Narsingdi"
}

var keys=Object.keys(list);
// var value=Object.values(list);
console.log(keys);
console.log(list)
// for(var items=0; items<keys.length; items++){
//     var item=keys[items];
//     var popertValue=list[item]
//     console.log(item,popertValue)
// }

// for (var property in list) {
//       var propertyValue = list[property];
//       console.log(property, propertyValue);
//   }




// var shoppingCard={
//     pen:3,
//     bread:4,
//     books:6,
//     keybord:7,
//     shose:2,
//     watch:2
// }
// const keys=Object.keys(shoppingCard);
// const values=Object.values(shoppingCard);
// console.log(keys);
// console.log(values);

// for(var items=0; items<keys.length; items++){
//     var item=keys[items];
//     var popertValue=shoppingCard[item]
//     console.log(item,popertValue)
// }