// templet string

const student={
    name:"ratul",
    age:19
} 

const nameTempleString=`my name: ${student.name} and age of: ${student.age}`
console.log(nameTempleString)

// arrow function

/* const arrow =()=>{
    // statment
} */

const isEven=(num1)=>{
   const value= num1 % 2 ===0;
    return value ;
}

//  const arrow=isEven(6);

//  console.log(arrow);

//  spreed operator

const numbers=[2,1,3,4,5,6,7];
const newNum=[...numbers];
numbers.push(99)
numbers.push(99)
numbers.push(99)

console.log(numbers,newNum)