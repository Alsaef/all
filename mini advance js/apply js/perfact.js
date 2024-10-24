function body(hight,width) {
    var perfactHight=5;
    var perfactWidth=50;
   if (hight==perfactHight&&width==perfactWidth) {
        return "perfact";
   } 
   else{
    return "not perfact";
   }
}
var myHight=5;
var myWidth=50;
var perfact= body(myHight,myWidth);
console.log(perfact);
