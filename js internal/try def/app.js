let user=0;

const userId=setInterval(() => {
    const userData=document.getElementById("user-data");
    const userInputStr=userData.innerText;
    const userinput=parseInt(userInputStr)
    const container = userData.innerText=++userinput
   
    if (container===1000) {
        clearInterval(userId)
    }
}, 1);