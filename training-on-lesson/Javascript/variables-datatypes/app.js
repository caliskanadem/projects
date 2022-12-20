console.log("*** Data Types ***");
// ========= CONST =========

const fs = "Cohort 13";
console.log(fs);

const sayi = 20;
console.log(sayi);
console.log(typeof sayi);

const sayi1 = "33";
console.log(sayi1);
console.log(typeof sayi1);

//sayi1 = 55; //! Assignment to constant variable

// const pi;  //! Missing initializer in const // bu sekilde deger atamasi yapilamaz, en basta deger atamak gerek
// pi=3.14

const s1 = "Hello";
const s2 = "FS13";
console.log(s1 + s2);

const n1 = "5";
const n2 = "10";
console.log(n1 + n2);

//const n1 = 5;  ayni alan (scope) icinde ayni isimde birden fazla degisken tanimlanamaz

//n2 = n2 + n1; //! Error

//? ======== LET ========

let dil = "Javascript";
console.log(dil);
dil = "Java";
console.log(dil);

dil = true;
console.log(dil, typeof dil);
dil = 3.14;
console.log(dil, typeof dil);

let cohort;
console.log(cohort); // undefined (tanimsiz, type'i yok)

cohort = 3;
console.log(typeof cohort);

//let cohort = "FS13"; ayni alanda ayni isimle birden fazla degisken tanimlanamaz

let num1 = 5;
let num2 = 3;
let result = num1 + num2; //? 8
console.log(++result); //? 9

count = 55; //! deger girmezsek var olarak tanimlanir
console.log(count);
count = 22;
console.log(count, typeof count);

//? ======== VAR ========

var x = 11;
console.log(x); // modern Js de var fazla kullanilmaz,  genellikle const ve let kullanilir

// block demek if-else, swich-case, fonksiyon vb yapilarin ic alanidir
{
  let a = 2;
  const b = 3;
  console.log(a, b);
}

//console.log(a, b); //! a ve b tanimli degil diyecek cunku ikiside blok icinde tanimli

{
  // todo  burasi local alandir.
  var c = 99; // var ile tanimlanan degisken herzaman globaldir, heryerden erisilebilir
  console.log(c);
}
console.log(c);
