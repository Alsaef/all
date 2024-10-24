function oddNumer(number) {
    let oddNumber=[];
   for(let i=0; i<number.length; i++) {
    let index=i;
    let arrayCount=number[index];
    if(arrayCount%2!==0){
        console.log(arrayCount,index);
        oddNumber.push(arrayCount);
    }
   }
   return oddNumber;
}
var array=[44,60,55,77,70,25];
const odd= oddNumer(array);
console.log(odd);