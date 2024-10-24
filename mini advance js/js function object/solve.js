var modulas=2;
function even(value) {
    if (value%modulas==0) {
        return "even";
    }
    else{
      return "odd";
    }
}
var add=even(9)
console.log(add);

var friend=["ratul","nahid","mijan"]
friend.forEach(function (item,index) {
    console.log(item,index)
});

var list={
    studentName:"nahid",
    age:19,
    collage:"B.B.P.I",
    dep:"computer"
}

var key=Object.keys(list);
var value=Object.values(list);
console.log(key)
console.log(value)
// var i=0;
// while (i<key.length) {
//     var item=key[i];
//     var poperty=list[item]
//     console.log(item,poperty);
//     i++
// }

for(poperty in list ){
    var item=list[poperty]
    console.log(poperty,item)
}