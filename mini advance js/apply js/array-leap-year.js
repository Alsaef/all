function leapYear(years) {
    let leapYears=[]
    for(let num=0;num<years.length;num++){
        let element=years[num];
        if(element%4==0){
           
            console.log(num,element);
            leapYears.push(element);
        }
    }
    return "leap years";
}
let year=[2023,2024,2025,2026,2028,2030];
let add=leapYear(year);
console.log(add);