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

console.log("2.3");
var cau2c = document.getElementById("2.3");
var isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
var primeNumbers = [];
for (let i = 30; i <= 80; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
    console.log(i);
  }
}
cau2c.innerHTML = primeNumbers.join(", ");

console.log("câu 2.4");
var oddNumbers = arr3.filter((num) => num % 2 !== 0);
oddNumbers.sort((a, b) => b - a);
console.log(oddNumbers);
var cau2d = document.getElementById("2.4");
cau2d.innerHTML = oddNumbers.join(", ");

console.log("câu 4");
var lesson = coursr?.lesson ?? " lesson not available";
console.log(lesson);

// bài tập 2
// câu 1
const sortArray = (arr) => arr.sort((a, b) => a - b);
const sortArray2 = (arr) =>
  arr.sort(function (a, b) {
    return a - b;
  });
const sortArray3 = (arr, callback) => {
  const sortArray4 = arr.sort((a, b) => a - b);
  callback(sortArray4);
};
const displaysort = (arr2) => {
  console.log("mảng được sắp xếp tăng dần ", arr2);
};
sortArray3(arr2, displaysort);

// câu 2
// Hàm nhập mảng từ người dùng
const inputArray = (callback) => {
  const userInput = prompt(
    "Nhập mảng số tự nhiên (ít nhất 10 số), cách nhau bằng dấu phẩy:"
  );
  // Kiểm tra nếu userInput là null hoặc rỗng
  if (userInput === null || userInput.trim() === "") {
    console.log("Không có dữ liệu được nhập.");
    return;
  }
  const userArray = userInput.split(",").map(Number);
  callback(userArray);
};

// Hàm hiển thị mảng đã nhập
const displayArray = (array) => {
  console.log("Mảng đã nhập:", array);
};

// Hàm tìm số lớn nhất trong mảng và hiển thị ra màn hình
const findMaxNumber = (array, callback) => {
  const maxNumber = Math.max(...array);
  callback(maxNumber);
};

// Hàm đảo ngược thứ tự các phần tử của mảng và hiển thị ra màn hình
const Reverse = (array, callback) => {
  const reversedArray = [...array].reverse();
  callback(reversedArray);
};

// Hàm kiểm tra số có trong mảng hay không và hiển thị kết quả ra màn hình
const checkNumberArray = (array, number, callback) => {
  const isInArray = array.includes(number);
  callback(isInArray);
};

const displayArrayResult = (isInArray) => {
  if (isInArray) {
    console.log("Số này đã tồn tại trong mảng");
  } else {
    console.log("Số này chưa tồn tại trong mảng");
  }
};

// Lấy số nhập từ người dùng
const userNumber = parseInt(prompt("Nhập một số bất kỳ:"));

// Gọi hàm nhập mảng và sử dụng các callback function để thực hiện các nhiệm vụ cần thiết
inputArray((userArray) => {
  displayArray(userArray);
  findMaxNumber(userArray, (maxNumber) => {
    console.log("Số lớn nhất trong mảng:", maxNumber);
  });
  Reverse(userArray, (reversedArray) => {
    console.log("Mảng đảo ngược là:", reversedArray);
  });

  if (!isNaN(userNumber)) {
    checkNumberArray(userArray, userNumber, displayArrayResult);
  } else {
    console.log("Vui lòng nhập một số.");
  }
});
