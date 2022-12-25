//! 1- Kendisine gonderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapin

// let kelime = prompt("bir kelime yazin");
// let sayi = +prompt("Kelime kac kere yazilsin?");
// function yazdir(kelime, sayi) {
//   for (let i = 1; i <= sayi; i++) {
//     console.log(kelime);
//   }
// }
// yazdir(kelime, sayi);

//! 2- Dikdortgenin alani ve cevresini hesaplayan fonksiyonu yaziniz

// function cevre(kisaKenar, uzunKenar) {
//   let cevre = (kisaKenar + uzunKenar) * 2;
//   console.log(cevre);
// }

// function alan(kisaKenar, uzunKenar) {
//   let alan = kisaKenar * uzunKenar;
//   console.log(alan);
// }

// alan(4, 7);
// cevre(4, 7);

//? 2.yol:

// function alanCevreHesapla(kisaKenar, uzunKenar) {
//   let alan = kisaKenar * uzunKenar;
//   let cevre = (kisaKenar + uzunKenar) * 2;
//   return `alan: ${alan} cevre: ${cevre}`;
// }
// let sonuc = alanCevreHesapla(7, 10);
// console.log(sonuc);

//! 3- yazi tura uygulamasini fonksiyon olarak yapiniz

// function yaziTuraAt() {
//   let random = Math.random(); //* 0-1 arasinda sayi uretir
//   if (random < 0.5) {
//     console.log("Yazi");
//   } else {
//     console.log("Tura");
//   }
//   console.log(random);
// }
// yaziTuraAt();

//! 4- kendisine gonderilen bir sayinin tam bolenlerini dizi seklinde donduren fonksiyonu yaziniz

// function bolum(sayi) {
//   let sayilar = [];
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       sayilar.push(i);
//     }
//   }
//   return sayilar;
// }
// console.log(bolum(20));
// console.log(bolum(35));

//! 5- degisken sayida parametre alan toplam isminde bir fonksiyon tanimlayiniz

// function toplam() {
//   let sonuc = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sonuc += arguments[i];
//   }
//   return sonuc;
// }
// // console.log(toplam(2, 5, 7)); //*7 gozardi edilir
// console.log(toplam(2, 5));
// console.log(toplam(2, 5, 7, 8));
