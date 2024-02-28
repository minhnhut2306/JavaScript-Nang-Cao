const numbernew = [...number1, 10];
console.log(numbernew);
//1b
const [a, b] = number1;
const [c, d] = number2;
console.log(a + " , " + d);

// câu 2

var sum = number1
  .filter((num) => {
    return num % 2 === 0;
  })
  .reduce((a, b) => a + b, 0);

console.log(sum);

// 2b
const firstOddNumber = number1.find((num) => num % 2 !== 0);
console.log(firstOddNumber);

// câu 3
var odd = (arr) => {
  arr.filter((num) => num % 2 !== 0);
};
const oddNumber = odd(arr);
console.log(oddNumber);
// 3b
const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};
function processStrings() {
  console.log(getFullName("John", "Doe"));
}
processStrings();

// câu 4
const calculateArea = (length, width, callback) => {
  const area = length * width;
  callback(area);
};
const printArea = (area) => {
  console.log(`Area is: ${area}`);
};
calculateArea(5, 3, printArea);

//4b
const concatenateStrings = (str1, str2, callback) => {
  const result = str1 + str2;
  callback(result);
};
const printResult = (result) => {
  console.log(`Concatenated strings: ${result}`);
};
concatenateStrings("Hello, ", "world!", printResult);
// câu 5
let trimmedStr1 = str1.trim();
console.log(trimmedStr1);
// 5b
let concatenatedStr = str1.trim() + " " + str2;
console.log(concatenatedStr);
// câu 6
const ulElement = document.getElementById("idUL");
// 6b
const ulElement2 = document.getElementById("idUL");
const liElement2 = document.createElement("li");
liElement2.textContent = "Hết tiền";
ulElement2.appendChild(liElement2);
// câu 7
// Object Constructor Function
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.getSummary = function () {
    console.log(
      `Sách ${this.title} của tác giả ${this.author} gồm ${this.pages} trang`
    );
  };
}

const myBook = new Book("Quyền Lực Đích Thực", "Thích Nhất Hạnh", 200);

console.log(myBook.title);
console.log(myBook.author);
console.log(myBook.pages);
myBook.getSummary();

// Class ES6
class Book2 {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getSummary() {
    console.log(
      `Sách ${this.title} của tác giả ${this.author} gồm ${this.pages} trang`
    );
  }
}

const myBook2 = new Book2("Quyền Lực Đích Thực", "Thích Nhất Hạnh", 200);
console.log(myBook2.title);
console.log(myBook2.author);
console.log(myBook2.pages);
myBook2.getSummary();

// Class ES6
class MathBook extends Book {
  constructor(title, author, pages, price) {
    super(title, author, pages);
    this.price = price;
  }

  getSale() {
    if (this.price >= 100000) {
      console.log(`Giá giảm 20%: ${this.price * 0.8}`);
    } else {
      console.log(`Giá giảm 10%: ${this.price * 0.9}`);
    }
  }
}

const myMathBook = new MathBook("Toán Học", "John Doe", 300, 120000);
console.log(myMathBook.title);
console.log(myMathBook.author);
console.log(myMathBook.pages);
console.log(myMathBook.price);
myMathBook.getSummary();
myMathBook.getSale();

// câu 8
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const users = data.map((user) => `<li>${user.name}: ${user.phone}</li>`);
    const userList = `<ul>${users.join("")}</ul>`;
    document.body.innerHTML = userList;
  })
  .catch((error) => console.error("Error:", error));
