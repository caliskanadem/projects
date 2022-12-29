// console.log("String Methods");
// let str1 = "This is a string";
// let str2 = "This is a string";
// let str3 = "This is a string";
// let str4 = new String("This is a string");

// console.log(typeof str1);
// console.log(typeof str4);

// let str1 = "Clarusway";
// let str2 = "School";
// let str3 = str1 + " " + str2;
// let str4 = str1.concat(" ", str2);

// console.log(str1.length);

// let str = `I\`m a string`;

// let str1 =`Hell"o" "World'`
// let str = "Hello World";

// console.log(str[str.length - 3]);

// console.log(str[0]);

// let dizi = "clarusway";
// for (let i = 0; i < dizi.length - 1; i++) {
//   console.log(dizi[i]);
// }
// let str = "Hello World";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// newFunction();
// function newFunction() {
//   let a = 5;
//   let b = a;
//   console.log({ a }, { b });
//   a = 10;
//   console.log({ a }, { b });
// }

// alert("Merhaba\tDunya")
// console.log("Merhaba\tDunya");
// console.log("Merhaba\0Dunya");
// console.log("Merhaba\nDunya");

// let str = "Clarusway";
// console.log(str.substring(1, 5));
// console.log(str.slice(-8, -4));
// console.log(str.substring(-5, 8));
// console.log(str.slice(5));
// console.log(str);
// console.log(str.slice(-8, -4));
// console.log(str.slice(2, -4));
// console.log(str.slice(0, 2));
// console.log(str.substring(2));

// //* concat()

// let str1 = "Clarusway";
// let str2 = "Full";
// let str3 = "stack";
// const result = str1.concat(" Cohort 13 ", str2, " JS season ", str3);
// console.log(result);

// //* includes()

// let email = `mark.mclarusway`;
// console.log(email.includes(`@`));
// if (email.includes(`@`)) {
//   console.log(`Email is valid`);
// } else {
//   console.log(`Invalid email`);
// }
// console.log(email.indexOf(`@`));

// let email = `mark.mclarusway`;
// console.log(email.indexOf(`@`));
// if (email.indexOf(`@`) !== 1) {
//   console.log(`Email is valid`);
// } else {
//   console.log(`Invalid email`);
// }
// console.log(email.indexOf(`@`));

// let email = `mark.m@clarusway.com`;
// console.log(email.indexOf(`@`, email.indexOf(`@`) + 1));
// console.log(email.indexOf(`.com`, email.indexOf(`@`) + 1));

// let str = `you do not KNOW what you do not know until you know.`;
// console.log(str.indexOf("know", str.indexOf("know") + 1));
// console.log(str.indexOf("KNOW"));

// let str = `you do not KNOW what you do not know until you know.`;

// console.log(str.lastIndexOf("t"));
// console.log(str.lastIndexOf("t", 38));

let str = "Mr Brown has a brown house and a brown car";
let newstr = str.replace("brown", "red");
// let newstr2=str.replace(/brown/i , "red")
let newstr2 = str.replace(/brown/g, "red");
let newstr3 = str.replace(/brown/gi, "red");

console.log(newstr3);
