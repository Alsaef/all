const lyrics="tumi bondu kala Pakhi ami jenbo ki. bosonto kale tumiai bolte pari ni";
const parts=lyrics.split(' ')
const sentence=lyrics.split('.')
const carecters=lyrics.split("")
console.log(parts)
console.log(sentence)
console.log(carecters)


// slice(slice first index, slice last indiex before)
// const sliceing=lyrics.slice(5,10);
// console.log(sliceing)

// substring

// const substring_slice=lyrics.substring(5,10)
// console.log(substring_slice);

// string line join
const list=[
    'tumi',  'bondu',  
    'kala',  'Pakhi',  
    'ami',   'jenbo',  
    'ki.',   'bosonto',
    'kale',  'tumiai', 
    'bolte', 'pari',
    'ni'
  ]
  let join= list.join(" ")
  console.log(join)