
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
var c12 = (document.getElementById("myId").innerHTML = "Hello, World!");
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

// câu 16
console.log("câu 16");
var c16 = document.getElementById("myId");
c16.parentNode.removeChild(c16);

// câu 17
console.log("câu 17");
let elements = document.getElementsByClassName("myClass");

// câu 18
console.log("câu 18");
let divs = document.getElementsByTagName("div");

// câu 19
console.log("câu 19");
var myButton = document.getElementById("myButton");
myButton.disabled = true;

// câu 20
console.log("câu 20");
var myButton = document.getElementById("myButton");
myButton.removeAttribute("disable");

// câu 21
console.log("câu 21");
function cau21() {
  var divc21 = document.querySelector(".c21");
  divc21.style.backgroundColor = "red";
}

//câu 22
console.log("câu 22");
var text = document.getElementById("c22");
text.onmouseover = function () {
  this.style.color = "red";
};
text.onmouseout = function () {
  this.style.color = "black";
};

//câu 23
console.log("câu 23");
function cau23() {
  alert("Nguyễn Minh Nhựt đẹp trai nhất quả đất");
}

//câu 24
function tablerow() {
  let table = `<table>${data
    .map(
      (obj) => `
     <tr>
        <td>${obj.name}</td>
        <td>${obj.age}</td>
      </tr>`
    )
    .join("")}</table>`;
  return table;
}
function cau24() {
  var divc24 = document.getElementById("tablerow");
  divc24.innerHTML = tablerow();
}
cau24();

//câu 25
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  let isValid = users.find(
    (user) => user.username === username && user.password === password
  );
  if (isValid) {
    alert("Đăng nhập thành công");
    return true;
  } else {
    alert("Tên người dùng hoặc mật khẩu không chính xác!");
    document.getElementById("login-error").style.display = "block";
    return false;
  }
}

// câu 26
console.log("câu 26");
const greed = () => {
  console.log("Hello word!");
  var c26 = document.getElementById("c26");
  c26.innerHTML = "Nhựt đẹp trai";
};
greed();

// câu 27
console.log("câu 27");
var x = 3;
var c27 = document.getElementById("c27");
const square = (x) => x * x;
console.log(square(x));
c27.innerHTML = square(x);

// câu 28
var a = 3;
var b = 4;
var c28 = document.getElementById("c28");
const add = (a, b) => a + b;
console.log(add(a, b));
c28.innerHTML = add(a, b);

// câu 29
console.log("câu 29");
const processStrings = () => {
  var c29 = document.getElementById("c29");
  let getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
  console.log(getFullName("John", "Doe"));
  c29.innerHTML = getFullName("John", "Doe");
};
processStrings();

// câu 30
console.log("câu 30");
const processModulus = () => {
  var c30 = document.getElementById("c30");
  let moduns = (a, b) => a % b;
  console.log(moduns(5, 3));
  c30.innerHTML = moduns(5, 3);
};
processModulus();

// câu 31
console.log("câu 31");
const calculateSum = (a, b, callback) => {
  let sum = a + b;
  callback(sum);
};
const printSum = (sum) => {
  var c31 = document.getElementById("c31");
  console.log(`Sum is: ${sum}`);
  c31.innerHTML = `Sum is: ${sum}`;
};
calculateSum(5, 3, printSum);

// câu 32
console.log("câu 32");
const createFullName = (firstName, lastName, callback) => {
  let fullname = `${firstName} ${lastName}`;
  callback(fullname);
};

const printFullName = (fullName) => {
  console.log(`Full name is: ${fullName}`);
  var c32 = document.getElementById("c32");
  c32.innerHTML = `Full name is: ${fullName}`;
};

createFullName("John", "Doe", printFullName);

//câu 33
console.log("câu 33");
const checkNumber = (callback) => {
  let number = Number(prompt("Nhập số"));
  callback(number);
};
const printEvenOrOdd = (number) => {
  var c33 = document.getElementById("c33");
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
    c33.innerHTML = `${number} is even.`;
  } else {
    console.log(`${number} is odd.`);
    c33.innerHTML = `${number} is odd.`;
  }
};
checkNumber(printEvenOrOdd);

// câu 34
const processNumbers = (numbers, callback) => {
  for (let number of numbers) {
    callback(number);
  }
};
const printPositiveOrNegative = (number) => {
  var c34 = document.getElementById("c34");
  if (number > 0) {
    console.log(`${number} is positive.`);
    c34.innerHTML = `${number} is positive.`;
  } else if (number < 0) {
    console.log(`${number} is negative.`);
    c34.innerHTML = `${number} is negative.`;
  } else {
    console.log(`${number} is zero.`);
    c34.innerHTML = `${number} is zero.`;
  }
};

