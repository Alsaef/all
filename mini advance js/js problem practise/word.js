function wordRevers(text) {
      let str=text.split(" ");
    let revers=[];
   for (let i = str.length -1; i >=0 ; i--) {
    const element = str[i];
    revers.push(element);
   }
   const join= revers.join(" ");
   return join; 
}

let word="i'm a good coder";
let add= wordRevers(word);
console.log(add);