let first=3;
let second=6;
console.log(first,second);

// this is worng trick
/* first=second;
second=first; */

//this is right
/* const temp=first;
first=second;
second=temp; */
// second trick Destructuring 
[first,second]=[second,first];
console.log(first,second);