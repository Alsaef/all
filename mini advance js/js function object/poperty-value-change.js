var list = {
    name:"vidyut jammwal",
    DateOfBirth:"10dec,1980",
    latestUpcommingMovie:"IB71",
    hitMovie:"Khua Hafiz 2",
    blokBusterMovie:"khuda hafiz",
    totalMovie:10,

}

var popertyKey=Object.keys(list);
var popertyvalue=Object.values(list);
var popertyName="name:";
// single 
var singlePoperty=list["name"];
// var popertychange=list.totalMovie=11;
var hit= "hit movie:"
var blockbuster="BlockBuster Movie:"
var popertychange=list.hitMovie="khuda Hafiz3";
var popertychange2=list.blokBusterMovie="sanak";
// var popertychange=list["hitMovie"]="khuda Hafiz2,commando3,commando2";
// var popertychange2=list["blokBusterMovie"]="Khudahafiz,sanak";
console.log(list);
console.log(popertyKey)
console.log(popertyvalue);
console.log(popertyName,singlePoperty);
console.log(popertychange);
console.log(popertychange2);