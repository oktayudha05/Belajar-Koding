//contoh higher function

const angka = [-1, 3, 5, 6, 2, 9, -5, 0, 8, 7];

//!mencari angka yg >= 3
//*for

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);


//*filter -> hanya untuk menyaring isi tanpa di otak-atik

// const newAngka = angka.filter ( function(a) {
//     return a >= 3;
// });
// console.log(newAngka);

//*filter + arrow function

// const newAngka = angka.filter (a => a >= 3);
// console.log(newAngka);


//* map -> nyaring isinya tapi di otak atik isinya
//!kalikan semua angka dengan dua

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

//* Reduce -> melakukan sesuatu terhadap semua array
//! jumlahin elemen array
// -1 + 3 + 5 + 6 + 2 + 9 + -5 + 0 + 8 + 7

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

//* Method Chaining -> gabungin semua metode diatas
//! cari angka > 5
//! kalikan 3 
//! jumlahkan

const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);
console.log(hasil);


