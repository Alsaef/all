// let array=[14,44,55,23]
/* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
} */

/* for(const element of array){
    console.log(element);
} */

const products=[
    {id:1, name:"walton phone",price:14000},
    {id:2, name:"mak bookj air",price:114000},
    {id:3, name:"HP laptop",price:44000},
    {id:4, name:"walton laptop",price:40000},
    {id:5, name:"samsung phone",price:15000},
    {id:6, name:"realmi phone",price:13000},
]

function ourProducts(ourProducts,searching) {
    const match=[];
    for(const product of ourProducts){
        console.log(product);
        console.log(product.name.includes(searching));
        if (product.name.includes(searching)) {
           match.push(product)
        }
      
    }
    return match;
}

const result= ourProducts(products,"phone");
console.log(result);