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

// Hàm tìm số lớn nhất
const findMaxNumber = (array, callback) => {
  const maxNumber = Math.max(...array);
  callback(maxNumber);
};

// Hàm đảo ngược thứ tự các phần tử
const Reverse = (array, callback) => {
  const reversedArray = [...array].reverse();
  callback(reversedArray);
};

// Hàm kiểm tra số có trong mảng hay không
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

// hàm xóa dữ mảng
const removeElement = (array, element, callback) => {
  const newArray = array.filter((item) => item !== element);
  callback(newArray);
};
const displaynewArray = (newArray) => {
  console.log("Mảng mới:", newArray.join(", "));
};

// hàm sắp xếp phần tử lẻ
const oddnumber2 = (array, callback) => {
  const oddArray = array.filter((item) => item % 2 !== 0);
  oddArray.sort((a, b) => b - a);
  callback(oddArray);
};

// Gọi hàm nhập mảng
inputArray((userArray) => {
  displayArray(userArray);
  findMaxNumber(userArray, (maxNumber) => {
    console.log("Số lớn nhất trong mảng:", maxNumber);
  });
  Reverse(userArray, (reversedArray) => {
    console.log("Mảng đảo ngược là:", reversedArray);
  });
  // Lấy số nhập từ người dùng
  const userNumber = parseInt(prompt("Nhập một số bất kỳ:"));
  if (!isNaN(userNumber)) {
    checkNumberArray(userArray, userNumber, displayArrayResult);
  } else {
    console.log("Vui lòng nhập một số.");
  }
  const element = parseInt(prompt("số cần xóa: "));
  if (!isNaN(element)) {
    removeElement(userArray, element, displaynewArray);
  } else {
    console.log("Vui lòng nhập một số.");
  }
  oddnumber2(userArray, (oddArray) => {
    console.log("Số lớn nhất trong mảng số lẻ:", oddArray);
  });
});

//MẢNG (ARRAYS) VÀ LÀM VIỆC VỚI MẢNG
const n = parseInt(prompt("Nhập một số n:"));
// Tạo mảng A với các số lẻ từ 1 đến n
const A = Array.from({ length: Math.ceil(n / 2) }, (_, index) => {
  return index * 2 + 1;
});
// tạo mãng B
const B = A.map((value) => value * 2);
// tạo mảng C
const C = B.sort((a, b) => b - a);
// tạo mảng D
const D = A.filter((num) => num % 7 == 0);
// tạo mảng E
const E = [...B, ...A];
// kiểm tra E
const checkE = E.filter((num) => num % 5 === 0 && num > 50);
// Hiển thị mảng A
console.log("Mảng A:", A);
// Hiển thị mảng B
console.log("Mảng B:", B);
// Hiển thị mảng C
console.log("Mảng C:", C);
// Hiển thị mảng D
console.log("Mảng D:", D.join(" "));
// Hiển thị mảng E
console.log("Mảng E:", E.join(" "));
// Hiển thị hàm check E
console.log("Hàm check E:", checkE.join(" "));

// DOM NÂNG CAO (ADVANCED DOM) VÀ SỰ KIỆN (EVENTS)
//câu 2
let pickedNumbers = []; // Mảng để lưu các số đã được bốc

// Hàm để bốc số ngẫu nhiên từ 1 đến 90
const pickNumber = () => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 90) + 1;
  } while (pickedNumbers.includes(randomNumber));
  pickedNumbers.push(randomNumber);
  console.log("Mảng sau khi bốc số:", pickedNumbers);
};

// Hàm để hiển thị lịch sử
const renderHistory = () => {
  const historyContainer = document.getElementById("historyContainer");
  historyContainer.innerHTML = "";
  pickedNumbers.forEach((number) => {
    const button = document.createElement("button");
    button.textContent = number;
    historyContainer.appendChild(button);
  });
};

// Hàm để kiểm tra các số nhập vào
const checkNumbers = () => {
  const guessInput = document.getElementById("guessInput").value.trim();
  const guessArray = guessInput.split(" ").map(Number);
  let count = 0;
  guessArray.forEach((guess) => {
    if (pickedNumbers.includes(guess)) {
      count++;
    }
  });
  alert(`Trùng ${count} số`);
};

