function panggilSortdanReverse() {
  var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
  console.log("Sebelumnya : "+ angka);
  bil_ascending = angka.sort();
  console.log("Ascending : "+bil_ascending );
  bil_descending = bil_ascending.reverse();
  console.log("Descending : "+bil_descending);
}

panggilSortdanReverse();
