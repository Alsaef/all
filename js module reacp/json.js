// JSON 
const student={
    name:"ratul",
    age:20,
    dep:"CST",
    skill:["html","css","javascript","bootstrap"]
}

const studentJson=JSON.stringify(student)
const studentJsonPars=JSON.parse(studentJson)
console.log(student)
console.log(studentJson)
console.log(studentJsonPars)

//  fetch()

fetch("url")
.then(res => res.JSON())
.then(data => console.log(data))

// for

const numbers=[12,33,4,55];

numbers.forEach(number => {
    console.log(number)
});

// for of on array like object

// loop for in on object