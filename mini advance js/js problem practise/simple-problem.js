function maxInArray(number) {
    let lerges=number[0];
  for(let i=0; i<number.length;i++){
    let numbers=number[i];
     if (numbers>lerges) {
        lerges=numbers
     }
  }
  return lerges;
}

let height=[157,190,120,165,137];
let add= maxInArray(height);
console.log("tolest person ",add);