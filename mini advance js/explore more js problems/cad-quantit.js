const shopingCard=[
    {name:"shoes",price:1200,quantity:2},
    {name:"shirt",price:2200,quantity:5},
    {name:"pent",price:1500,quantity:4},
    {name:"belt",price:500,quantity:2},
]

function totalAndquantity(card) {
    let sum=0;
    for (let i = 0; i< card.length; i++) {
      const element = card[i];
      const totalQuantity=element.price*element.quantity;
      sum=sum+totalQuantity;
      console.log(element,sum);

       
    }
    return sum;
}
const add=totalAndquantity(shopingCard);
console.log("total cost :",add);