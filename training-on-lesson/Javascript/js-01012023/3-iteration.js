//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********");

//?------------------ORNEK---------------------
//? Dizideki herbir fiyati konsola yazdiriniz

const prices = [100, 250, 50, 89];
for (let price of prices) {
  console.log(price);
}
console.log("********");
prices.forEach((price) => console.log(price));

//?------------------ORNEK---------------------
//?Price dizisindeki degerlerin toplamini consola yazdiriniz
let sum = 0;
prices.forEach((price) => (sum += price));
console.log("SUM:", sum);

//! NOT: forEach metodu void metottur (herhangi bir deger dondurmez)
console.log(prices.forEach((price) => (sum += price))); //! undefined

//?------------------ORNEK---------------------
//? prices dizisindeki her bir ara toplam degerini konsola forEach ile bastiriniz
//? ayrica her bir fiyata %10 zam yapiniz

let total = 0;
prices.forEach((p, i, arr) => {
  //! forEach'te 1.yazilan value, 2.yazilan index, 3.yazilan array olur olur!!!
  total += p;
  console.log(` ${i + 1}.iteration: ${total}`);
  arr[i] = Math.trunc(p * 1.1); //! normalde bu dogru bir kullanim degil cunku diziyi bozuyor
});
console.log(prices);

//* =======================================
//*            MAP METHOD
//* =======================================

//?------------------ORNEK---------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const upperNames = names.map((n) => n.toLocaleUpperCase());

console.log(upperNames);
console.log(names);

console.log(names.map((name) => name.toLocaleUpperCase()));

//?------------------ORNEK---------------------
//? tlPrices dizisindeki rakamlarin euro ve dolar karsiliklarini hesaplatarak
//?yeni dizilere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toPrecision(3)));
const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toPrecision(3)));
console.log(euroPrices);
console.log(dolarPrices);

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//* =======================================
//*             FILTER METHOD
//* =======================================

//* =======================================
//*             REDUCE METHOD
//* =======================================

//* =======================================
//*               OTHERS
//* =======================================
