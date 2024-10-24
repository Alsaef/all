const localstorage=()=>{
    const inputFild=document.getElementById("email");
    const value=inputFild.value;
    inputFild.value="";
   
   if (value) {
    localStorage.setItem("email",value);
    console.log(value)
   }
}