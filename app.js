
let myArray ;

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    myArray= (data);
    console.log(myArray);
  });

// for (let i = 0;i<=length(myArray);i++) {
//   console.log(Object.keys(movie));
// }

console.log(myArray.length())
