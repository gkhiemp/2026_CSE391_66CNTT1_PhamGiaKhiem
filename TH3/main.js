let avg =0;
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}
let a = tinhDiemTrungBinh(7, 8, 9);
function xepLoai(avg) {
  if (avg >= 8) {
  console.log("Giỏi");
} else if (avg >= 6.5) {
  console.log("Khá");
} else if (avg >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}
}

