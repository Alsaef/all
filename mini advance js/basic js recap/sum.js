// let sum=0;
// for (let i = 1; i <= 5; i++) {
//   sum=sum+i;
//   console.log(sum)
    
// }

function sum(i) {
  if (i==1) {
    return 1;
  }
   return i+sum(i-1);   
  //  recartion
}
let add=sum(5);
console.log(add);