// "Bốc số"
document.getElementById("pickButton").addEventListener("click", () => {
  pickNumber();
});

// "Lịch sử"
document.getElementById("historyButton").addEventListener("click", () => {
  renderHistory();
});

//"Kiểm tra"
document.getElementById("checkButton").addEventListener("click", () => {
  checkNumbers();
});

//  "Chơi lại"
document.getElementById("resetButton").addEventListener("click", () => {
  pickedNumbers = [];
  document.getElementById("historyContainer").innerHTML = "";
});

// Xử lý sự kiện khi cố gắng tải lại trang
window.addEventListener("beforeunload", (event) => {
  if (pickedNumbers.length > 0) {
    const confirmationMessage =
      "Trò chơi đang diễn ra! Bạn có chắc muốn tải lại trang không?";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
  }
});

//LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP) TRONG JAVASCRIPT
// Class HocSinh
class HocSinh {
  constructor(HoTen, NgaySinh, Lop, Diem) {
    this.HoTen = HoTen;
    this.NgaySinh = NgaySinh;
    this.Lop = Lop;
    this.Diem = Diem;
  }

  tinhTuoi() {
    const birthDate = new Date(this.NgaySinh);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return Math.floor(age);
  }

  xepLoai() {
    if (this.Diem >= 8 && this.Diem <= 10) {
      return "Giỏi";
    } else if (this.Diem > 6) {
      return "Khá";
    } else if (this.Diem >= 3) {
      return "Trung bình";
    } else {
      return "Yếu";
    }
  }
}

// Class SinhVien
class SinhVien extends HocSinh {
  constructor(HoTen, NgaySinh, Lop, Diem) {
    super(HoTen, NgaySinh, Lop, Diem);
  }

  thiBaoVe(monThi) {
    if (this.Diem >= 5) {
      console.log(
        `Sinh viên ${this.HoTen}, lớp ${this.Lop} đủ điều kiện dự thi ${monThi}`
      );
    } else {
      console.log(
        `Sinh viên ${this.HoTen}, lớp ${this.Lop} bị cấm thi môn ${monThi} do điểm quá trình dưới 5`
      );
    }
  }
}

// Class NhanVien
class NhanVien {
  constructor(HoTen, NgayNhanViec, HeSoLuong) {
    this.HoTen = HoTen;
    this.NgayNhanViec = NgayNhanViec;
    this.HeSoLuong = HeSoLuong;
  }

  tinhLuong(luongCoBan, soNgayLamViec) {
    return (luongCoBan * this.HeSoLuong * soNgayLamViec) / 26;
  }

  tinhThuongTet(luongCoBan, soThangLamViec) {
    // Thêm tham số luongCoBan vào đây
    return (luongCoBan * 26 * soThangLamViec) / 12.4;
  }
}

// Class CanBo
class CanBo extends NhanVien {
  constructor(HoTen, NgayNhanViec, HeSoLuong, phuCapChucVu) {
    super(HoTen, NgayNhanViec, HeSoLuong);
    this.phuCapChucVu = phuCapChucVu;
  }

  tinhLuong(luongCoBan, soNgayLamViec) {
    return (
      (luongCoBan * (this.HeSoLuong + this.phuCapChucVu) * soNgayLamViec) / 26
    );
  }
}

// Class SanPham
class SanPham {
  constructor(TenSanPham, GiaBan, HanSuDung) {
    this.TenSanPham = TenSanPham;
    this.GiaBan = GiaBan;
    this.HanSuDung = HanSuDung;
  }

  kiemTraHSD() {
    const currentDate = new Date();
    const expiryDate = new Date(this.HanSuDung);
    return expiryDate >= currentDate;
  }

  tieuHuy() {
    console.log(
      `Sản phẩm ${this.TenSanPham} đã bị tiêu hủy vì quá hạn sử dụng`
    );
  }

  huy() {
    console.log(`Đã tiêu hủy thành công!`);
  }
}

// Tạo một đối tượng HocSinh
const hocSinh1 = new HocSinh("Nguyen Van A", "01/01/2000", "10A", 7);
console.log(hocSinh1.tinhTuoi());
console.log(hocSinh1.xepLoai());

