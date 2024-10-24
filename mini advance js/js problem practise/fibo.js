/* let sum=0;
for (let i = 0; i <=7; i++) {
    sum=sum+i
 console.log(i,sum);
} */

let fibo=[0,1];
for (let i = 2; i <=12; i++) {
   fibo[i]=fibo[i-1]+fibo[i-2];
    
}
console.log(fibo);
