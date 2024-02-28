const ageThere = [...new Set([...ageOne, ...ageTwo])];
console.log(ageThere);

// câu 2
let ageFinal = [];

for (let i = 0; i < ageThere.length; i++) {
  if (ageThere[i] % 2 === 0) {
    ageFinal.push(ageThere[i]);
  } else {
    ageFinal.push(ageThere[i] ** 2);
  }
}

console.log(ageFinal);

// câu 3

const arrange = ageFinal.sort((a, b) => a - b);
console.log(arrange);

// câu 4
const result = ageOne.length > ageTwo.length ? ageOne : ageTwo;
console.log(result);

// câu 5
let sum = 0;
ageFinal.forEach((element) => {
  if (element >= 10) {
    sum += element;
  }
});
console.log(sum);

// câu 6
const paymentButton = document.getElementById("paymentButton");
const message = document.getElementById("message");
paymentButton.addEventListener("click", () => {
  message.style.display = "block";
});
message.addEventListener("click", () => {
  message.style.display = "none";
});

// câu 7
const gameEvent = new Map([
  [10, "Ghi bàn"],
  [25, "Thẻ vàng"],
  [40, "Thẻ đỏ"],
  [60, "Ghi bàn"],
  [30, "Ghi bàn"],
  [55, "Thẻ vàng"],
  [80, "Thẻ đỏ"],
  [89, "Thay người"],
  [92, "Ghi bàn"],
]);

let half = 1;
for (let [minute, event] of gameEvent) {
  if (minute > 45) {
    half = 2;
  }
  console.log(`Hiệp ${half}: ${event}`);
}

//câu 8
// Lấy ra thời gian cuối cùng
const endTime = Math.max(...gameEvent.keys());

// Tính trung bình mỗi sự kiện cách nhau bao nhiêu phút
const eventTimes = [...gameEvent.keys()];
const totalEvents = eventTimes.length;
const totalTime = endTime - eventTimes[0];
const averageTime = totalTime / totalEvents;
console.log(`Thời gian trung bình mỗi sự kiện cách nhau: ${averageTime} phút`);

class Person {
    constructor(name, address, phone, cmnd) {
      this.name = name;
      this.address = address;
      this.phone = phone;
      this.cmnd = cmnd;
    }
    info() {
      return `Tôi tên là ${this.name}, đang sống tại ${this.address}, số điện thoại ${this.phone}, số cmnd là ${this.cmnd}`;
    }
  }
  
  class User extends Person {
    constructor(name, address, phone, cmnd, dateSalary) {
      super(name, address, phone, cmnd);
      this.dateSalary = dateSalary;
    }
  
    set name_user(name) {
      if (name.length < 4) {
        console.log("Vui lòng nhập tên dài hơn 4 kí tự");
      } else {
        console.log(`Chào mừng ${name} tham gia hệ thống FPT`);
      }
    }
  }
  
  const user = new User(
    "John",
    "123 Street",
    "123456789",
    "123456789",
    "2024-02-28"
  );
  user.name_user = user.name; 
  