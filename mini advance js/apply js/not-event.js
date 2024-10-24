function oddNumbers(numbers) {
    oddnum=[]
    for(num=0; num<numbers.length; num++){
        let index=num;
        let element=numbers[index];
        if (element%2!==0) {
            
        console.log(index,element);
           oddnum.push(element);
        }
    }
    return oddnum;
}
var array =[33,34,55,79,20,56];
var add= oddNumbers(array);
console.log(add);