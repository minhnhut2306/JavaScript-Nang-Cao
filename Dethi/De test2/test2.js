function add() {
  var date = document.getElementById("adddate").value.trim();
  var month = document.getElementById("addmonth").value.trim();
  var year = document.getElementById("addyear").value.trim();
  var dayElement = document.getElementById("day");
  if (date === "" || month === "" || year === "") {
    alert("vui lòng nhập đầy đủ thông tin ");
  } else {
    var day = {
      day: parseInt(date),
      month: parseInt(month) - 1,
      year: parseInt(year),
    };
    var newdate = moment(day).format("YYYY-MM-DD");
    var hienthi =
      newdate +
      "<br><span style='margin-top: 20px; display: inline-block;'></span>";
    dayElement.innerHTML = hienthi;
  }
}
//câu 2
function converString() {
  var inputString = document.getElementById("inputString").value;
  var pattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  var check = pattern.test(inputString);
  var result = document.getElementById("result");
  result.innerText = check ? "TRUE" : "FALSE";
}

// câu 3
const student = {
  masv: "SV001",
  hoten: "Nguyễn Văn A",
  lop: "12A1",
  diemtb: 8.5,
  xeploai() {
    if (this.diemtb < 5) {
      return "Học lực Yếu";
    } else if (this.diemtb >= 5 && this.diemtb < 7) {
      return "Học lực Trung bình";
    } else if (this.diemtb >= 7 && this.diemtb < 8) {
      return "Học lực Khá";
    } else {
      return "Học lực Giỏi";
    }
  },
};

console.log(`Mã sinh viên: ${student.masv}`);
console.log(`Họ và tên: ${student.hoten}`);
console.log(`Lớp: ${student.lop}`);
console.log(`Điểm trung bình: ${student.diemtb}`);
console.log(`Xếp loại: ${student.xeploai()}`);
// câu 4
function httpGet(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function loadImage(url, imgId) {
    httpGet(url, function (xmlHttp) {
        document.getElementById(imgId).src = xmlHttp.responseURL;
    });
}

loadImage('https://picsum.photos/200/300', 'img_1');
loadImage('https://picsum.photos/200/300', 'img_2');
loadImage('https://picsum.photos/200/300', 'img_3');
