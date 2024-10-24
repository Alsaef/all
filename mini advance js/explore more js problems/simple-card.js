const shopingCard=[
    {name:"shoes",price:1200},
    {name:"shirt",price:2200},
    {name:"pent",price:1500},
    {name:"belt",price:500}
]

function totalCost(card) {
    let arraySum=0;
    for (let i = 0; i < card.length; i++) {
        const element = card[i];
        arraySum=arraySum+element.price;
        console.log(element,arraySum);
        
    }
    return arraySum;
}
 const add= totalCost(shopingCard);
 console.log( "explore total: ",add);