processNumbers(numbers, printPositiveOrNegative);

// câu 35
console.log("câu 35");
const ChainString = (str, callback) => {
  callback(str.length);
};
const printLength = (length) => {
  var c35 = document.getElementById("c35");
  console.log(`Độ dài chuỗi là  ${length}`);
  c35.innerHTML = `Độ dài chuỗi là ${length}`;
};
ChainString(str, printLength);

// câu 36
console.log("câu 36");
const sumaddcheck = (numbers2, callback) => {
  let sum = numbers2.reduce((a, b) => a + b);
  callback(sum);
};
const printfsum = (sum) => {
  var c36 = document.getElementById("c36");
  if (sum % 2 === 0) {
    console.log(`sum ${sum}`);
    c36.innerHTML = `sum ${sum}`;
  } else {
    console.log(`sum ${sum}`);
    c36.innerHTML = `sum ${sum}`;
  }
};
sumaddcheck(numbers2,printfsum);

// câu 37
console.log("câu 37");
const sumpoint = (points, callback) => {
  let sum = points.reduce((a, b) => a + b,0)/ (points.length);
  callback(sum);
}
const printpoid = sum => {
  var c37 = document.getElementById("c37");
  if (sum >= 5) {
    console.log(`Đậu ${sum}`);
    c37.innerHTML = `Đậu ${sum}`;
  } else {
    console.log(`Rớt ${sum}`);
    c37.innerHTML = `Rớt ${sum}`;
  }
}
sumpoint(points, printpoid);

// câu 38
console.log("câu 38");

// câu 39
console.log("câu 39");

// câu 40
console.log("câu 40");

// câu 41
function fetchDataFromAPI() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Dữ liệu từ API:', data);
    })
    .catch(error => {
      console.error('Có lỗi xảy ra:', error);
    });
}
fetchDataFromAPI();

// câu 42
function fetchDataFromMultipleAPIs() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
  ];
  const requests = urls.map(url => fetch(url).then(response => response.json()));
  Promise.all(requests)
    .then(data => {
      console.log('Dữ liệu từ các API:', data);
    })
    .catch(error => {
      console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
    });
}
fetchDataFromMultipleAPIs();
//câu 43
function addDataToAPI(data) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log('Dữ liệu đã được thêm vào API:', result);
  })
  .catch(error => {
    console.error('Có lỗi xảy ra khi thêm dữ liệu vào API:', error);
  });
}
addDataToAPI();

// câu 44
function deleteDataFromAPI() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Có lỗi xảy ra khi xóa dữ liệu từ API');
    }
    console.log('Dữ liệu đã được xóa thành công từ API');
  })
  .catch(error => {
    console.error('Có lỗi xảy ra khi xóa dữ liệu từ API:', error);
  });
}
deleteDataFromAPI();

//câu 45
function updateDataInAPI(data) {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Có lỗi xảy ra khi cập nhật dữ liệu trên API');
    }
  })
  .catch(error => {
    console.error('Có lỗi xảy ra khi cập nhật dữ liệu trên API:', error);
  });
}
updateDataInAPI(data);

//câu 46
async function fetchDataFromAPIaxios() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Dữ liệu từ API:', response.data);
    // Xử lý dữ liệu ở đây nếu cần
  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
  }
}
fetchDataFromAPIaxios();

//câu 47
async function fetchDataFromMultipleAPIsaxios() {
  try {
    const urls = [
      'https://jsonplaceholder.typicode.com/posts/1',
      'https://jsonplaceholder.typicode.com/posts/2'
    ];
    const requests = urls.map(url => axios.get(url));
    const responses = await Promise.all(requests);
    const data = responses.map(response => response.data);
    console.log('Dữ liệu từ các API:', data);
  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
  }
}
fetchDataFromMultipleAPIsaxios();

// câu 48
async function addDataToAPIaxios(data) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
    console.log('Dữ liệu đã được thêm vào API:', response.data);
  } catch (error) {
    console.error('Có lỗi xảy ra khi thêm dữ liệu vào API:', error);
  }
}
addDataToAPIaxios(data);

// câu 49
async function deleteDataFromAPIaxios() {
  try {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Dữ liệu đã được xóa từ API:', response.data);
  } catch (error) {
    console.error('Có lỗi xảy ra khi xóa dữ liệu từ API:', error);
  }
}
deleteDataFromAPIaxios();

// câu 50
async function updateDataInAPIaxios(data) {
  try {
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', data);
    console.log('Dữ liệu đã được cập nhật trên API:', response.data);
  } catch (error) {
    console.error('Có lỗi xảy ra khi cập nhật dữ liệu trên API:', error);
  }
}
updateDataInAPIaxios(data);