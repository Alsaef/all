//simple multyplecation
/* var sum=1;
for(i=1;i<=7;i++){
    sum=sum*i;
    console.log(i,sum);
} */

//build function

function multyplication() {
    let sum=1;
    for(num=1;num<=7;num++){
        sum=sum*num;
        console.log(num,sum);
    }
    return sum;
}

var add=multyplication()
console.log(add);