//  * =======================================================
//  !                 ARITMETIK OPERATORLER
// * =======================================================

// console.log(" **** Operators ****");

// const cola = 20;
// const gumm = 5;
// const biscuits = 15;

// const totalPrice = cola + gumm + biscuits;

//  totalPrice++ //? Hata

// console.log("TOTAL PRICE:", totalPrice);

// //? + operatoru String Concatination islemi de yapar.
// console.log("TOTAL PRICE:" + totalPrice); //? String Concatination

// const comments = totalPrice + " TL";
// console.log(comments);

// const commets = 50 + 40 + " TL";
// console.log(commets);

// const firstName = "Ahmet";
// const lastName = "Can";
// console.log(firstName + " " + lastName);

// const s1 = 5,
//   s2 = "4",
//   s3 = "three";

// console.log(s1 + s2); //? 54
// console.log(s1 - s2); //? 1
// console.log(s1 - s3); //? NaN (Not A Number)
// //! String ifadeyi number a cevirmeye calisti fakat mumkun olmadigi icin NaN dondurdu.

// const difference = s1 - s3;
// console.log(difference, typeof NaN); //? NaN'in data type'ı number'dir.

// //* Bir islemin sonucunun NaN olup olmadigini anlamak icin isNaN() fonksiyonu kullanilabilir.
// console.log(isNaN(difference)); //?true

// //? Ornek
// //?-----------------------
// const yearOfBirth = 1920;
// const name = "John";
// console.log(name + " is " + (2022 - yearOfBirth) + " years old");
// console.log(
//   name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old"
// );

//  const date = new Date()
//  console.log(date)

// console.log(`${name} is ${2022 - yearOfBirth} years old`);

//  Carpma islemi ve Ust alma islemi(Multiply,.Pow)
// -------------------------------------------------

// //? ornek
// const pi = 3.14;
//  const r = +prompt("Please enter r:"); //? kullanicidan veri girisi ister fakat string olarak alir
// //! cozumu icin +prompt yazilabilir yada  bu komut kullanilabilir =====>
// const r = Number(prompt("please enter r:"));
// const square = pi * r * r;
// console.log(`Square of Circle: ${square}`);
// console.log(`Square of Circle: ${square.toFixed(2)}`);

// console.log(`Square of Circle: ${Math.floor(square)}`);
// console.log(`Square of Circle: ${Math.ceil(square)}`);
// console.log(`Square of Circle: ${Math.trunc(square)}`);
// console.log(`Square of Circle: ${Math.round(square)}`);

// const randomNumber = Math.random();
// console.log(randomNumber);

// //? 0-100 arasi sayi uretmek istersek

// const rasgele = Math.round(Math.random() * 100); //? 0.12 x 100
// console.log(rasgele);

// Arttirma ve Azaltma (Inch , Dec)
// --------------------------------------

let a = 5;
a++;
console.log(a++);
y = a + 5;
console.log(--y);

let z = 4;
z = z + 5;
z += 10; //? z = z + 10
let k = 20;
k -= 10;
console.log("k:", --k);
console.log({ k });

// 3 katini alma
let b;
b = 4 * 3;
b *= 3; //b = b * 3
// console.log(b);
console.log({ b });
// const number = prompt("please enter a 3-digit number:");
// const ones = number % 10;
// const tens = Math.floor(number / 10) % 10;
// const hundreds = Math.trunc(number / 100);
// console.log(`Hundreds: ${hundreds} ,Tens: ${tens} , Ones: ${ones}`);
// =================================================================
// !                 Karsilastirma Operatorleri
// =================================================================

const num1 = 3;
console.log(num1 == 3); //? True
console.log(num1 === 3); //? True
console.log(num1 === "3"); //!False

const num2 = "3";
console.log(num1 == num2);
console.log(num1 != num2); //! False

const num3 = 5;
num4 = "1";
console.log(num1 > num3); //! False
console.log(num1 <= num3); //? True
console.log(num2 > num4); //? True "3" > "1" ASCII ye gore kiyaslama yapilir

// =================================================================
//  !                       Mantiksal Operatorler
// =================================================================

const v1 = true;
const v2 = false;

// console.log(v1 && v2); //? False deger uretir
// console.log(v1 || v2); //? True deger uretir
// const age = prompt("Please enter your age:");
// const healty = confirm("Are you healty?");
// console.log(age, healty);

// if (age >= 18 && healty == true) {
//   console.log("Ehliyet alabilir");
// } else {
//   console.log("Ehliyet alamaz");
// }

//! Js de 5 adet falsy deger bulunmaktadir
//! Herzaman false sonucu cikar
const nal = null;
const tanimsiz = undefined;
const bos = "";
const sayiDegil = NaN;
const sifir = 0;
const falsy = false;
//! --------------------------------------

