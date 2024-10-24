/* var years=2024;
var lepYear=4;
var count=years%lepYear;
console.log(count); */

function leapYear(year) {
    var leepYearCount=4;
    if (year%leepYearCount==0) {
        return "leap year";
    }
    else{
        return "none";
    }
}
var peramiter=2032;
var converd =leapYear(peramiter);
console.log(converd); 