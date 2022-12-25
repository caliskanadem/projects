//! 1-Console'dan girilen sayilarin ortalamasini bulan programi yaziniz.

// const count = +prompt("Lütfen kaç tane sayi gireceğinizi giriniz:");
// let sum = 0;
// for (let i = 1; i <= count; i++) {
//   const number = +prompt(`Lütfen ${i}. sayiyi giriniz:`);
//   sum += number;
// }
// console.log(`Ortalama: ${sum / count}`);

//! 2-Console'dan girilen taban ve pozitif us degerlerine gore uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

// const taban = prompt("Lütfen taban değerini giriniz:");
// const ust = prompt("Lütfen üs değerini giriniz:");

// let sonuc = 1;
// for (let i = 1; i <= ust; i++) {
//   sonuc *= taban;
// }

// console.log(`Sonuç: ${sonuc}`);

//! 3-Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.

// let number = prompt("Lütfen bir sayi giriniz:");

// let count = 0;
// while (number != 0) {
//   count++;
//   number = Math.trunc(number / 10);
// }

// console.log(`Girilen sayinin basamak sayisi: ${count}`);

//! 4-Kullanicidan 0-100 arasinda bir not isteyen ve girilen not 0-100 arasinda bir deger degilse uyararak yeniden 0-100 arasinda not girmeye zorlayan kodu yaziniz

// let not = prompt("Lütfen 0 ile 100 arasinda bir not giriniz:");

// while (not < 0 || not > 100) {
//   console.log("Lütfen 0 ile 100 arasinda bir değer giriniz!");
//   console.log(not);
//   not = prompt("Lütfen 0 ile 100 arasinda bir not giriniz:");
// }

// console.log(`Girilen not: ${not}`);
