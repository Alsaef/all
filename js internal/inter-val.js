let secound=0;
let interval=setInterval(() => {
  console.log(++secound)  
  if (secound===10) {
    clearInterval(interval)
  }
}, 1);