/* 
first 100 tickit buy---->100tk
second 100-200 tickit buy---->90tk
 rest 200+ tickit buy---->70tk

*/

function ticketPrie(ticketQuantity) {
    const first100Rate=100;
    const second100Rate=90;
    const restRate=70;
    
    if (ticketQuantity<=100) {
        const price=ticketQuantity*first100Rate;
        return price;
    }
    else if (ticketQuantity<=200) {
    const firstPrice=100*first100Rate;
    const restTiketQuantity=ticketQuantity-100;
    const restPrice=restTiketQuantity*second100Rate;
    const totalPrice=firstPrice+ restPrice;
    return totalPrice;
    }
    else{
      const first100price=100;
      const second100Price=100*second100Rate;
      const restQuantity= ticketQuantity - 200;
      const restPrice= restQuantity*restRate;
     const  totalCost = first100price+second100Price+restPrice;
     return totalCost;
    }
    
 
}
const add=ticketPrie(120);
console.log(add);