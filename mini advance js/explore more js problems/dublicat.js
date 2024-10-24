const studentName=["abul","babul","kabul","cabul",'habul',"babul","abul","kabul","cabul"];
let index=studentName.indexOf("babul");
console.log(index)

function remove(names) {
    const unic=[];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unic.includes(element)===false) {
            unic.push(element)
        }
    }
    return unic;
}
const unicName = remove(studentName);
console.log(unicName);