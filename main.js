// function randomString() {
//   const keysList = [
//     ..."abcdefghijklmnopqrstuvwxyz",
//     ...`${Date.now()}`.split(""),
//   ];
//   const randomId = keysList
//     .map((s) => keysList[Math.floor(Math.random() * keysList.length)])
//     .join("");
//   return randomId;
// }
// let arr = []
// for(let i = 0; i < 1000; i++) {
//     arr.push(randomString())
// }

// const hasDuplicates = new Set(arr).size !== arr.length;

// if (hasDuplicates) {
//     console.log('The array contains duplicates');
// } else {
//     console.log('The array does not contain duplicates');
// }

console.log(
  `${+new Date(
    Math.floor(Math.random() * 10000) + 5000,
    Math.floor(Math.random() * 11) + 0,
    Math.floor(Math.random() * 30) + 1,
    Math.floor(Math.random() * 24) + 1,
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 60) + 1,
    Math.floor(Math.random() * 1000) + 1
  )}`.slice(0, 5)
);

/* 
let arr = []
for(let i = 0; i < 1000; i++) {
    arr.push((
        `${+new Date(
          Math.floor(Math.random() * 10000) + 5000,
          Math.floor(Math.random() * 11) + 0,
          Math.floor(Math.random() * 30) + 1,
          Math.floor(Math.random() * 24) + 1,
          Math.floor(Math.random() * 60) + 1,
          Math.floor(Math.random() * 60) + 1,
          Math.floor(Math.random() * 1000) + 1
        )}`
      ))
}

const hasDuplicates = new Set(arr).size !== arr.length;

if (hasDuplicates) {
    console.log('The array contains duplicates');
} else {
    console.log('The array does not contain duplicates');
}
*/