console.log(v1 && null); //False
console.log(v1 && 0); //sifir ciktisi varir
console.log(v1 && null && true && true); //null ciktisi verir
// &&'de ilk false degeri bulunca onun degerini dondurur

console.log(Boolean(5)); //true
console.log(Boolean(0)); //false(0 herzaman false deger verir)
console.log(Boolean(-5)); //true
console.log(Boolean(12.4)); //true
//0 haric her deger true dondurur

console.log(v1 || 0); // ||'da ilk true yu bulunca gerisine bakmaz, onun degerini alir

console.log(v1 && 4 && true && 5); //tamami true ise en sonuncunun degerini alir

const num5 = 0;
if (num5 === true) {
  console.log("sayi sifir degildir");
} else {
  console.log("sayi sifirdir");
}

//=======================================
//!         TIP DONUSUMLERI
//=======================================

const dolar = "1000";
const tl = "500";

const totalMoney = Number(dolar) + Number(tl);
console.log(totalMoney);
const totalMoney1 = +dolar + +tl; //stringin basina + konulunca numbere cevirir
const totalMoney2 = parseInt(dolar) + parseInt(tl);
const totalMoney3 = parseFloat(dolar) + parseFloat(tl);
console.log(totalMoney3);

console.log(Number(null)); //? 0
console.log(Number("")); //? 0
console.log(Number("12.3")); //? 12.3
console.log(Number("1ab")); //? NaN
console.log(Number("0b101")); //? 5 (binary sayi sistemi)
console.log(Number("0x10")); //? 16 (hex sayi sistemi)
console.log(String(55));

//=======================================
//!          KARAR DEYIMLERI
//=======================================

//? Consola girilen sayinin pozitif- negatif yada 0 oldugunu tespit yontemi

// const num = Number(prompt("Please enter a number"));
// if (num > 0) {
//   console.log(`${num} is pozitive`);
// } else if (num < 0) {
//   console.log(`${num}) is negative`);
// } else {
//   console.log(`${num} is equal zero`);
// }

//? Console den girIlen 3 tamsayinin en buyugunu yazdiran kodu yazin

// const n1 = +prompt("Number1:");
// const n2 = +prompt("Number2:");
// const n3 = +prompt("Number3:");

// //!   1.yontem

// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} is the biggest number.`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} is the biggest number.`);
// } else if (n3 >= n2 && n3 >= n1) {
//   console.log(`${n3} is the biggest number.`);
// }

// //!   2.yontem

// let biggest = n1;

// if (n2 >= biggest) {
//   biggest = n2;
// }
// if (n3 >= biggest) {
//   biggest = n3;
// }
// console.log(`${biggest} is biggest`);

// //!   3.yontem

// console.log(`The Biggest: ${Math.max(n1, n2, n3)}`);
//-------------------------------------------------------------
const year = 11;
const kindsCount = 3;
const graduate = true;
const langCount = 5;
const increase =
  year >= 10 && kindsCount >= 2 && graduate == true && langCount >= 2;

if (increase === true) {
  console.log("He or she deserves an increased salary");
}

//**************** SWITCH-CASE *******************

// console.log("-------------------------------------");
// console.log(" ***** 4 Islem Hesap Makinasi ****** ");
// console.log("-------------------------------------");
// const s1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem = prompt("Islemi giriniz: +,-,*, /");
// const s2 = +prompt("2.Sayiyi Giriniz:");
// let sonuc = 0;
// switch (islem) {
//   case "+":
//     sonuc = s1 + s2;
//     break;
//   case "-":
//     sonuc = s1 - s2;
//     break;
//   case "*":
//     sonuc = s1 * s2;
//     break;
//   case "/":
//     sonuc = s1 / s2;
//     break;
//   default:
//     alert("Yanlis islem girisi");
//     break;
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

//!===================TERNANY=========================

// const desc = age >= 18 ? "yetiskin" : "cocuk2";
//speed<90? "yavas" : speed<120? "normal" : "hizli"

//* Ornek : kaldi-gecti

const grade = +prompt("Please enter your grade:?");
const result =
  grade >= 50
    ? `You are Succesfull with ${grade}`
    : `You are Failed with ${grade}`;
// console.log(`${result} with ${grade}`);
console.log(result);
const gender = "male";
const age = 20;
const healty = true;
const status = "teacher";

age >= 18 && gender === "male" && healty === true && status !== "status"
  ? alert("Military service is required")
  : alert("Military service is not required");
//! ❤ windows tusu + .  ile emoji eklenebiliyor
