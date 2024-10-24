var shoppingCard={
    pen:3,
    bread:4,
    books:6,
    keybord:7
}
var changeBooks=shoppingCard.books=8;
var changepen=shoppingCard["pen"]=9;
var key=Object.keys(shoppingCard);
var value=Object.values(shoppingCard);
console.log(shoppingCard);
console.log(key);
console.log(value);
console.log(changeBooks);
console.log(changepen);