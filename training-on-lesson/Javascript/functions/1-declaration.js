//! =========FUNCTIONS==========

function yazdir() {
  console.log("Hello");
}
yazdir();

function topla(sayi1, sayi2) {
  console.log("Toplam:", sayi1 + sayi2);
}
topla(12, 5);
topla(5, 8);
//* Ornek 1:
//*************************************** */
//Declaration

function print() {
  console.log("Hello");
}
print();

//* Ornek 2:
//*************************************** */

function greet(firstName, lastName = "noName") {
  console.log(`Hi ${firstName} ${lastName}`);
}
//? =====Invoke Examples=====
greet("Sabata", `2288`);
greet("Sercan", `Yilmaz`);
greet("Mariam", `Harold`);

// const firstName = prompt("Your name:");
// const lastName = prompt("Your surname:");
// greet(firstName, lastName); //? JS de fonksiyonlar parametrelere degiskenleri degil onlarin degerlerini aktarir
greet("adem");
//! Bir parametreyi cagirma sirasinda kullanmaz isek yerine default parametre atayabiliriz. Ornekteki lastName parametresi default olarak `noName` olarak atanmistir

//* Ornek 3:
//**************************************** */

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  return `${name}'s age is ${age}`;
}
// const elif = calculate("Elif", 2000);
// console.log(elif);
console.log(calculate("Elif", 2000));
//! -----------------------------------------
function topla(s1, s2) {
  const toplam = s1 + s2;
  return toplam;
}
const x = topla(2, 3);
console.log(x);

//!-------------------------------------------

//! kontrolden girilen bir sayinin tek veya cift oldugunu hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar ile yaziniz

//* Ornek 4:
//****************************************** */

function oddOrEven(num) {
  //   return num % 2 ? "Odd" : "Even"; //! 0 `falsy` bir deger oldugu icin 2 ye bolumunden kalan 0 sa `false` yani cift demektir
  //   return num % 2==0 ? "Even" : "Odd"; //!burada ise sadece 0 a esitse cifttir diye biz belirttik. oyuzden hangi ciktiyi once yazdigimiz farketmedi

  //?alternative
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const number = +prompt("please enter a number to check odd or even");
const oddEven = oddOrEven(number);
console.log(`${number} is ${oddEven}`);
