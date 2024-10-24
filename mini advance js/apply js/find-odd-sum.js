function getSum(numbers) {
    let sum= 0;
   for(let num=0; num<numbers.length; num++){
    let index=num;
    let countArray=numbers[index];
      sum= sum + countArray;
      console.log(countArray,index)
   }
   return sum;
}
var array=[20,34,60,80,90,59];
var count=getSum(array);
console.log(count)
