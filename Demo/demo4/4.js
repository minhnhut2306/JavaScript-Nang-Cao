// Định nghĩa hàm để thực hiện yêu cầu HTTP GET tới URL đã chỉ định
function httpGet(url, callback) {
  // Tạo một đối tượng XMLHttpRequest mới
  var xhr = new XMLHttpRequest();

  // Định nghĩa một hàm để xử lý các thay đổi trong trạng thái của yêu cầu
  xhr.onreadystatechange = function () {
    // Kiểm tra nếu yêu cầu đã hoàn thành và thành công
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Gọi hàm callback với đối tượng XMLHttpRequest làm đối số
      callback(xhr);
    }
  };

  // Mở yêu cầu với phương thức GET và URL đã chỉ định
  xhr.open("GET", url, true);

  // Gửi yêu cầu
  xhr.send(null);
}

// Gọi hàm httpGet để lấy ảnh đầu tiên
httpGet("http://picsum.photos/200/300", (data) => {
  // Ghi nhận đối tượng XMLHttpRequest vào console
  console.log(data);

  // Thiết lập thuộc tính src của phần tử ảnh đầu tiên (#img_1) thành URL phản hồi
  document.querySelector("#img_1").setAttribute("src", data.responseURL);

  // Gọi lại hàm httpGet để lấy ảnh thứ hai
  httpGet("http://picsum.photos/200/300", (data) => {
    // Thiết lập thuộc tính src của phần tử ảnh thứ hai (#img_2) thành URL phản hồi
    document.querySelector("#img_2").setAttribute("src", data.responseURL);

    // Gọi lại hàm httpGet để lấy ảnh thứ ba
    httpGet("http://picsum.photos/200/300", (data) => {
      // Thiết lập thuộc tính src của phần tử ảnh thứ ba (#img_3) thành URL phản hồi
      document.querySelector("#img_3").setAttribute("src", data.responseURL);
    });
  });
});
