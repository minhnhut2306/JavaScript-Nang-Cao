// câu 1
console.log("câu 1");
var c1 = document.getElementById("c1");
// arr.forEach((number) => (c1.innerHTML += number + " "));
// arr.forEach((number) => console.log(number));
arr.forEach((number) => {
  c1.innerHTML += number + " ";
  console.log(number);
});

// câu 2
console.log("câu 2");
var c2 = document.getElementById("c2");
var arearr = arr.map((number) => number * 2);
c2.innerHTML += " " + arearr;
console.log(arearr);

// câu 3
console.log("câu 3");
var c3 = document.getElementById("c3");
var filter = arr.filter((number) => number % 2 === 0);
c3.innerHTML += " " + filter;
console.log(filter);

// câu 4
console.log("câu 4");
var c4 = document.getElementById("c4");
var total = arr.reduce((total, arr) => {
  return total + arr;
});
c4.innerHTML += " " + total;
console.log(total);

//câu 5
console.log("câu 5");
var c5 = document.getElementById("c5");
var find = arr.find((number) => number % 2 === 0);
c5.innerHTML += " " + find;
console.log(find);

//câu 6
console.log("câu 6");
var c6 = document.getElementById("c6");
var arr2 = [...arr];
c6.innerHTML += " " + arr2;
console.log(arr2);

// câu 7
console.log("câu 7");
var c7 = document.getElementById("c7");
var arr3 = [...arr, ...arr1];
c7.innerHTML += " " + arr3;
console.log(arr3);

// câu 8
console.log("câu 8");
var c8 = document.getElementById("c8");
var UpperCase = str.toUpperCase();
c8.innerHTML = UpperCase;
console.log(UpperCase);

// câu 9
console.log("câu 9");
var c9 = document.getElementById("c9");
var reverse = str.split("").reverse().join("");
c9.innerHTML = reverse;
console.log(reverse);

// câu 10
console.log("câu 10");
var c10 = document.getElementById("c10");
var concat = arr.concat(arr1);
// const concatStrings = (arr, arr1) => {
//     return `${arr}${arr1}`;
// }
c10.innerHTML = concat; 
console.log(concat);

// câu 11
console.log("câu 11");
let element = document.getElementById("myId");

// câu 12
console.log("câu 12");
var c12 = document.getElementById("myId").innerHTML = "Hello, World!"
console.log(c12);

// câu 13

console.log("câu 13");
document.getElementById("myId").classList.add("myClass");

// câu 14
console.log("câu 14");
document.getElementById("myId").classList.remove("myClass");

// câu 15
console.log("câu 15");
let newDiv = document.createElement("div");