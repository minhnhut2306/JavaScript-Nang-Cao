function goSchool() {
    console.log("b4 Đang di chuyển");
    setTimeout(function() {
     console.log("Đã đến trường");
    },4000)
}
function quanao() {
    console.log("b3 Đang thay quần áo");
    setTimeout(function() {
     console.log("Đã  thay xong");
     goSchool();
    },3000)
}
function danhrang(){
    console.log("b2 Đang đánh răng");
    setTimeout(function() {
     console.log("Đã đánh răng xong");
     quanao();
    },2000)
}
function ThucDay() {
    console.log("Ngáp");
    setTimeout(function() {
    console.log("b1 Đã ngủ dậy")
    danhrang();
    },1000)
}

ThucDay();