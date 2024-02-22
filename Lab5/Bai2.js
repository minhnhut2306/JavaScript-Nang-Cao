function ThucDay() {
  return new Promise((resolve) => {
    console.log("b1 đã thức dậy");
    resolve();
  });
}
function DanhRang() {
  return new Promise((resolve) => {
    console.log("b2 đang đánh răng ");
    setTimeout(function () {
      console.log("b2 đã đánh xong");
      resolve();
    });
  });
}
function ThayQuanAo() {
  return new Promise((resolve) => {
    console.log("b3 đang thay quan ao");
    setTimeout(function () {
      console.log("b3 đã thay quan áo xong");
      resolve();
    });
  });
}
function DiHoc() {
  return new Promise((resolve) => {
    resolve();
  });
}

ThucDay()
  .then(DanhRang)
  .then(ThayQuanAo)
  .then(DiHoc)
  .then(() => {
    console.log("b4. Đang di chuyển...");
    return new Promise((resolve) => setTimeout(resolve, 4000));
  })
  .then(() => {
    console.log("Đã đến trường!");
  })
  .catch((error) => console.error(error));
