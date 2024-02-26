console.log("1");
console.log("1.1");
var cau1a = document.getElementById("1.1");
let index = arr.indexOf("-");
if (index !== -1) {
  arr.splice(index, 1);
  arr.splice(index, 0, " ");
}
cau1a.innerHTML = arr.join("  ");
console.log(arr);

console.log("1.2");
var cau1b = document.getElementById("1.2");
let UpperCase = arr.join("").toUpperCase();
let reverse = UpperCase.split("").reverse().join("");
cau1b.innerHTML = reverse;
console.log(reverse);

console.log("1.3");
// var cau1c = document.getElementById("1.3");
// var modifiedString = arr.join(" ")
//   .replace("o", "s")
//   .replace("b", "t")
//   .replace("j", "r")
//   .replace("e", "i")
//   .replace("c", "n")
//   .replace("t", "g");
// console.log(modifiedString);
// cau1c.innerHTML = modifiedString;
var cau1c = document.getElementById("1.3");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "o") {
    arr[i] = "s";
  } else if (arr[i] === "b") {
    arr[i] = "t";
  } else if (arr[i] === "j") {
    arr[i] = "r";
  } else if (arr[i] === "e") {
    arr[i] = "i";
  } else if (arr[i] === "c") {
    arr[i] = "n";
  } else if (arr[i] === "t") {
    arr[i] = "g";
  }
}
let modifiedString = arr.join("");
console.log(modifiedString);
cau1c.innerHTML = modifiedString;

console.log("1.4,1.5");
var cau1d = document.getElementById("1.4");
var cau1e = document.getElementById("1.5");
var combinedString = "data".concat(" ", "structures");
var extractedString = combinedString.substring(5);
cau1d.innerHTML = combinedString;
console.log(combinedString);
cau1e.innerHTML = extractedString;
console.log(extractedString);

console.log("2");
console.log("2.1");
var arr3 = [...arr1, ...arr2];
var cau2a = document.getElementById("2.1");
cau2a.innerHTML = arr3.join(",");
console.log(arr3);

console.log("2.2");
var cau2b = document.getElementById("2.2");
var numbers = arr3.filter((num) => num % 2 === 0 && (num < 20 || num > 70));
cau2b.innerHTML = numbers.join(", ");
console.log(numbers.length > 0 ? numbers.join(", ") : " ");
