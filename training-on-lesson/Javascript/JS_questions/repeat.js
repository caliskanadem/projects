/* // *********  Sorular  ***********
 // */

//?  1- Bir sayının tek mi çift mi olduğunu consol'a yazdıran koşulu yazınız.
// const sayi = 32;
// if (sayi % 2 === 0) {
//   console.log(`${sayi} cift sayidir`);
// } else if (sayi % 2 === 1) {
//   console.log(`${sayi} tek sayidir`);
// }

//? 2- Bir sayının 0 ile 100 arasında olup olmadığını konsola yazdıran ternary yapıyı yazınız.
// const sayi = 555;
// 0 < sayi && sayi < 100 ? console.log("saglar") : console.log("saglamaz");

//? 3- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız.
// const yas = 17;
// yas < 18 ? console.log(`kucuktur`) : console.log(`buyuktur`);

//? 4- Haftanın günlerinin numaraları aşağıda belirtilmiştir. Buna göre belirtilen bir sayının hangi güne karşılık gelidiğini switch case yapı ile konsola yazdıran kodu yazınız.
//? pazar 0
//? Pazartesi 1
//? Salı 2
//? Çarşamba 3
//? Perşembe 4
//? Cuma 5
//? Cumartesi 6
// const gun = 2;
// switch (gun) {
//   case 1:
//     console.log(`pazartesi`);
//     break;
//   case 2:
//     console.log(`sali`);
//     break;
//   case 3:
//     console.log(`carsamba`);
//     break;
//   case 4:
//     console.log(`persembe`);
//     break;
//   case 5:
//     console.log(`cuma`);
//     break;
//   case 6:
//     console.log(`cumartesi`);
//     break;
//   case 0:
//     console.log(`pazar`);
//     break;
//   default:
//     console.log(`Lutfen dogru gun giriniz`);
//     break;
// }

//? 5-Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız?
//? Not:
//? 90'dan büyükse AA.
//? 80'den büyük yada 90'a eşitse AB,
//? 70'den büyük yada 80'a eşitse BB,
//? 60'den büyük yada 70'a eşitse BC,
//? 50'den büyük yada 60'a eşitse CC,
//? 40'den büyük yada 50'a eşitse CD,
//? 30'den büyük yada 40'a eşitse DD,
//? 30'dan küçük yada eşitse FF ,
// not = 75;
// if (not > 90 && not <= 100) {
//   console.log(`${not} puan AA harfine karsilik gelir`);
// } else if (not > 80) {
//   console.log(`${not} puan AB harfine karsilik gelir`);
// } else if (not > 70) {
//   console.log(`${not} puan BB harfine karsilik gelir`);
// } else if (not > 60) {
//   console.log(`${not} puan BC harfine karsilik gelir`);
// } else if (not > 50) {
//   console.log(`${not} puan CC harfine karsilik gelir`);
// } else if (not > 40) {
//   console.log(`${not} puan CD harfine karsilik gelir`);
// } else if (not > 30) {
//   console.log(`${not} puan DD harfine karsilik gelir`);
// } else if (30 > not) {
//   console.log(`${not} puan FF harfine karsilik gelir`);
// } else {
//   console.log(`${not} Gecerli bir not deil. yanlis giris yaptiniz`);
// }

//? 6- Artık yıl sorusu
//? Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.
//? Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır.
//? BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.
//? Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.
// const yil = +prompt(`lutfen bir yil giriniz`);
// if (yil % 400 === 0) {
//   console.log(`${yil} artik yildir`);
// } else if (yil % 4 === 0 && yil % 4 !== 0) {
//   console.log(`${yil} artik yildir`);
// } else {
//   console.log(`${yil} artik yil degildir`);
// }

//? 7- kullanıcıdan bir yıl ve ay alıyoruz o ayın kaç çektiğini konsola yazdıran kodu yazınız.
//? (2024'ün 2. ayı 29 çeker.)
const yil = 2023;
const ay = 2;
if (ay == 2) {
  if (yil % 400 === 0 && yil % 4 === 0 && yil % 100 !== 0) {
    console.log(`${yil} yilinin ${ay} ayi 29 ceker`);
  } else {
    console.log(`${yil} yilinin ${ay} ayi 28 ceker`);
  }
} else if (
  ay == 1 ||
  ay == 3 ||
  ay == 5 ||
  ay == 7 ||
  ay == 8 ||
  ay == 10 ||
  ay == 12
) {
  console.log(`${yil} yilinin ${ay} ayi 31 çeker.`);
} else if (ay == 4 || ay == 6 || ay == 9 || ay == 11) {
  console.log(`${yil} yilinin ${ay} ayi 30 çeker.`);
}
