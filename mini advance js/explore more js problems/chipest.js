const phones=[
    {name:"samsung",camera:"50px",storage:"64gb",ram:"8gb",price:18000},
    {name:"realme",camera:"40px",storage:"64gb",ram:"8gb",price:15000},
    {name:"xaomi",camera:"45px",storage:"64gb",ram:"8gb",price:16000},
    {name:"nokia",camera:"45px",storage:"64gb",ram:"4gb",price:14000},
    {name:"I Phone",camera:"45px",storage:"164gb",ram:"16gb",price:66000},
];
// console.log(phones);

function chipestPhone(phone) {
    let chipest= phone[0];
    for (let i = 0; i < phone.length; i++) {
        let index=phone[i];
       let chepesPhone = index;
        if (chepesPhone.price < chipest.price) {
          chipest=chepesPhone;
        }
        
    }
    return chipest;
}
const add= chipestPhone(phones);
console.log(add)
