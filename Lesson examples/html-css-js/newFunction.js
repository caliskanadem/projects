//!soru 1
// const sayi1 = +prompt("islem yapmak istediginiz sayiyi girin");
// const islem = prompt("yapmak istediginiz islemi girin; * , / , + , - ");
// const sayi2 = +prompt("islem yapmak istediginiz ikinci sayiyi girin");
// if (islem === "+") {
//   console.log(sayi1 + sayi2);
// } else if (islem === "-") {
//   console.log(sayi1 - sayi2);
// } else if (islem === "*") {
//   console.log(sayi1 * sayi2);
// } else if (islem === "/") {
//   console.log(sayi1 / sayi2);
// } else {
//   console.log("Yanlis deger verdiniz");
// }
//!soru 2
// let day = prompt("enter a day");
// switch (day) {
//   case "pazartesi":
//   case "sali":
//   case "carsamba":
//   case "persembe":
//     console.log("InClass");
//     break;
//   case "cuma":
//     console.log("TeamWork");
//     break;
//   case "cumartesi":
//     console.log("Inclass + Workshop");
//     break;
//   case "pazar":
//     console.log("Self-Study");
//     break;
//   default:
//     console.log("Yanlis gun girdiniz");
//     break;
// }
//!soru 3
// const salary = Number(prompt("Please give your salary"));
// console.log(
//   salary > 5000
//    ? `${(salary * 1.1).toFixed(1)} is your salary`
//     : `${(salary * 1.5).toFixed(1)} is your salary`
// );
//!soru 4
// const gelir = Number(prompt("gelirinizi giriniz"));
// const gider = Number(prompt("giderinizi giriniz"));
// const asgari = 5500;
// console.log(
//   asgari > gelir - gider ? "Kredi verilmez 😢" : "Kredi verilebilir 😁"
// );
//!Kullanicidan 0-100 arasinda bir not isteyen ve girilen not 0-100 arasinda bir deger degilse uyararak yeniden 0-100 arasinda not girmeye zorlayan kodu while dongusu ile javascript dili kullanarak yaziniz
newFunction();
function newFunction() {
  let note = prompt("Lütfen 0 ile 100 arasında bir not giriniz:");

  while (note < 0 || note > 100) {
    note = prompt("Lütfen 0 ile 100 arasında bir not giriniz:");
  }
  console.log(`Girilen not: ${note}`);
}
