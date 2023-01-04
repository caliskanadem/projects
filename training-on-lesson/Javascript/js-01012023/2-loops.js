//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******");

//? ---------------ORNEK-------------------
//? grades'in ortalamasini hesaplayiniz

const grades = [55, 77, 23, 89, 100, 44, 33];

let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum = sum + grades[i];
}
console.log((sum / grades.length).toFixed(2));

const arr = [-5, 15, 22, -4, 45, 78];
let negatives = [];
let positives = [];

for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    negatives.push(arr[j]);
  } else {
    positives.push(arr[j]);
  }
}
console.log(positives);
console.log(negatives);

//* =========================================
//*             FOR-IN LOOP
//* =========================================

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findStudent = (name) => {
  let counter = 0;
  for (const i in students) {
    if (name === students[i]) {
      counter++;
    }
  }
  if(!counter){ //? !counter: counter false oldugunda demektir 
  return `${name} can not bee found`
}else{
    `${name} found ${counter} times`
}
console.log(findStudent("mehmet"));
//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

//* =========================================
//*            FOR-OF LOOP
//* =========================================