// Tạo một đối tượng SinhVien và gọi phương thức thiBaoVe
const sinhVien1 = new SinhVien("Tran Thi B", "01/01/1999", "12B", 4);
sinhVien1.thiBaoVe("Toán");

// Tạo một đối tượng NhanVien và tính lương và thưởng Tết
const nhanVien1 = new NhanVien("Le Van C", "01/01/1995", 2);
console.log(nhanVien1.tinhLuong(5000000, 20));
console.log(nhanVien1.tinhThuongTet(12));

// Tạo một đối tượng CanBo và tính lương
const canBo1 = new CanBo("Pham Van D", "01/01/1990", 3, 0.5);
console.log(canBo1.tinhLuong(6000000, 22));

// Tạo một đối tượng SanPham và kiểm tra hạn sử dụng, tiêu hủy
const sanPham1 = new SanPham("Sữa chua", 20000, "2024-02-28");
console.log(sanPham1.kiemTraHSD());
sanPham1.tieuHuy();
sanPham1.huy();

// API
// Hàm để tải dữ liệu từ URL JSON
async function loadData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data loaded successfully:", data); // Thêm dòng này
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
}

// 1. Hàm loadTinh() để hiển thị danh sách các tỉnh/thành phố trực thuộc trung ương
async function loadTinh() {
  try {
    const data = await loadData(
      "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
    );
    console.log("All data:", data); // Thêm dòng này
    const tinhThanhTrungUong = data.filter((item) => item.level === 1);
    console.log("Provinces:", tinhThanhTrungUong); // Thêm dòng này
    tinhThanhTrungUong.forEach((tinh) => console.log(tinh.name));
  } catch (error) {
    console.error("Error loading provinces:", error);
  }
}

// 2. Hàm loadHuyen(idTinh) để hiển thị các quận/huyện của một tỉnh/thành phố theo idTinh
async function loadHuyen(idTinh) {
  try {
    if (!idTinh) {
      throw new Error("Missing idTinh parameter");
    }
    const data = await loadData(
      "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
    );
    const quanHuyen = data.filter(
      (item) => item.parent_code === idTinh && item.level === 2
    );
    quanHuyen.forEach((huyen) => console.log(huyen.name));
  } catch (error) {
    console.error("Error loading districts:", error);
  }
}

// 3. Hàm loadPhuongXa(idHuyen, loai="Phường") để hiển thị các loại phường/xã tương ứng theo idHuyen
async function loadPhuongXa(idHuyen, loai = "Phường") {
  try {
    if (!idHuyen) {
      throw new Error("Missing idHuyen parameter");
    }
    const data = await loadData(
      "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
    );
    const phuongXa = data.filter(
      (item) =>
        item.parent_code === idHuyen &&
        item.level === 3 &&
        item.name.includes(loai)
    );
    phuongXa.forEach((phuong) => console.log(phuong.name));
  } catch (error) {
    console.error("Error loading wards/communes:", error);
  }
}

// 4. Thực hiện lấy 2 danh mục ngẫu nhiên từ link (A) và hiển thị sản phẩm
async function loadRandomCategories() {
  const categoriesUrl = "https://fakestoreapi.com/products/categories";
  const randomCategories = [];
  const categories = await loadData(categoriesUrl);
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * categories.length);
    randomCategories.push(categories[randomIndex]);
  }
  return randomCategories;
}

async function loadProductsByCategories() {
  const randomCategories = await loadRandomCategories();
  for (const category of randomCategories) {
    const productsUrl = `https://fakestoreapi.com/products/category/${category}`;
    const products = await loadData(productsUrl);
    products.forEach((product) => {
      console.log(`Product: ${product.title}, Price: ${product.price}`);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteProduct(product.id));
      document.body.appendChild(deleteButton);
    });
  }
}

// 5. Xóa sản phẩm dựa trên mã sản phẩm và hiển thị thông báo nếu xóa thành công
async function deleteProduct(productId) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      alert("Product deleted successfully!"); // Hiển thị thông báo alert
    } else {
      throw new Error("Failed to delete product");
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    alert("Failed to delete product");
  }
}

loadTinh();
loadHuyen(71);
loadProductsByCategories();
