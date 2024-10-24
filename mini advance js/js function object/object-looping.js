var shoppingCard={
    pen:3,
    bread:4,
    books:6,
    keybord:7,
    shose:2,
    watch:2
}
const keys=Object.keys(shoppingCard);
const values=Object.values(shoppingCard);
console.log(keys);
console.log(values);

for(var items=0; items<keys.length; items++){
    var item=keys[items];
    var popertValue=shoppingCard[item]
    // console.log(item,popertValue)
}
// for in loop

for(var poperty in shoppingCard){
    var itemsVlue=shoppingCard[poperty];
    console.log(poperty,itemsVlue);
}