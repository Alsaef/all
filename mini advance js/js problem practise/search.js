/* .includes()  find string*/

const lyrics="tumi bndu kala Pakhi ami jenbo ki bosonto kale tumiai bolte pari ni";
const searchStrng="PaKhi"
// const find = lyrics.includes(searchStrng);
// const find = lyrics.includes("pakhi");
 const lyricslowerCase = lyrics.toLowerCase()
// const find = lyricslowerCase.includes(searchStrng);
const searchStrngLower=searchStrng.toLowerCase()
const find = lyricslowerCase.includes(searchStrngLower);
console.log(find)
// console.log(lyrics)

/* 
---------------------------------------------------------------------
*/

// indexOf

console.log(lyrics.indexOf("kala"))
console.log(lyrics.indexOf("tumi"))

// condition

// if (lyrics.indexOf("kala")!==-1) {
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// startwith

/* console.log(lyrics.startsWith("kala"));
console.log(lyrics.startsWith("tumi")); */

// endswith

console.log(lyrics.endsWith("ni"))
console.log(lyrics.endsWith("pari"))