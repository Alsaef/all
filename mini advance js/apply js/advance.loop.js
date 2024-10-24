/* function factorial(numbers) {
    let sum=1
    for(let i=numbers;i<=7;i++){
        sum=sum*i;
        console.log(i,sum);
    }
    return sum;
}
let perameter=1;
let add=factorial(perameter);
console.log(add); */

//revers 

function revers(numbers) {
    let result=1;
    for(let i=numbers; i>=1; i--){
       let factorial= result=result*i;
        console.log(i,factorial);
    }
    return "data complet"
}

let perameter=7;
let add=revers(perameter);
console.log(add);