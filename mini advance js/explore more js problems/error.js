function error(num1,num2) {
  /*   if (typeof num2=="number") {
        return"curract";
    }
    else{
        return"pleace enter number";
    } */

    if (typeof num1 !=="number"|| typeof num2 !=="number") {
        return "enter number"
    }
    return num1+num2;
}
const add=error(2,3);
console.log(add)