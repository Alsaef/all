const ageDefind=[
    {name:"hablu", age:20},
    {name:"bablu", age:19},
    {name:"tablu", age:17},
    {name:"kablu", age:22},
]
function ageCount(ageNumber) {
    let defidAge=ageNumber[0];
   for (let i = 0; i < ageNumber.length; i++) {
    const element = ageNumber[i];
    // console.log(element)
    if(element.age>defidAge.age){
    defidAge=element;
    }
    
   }
   return defidAge; 
}
const add=ageCount(ageDefind);
console.log(add);