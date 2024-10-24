const country="bangladesh";
const age=55;
const indpendent=true;
const student={id:55,class:10,age:18}
const friend=["nahid","mijan","ataul","tawsif"];
const friendAge=[19,20,34,55];
function number(num,num2) {
    return num,num2;
}
console.log(typeof country);
console.log(typeof student);
console.log(Array.isArray(friend));
console.log(typeof number);
// ---------array include------------

console.log(friend.includes("mijan"));

if (friendAge.indexOf(56) !== -1) {
    console.log(true);
}
else{
    console.log(false);
}
// concat 
// concate join array
const allfriends= friendAge.concat(friend);
console.log(allfriends)