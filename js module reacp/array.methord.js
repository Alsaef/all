const shop = [
    { name: "laptop", price: 40000 },
    { name: "mobile", price: 20000 },
    { name: "watch", price: 1000 },
    { name: "bag", price: 1000 }
];

const item=shop.map(product => product.name);

// console.log(item);

const productPrice=shop.map(product => product.price);
// console.log(productPrice)

/* shop.forEach(product => {
   console.log(product.price)
}); */

// filtter

const chip=shop.filter(product =>product.price <=5000)
console.log(chip)
// find
const find=shop.find(product =>product.price <=5000)
console.log(find)