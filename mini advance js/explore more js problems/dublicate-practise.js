const studentName=["abul","babul","kabul","cabul",'habul',"babul","abul","kabul","cabul"];
function remove(names) {
    let unic=[];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unic.includes(element)===false) {
            unic.push(element);
        }
    }
    return unic;
}

let add=remove(studentName);
console.log(add);