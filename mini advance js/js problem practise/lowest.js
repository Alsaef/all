// lowest age

function getMin(numbers) {
    let age=numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element<age) {
          age=element
        }
        
    }
    return age;
}
let array=[20,23,21,22,19]
let add = getMin(array)
console.log(add);