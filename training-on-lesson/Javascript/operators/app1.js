let a = 45;
console.log(a);
let name = "mehmet";
console.log(name);
let b = 25;
let c = 53;
let toplam = a + b + c;
console.log(toplam);
const x = 25;
let y = 35;
const toplam1 = x + y;
console.log(toplam1);
console.log("toplam1 =", toplam1);
console.log(`toplam1 = ${toplam1}`);
const surname = "caliskan";
const x1 = 34;
const x2 = 56;
console.log(23 + 45 + x1 + surname + 45 + 56 + x2); //todo string e kadar olani toplar, gerisini yan yana yazar
console.log(surname + 45 + 56 + x2 + 75 + 85 + 105);

let y1 = 3;
let y2 = "jhonny";
let toplam2 = y1 + y2;
console.log(toplam2);
console.log(45 + Number("35")); //? string i number e cevirip topladik
console.log(45 - "35");
console.log(isNaN(toplam2));

let a1 = 5;
console.log(a1++); //once yazdirir sonra arttirir
console.log(a1);

let a2 = 7;
console.log(a2++);
console.log(++a2);
let a3 = 11;
a3--;
console.log(a3--);
console.log(a3);

// let information = Number(prompt("enter 3 digits number"));
// console.log(information);

// let ones = information % 10;
// console.log(ones);

// let tens = Math.floor(information / 10) % 10;
// console.log(tens);

// let hundreds = Math.floor(information / 100);
// console.log(hundreds);

// console.log(
//   `${information} sayinin yuzler basamagi = ${hundreds}, onlar basamagi = ${tens}, birler basmagi= ${ones}'tir`
// );

const s1 = 24;
const s2 = 12;
const s3 = "Haydi";
const s4 = "24";
const s5 = "Haydi";
console.log(s1 == s4);
console.log(s1 === s4);
console.log(s3 == s5);
console.log(s1 != s4); //string icindeki sayiyi integer ile ayni gorur
console.log(s1 !== s4); //tam olarak esitmi diye sordugu icin false dedi cunku string esir deil integer

// a || b || c || d;

// a && b && c && d;

if ((s1 == s4 && s3 == s5) || s2 !== 12) {
  console.log("Basardim");
} else {
  console.log("Basaramadim");
}

let not1 = Number(prompt("enter your vize1"));
console.log(not1);
let not2 = Number(prompt("enter your vize2"));
console.log(not2);
let final = Number(prompt("enter your final"));
console.log(final);
if (not1 > 45 && not2 > 50 && final > 35) {
  console.log("Gectin");
} else if (final >= 50) {
  console.log("Gectin");
} else {
  console.log("Kaldin");
}
