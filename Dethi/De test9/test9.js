let arr = [3, 5, 7, 2, 6, 7, 8];

//câu 1
let xapsep = arr.sort((a, b) => a - b);
console.log(xapsep);
//câu 2
function findMaxNumber(arr) {
  const maxNumber = Math.max(...arr);
  console.log("Số lớn nhất trong mảng là:", maxNumber);
}

findMaxNumber(arr);
// câu 3
var div = document.createElement("div");
div.id = "div1";
div.style.width = "300px";
div.style.height = "130px";
div.style.backgroundColor = "yellow";
div.style.borderRadius = "5px";

var h3 = document.createElement("h3");
h3.id = "title";
h3.innerText = "Transfer money";
h3.style.padding = "0.5em";
div.appendChild(h3);

var input1 = document.createElement("input");
input1.id = "input1";
input1.type = "text";
input1.style.width = "100px";
input1.style.height = "1em";
input1.style.marginInlineStart = "1em";
input1.style.borderRadius = "0.3em";
div.appendChild(input1);

var input2 = document.createElement("input");
input2.id = "input2";
input2.type = "number";
input2.style.width = "100px";
input2.style.height = "1em";
input2.style.marginInlineStart = "1em";
input2.style.borderRadius = "0.3em";
div.appendChild(input2);

var button = document.createElement("button");
button.id = "button";
button.innerHTML = "->";
button.style.marginInlineStart = "1em";
div.appendChild(button);

var newp = document.createElement("label");
newp.id = "newp";
newp.innerHTML = "transfer to";
newp.style.marginInlineStart = "2em";
newp.style.padding = "0";
newp.style.marginTop = "0";
div.appendChild(newp);

var newp2 = document.createElement("lable");
newp2.id = "newp2";
newp2.innerHTML = "Amount";
newp2.style.marginInlineStart = "4em";
newp2.style.padding = "0";
newp2.style.marginTop = "0";
div.appendChild(newp2);
document.body.appendChild(div);
// câu 4
const url = "https://fakestoreapi.com/products?limit=10";
const fetchAPI = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchAPI(url);
const processData = async () => {
  const data = await fetchAPI(url);
  if (data) {
    const filteredProducts = data.filter(
      (product) => parseFloat(product.rating.rate) >= 3.9
    );

    filteredProducts.forEach((product) => {
      const titleElement = document.createElement("p");
      titleElement.textContent = product.title;
      document.body.appendChild(titleElement);
    });
  }
};
processData();

// câu 5
function SinhVien(masv, hoten, ngaysinh, gioitinh) {
  this.masv = masv;
  this.hoten = hoten;
  this.ngaysinh = ngaysinh;
  this.gioitinh = gioitinh;
  this.tinhTuoi = function () {
    var today = new Date();
    var dob = new Date(this.ngaysinh);
    var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    return age;
  };
}
var sv1 = new SinhVien("SV001", "Nguyễn Văn A", "01/01/2000", "Nam");
// Kiểm tra thông tin và tuổi của sinh viên
console.log("Mã sinh viên:", sv1.masv);
console.log("Họ tên sinh viên:", sv1.hoten);
console.log("Ngày sinh:", sv1.ngaysinh);
console.log("Giới tính:", sv1.gioitinh);
console.log("Tuổi:", sv1.tinhTuoi());
//câu 6
class Person {
  constructor(CMND, hoten, ngaysinh, quequan) {
    this.CMND = CMND;
    this.hoten = hoten;
    this.ngaysinh = ngaysinh;
    this.quequan = quequan;
  }

  setHoTen(hoten) {
    if (hoten.length < 5 || hoten.length > 20) {
      console.log("Họ tên phải có từ 5 đến 20 ký tự.");
      return;
    }
    if (/[\d!@#$%^&*(),.?":{}|<>]/.test(hoten)) {
      console.log("Họ tên không được chứa số hoặc ký tự đặc biệt.");
      return;
    }
    this.hoten = hoten;
  }
}
let person1 = new Person("123456789", "Nguyễn Văn A", "01/01/1990", "Hà Nội");
person1.setHoTen("Nguyễn Văn Bảo Long");
console.log(person1.hoten);
person1.setHoTen("Nguyễn");
person1.setHoTen("Nguyễn Văn A1");
person1.setHoTen("Nguyễn Văn @");
