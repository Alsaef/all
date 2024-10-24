// let factorial=1;
// for(let i=5; i>=1;i--){
//  factorial=factorial*i;
//  console.log(i,factorial);
// }
// console.log(factorial);

// let factorial=1;
// for(let i=1; i<=5;i++){
//  factorial=factorial*i;
//  console.log(i,factorial);
// }
// console.log(factorial);


function factorial(i) {
    if (i==1) {
     return 1;       
    }
    return i*factorial(i-1);
}
let add= factorial(5);
console.log(add);