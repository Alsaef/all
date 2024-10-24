/* const name="i'm ratul";
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name[7]);
console.log(name[8]); */

function reversStr(text) {
    let revers="";
    for (let i = text.length-1; i >= 0; i--) {
        const element = text[i];
    revers=revers+element;
        
    }
   return revers;
}

let myStr="i'm ratul";
let add= reversStr(myStr);
console.log(add)