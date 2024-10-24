// function array sum

/* 

function sumArray(number) {
    let sum=0;
    for(num=0; num<number.length; num++){
        var index=num;
        var arrayCount=number[index];
        sum=sum+arrayCount;
        console.log(index,arrayCount,sum);
    }
   return sum;
}
let array=[22,44,55,67,88,90,99]
var add = sumArray(array);
console.log(add); 

*/

// function odd number found

function oddNumber(numbers) {
    let oddNumCount=[];
    for(num=0; num<numbers.length; num++ ){

        let index=num;
        let element=numbers[index];
        if (element%2!==0) {
            console.log(index,element);
            oddNumCount.push(element)
         }
         
    }
  return oddNumCount;
}

let array=[55,33,66,77,88,99,100];
let add=oddNumber(array);
console.log(add);