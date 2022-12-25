//? 1."Elma,Armut,Muz,Cilek" elemanlarina sahip bir dizi olusturunuz.
let meyveler = ["Elma", "Armut", "Muz", "Cilek"];

//? 2. dizi kac elemanlidir?
console.log(meyveler.length);

//? 3. dizinin ilk ve son elemani nedir?
console.log(meyveler[0]); //* Elma
console.log(meyveler[meyveler.length - 1]); //* Cilek

//? 4. elma dizinin bir elemani midir?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

//? 5. kiraz meyvesini listenin sonuna ekleyiniz.
// meyveler[meyveler.length] = "Kiraz";
meyveler.push("Kiraz");
console.log(meyveler);

//? 6. dizinin son 2 elemanini siliniz
// meyveler.pop()
// meyveler.pop()
meyveler.splice(meyveler.length - 2, 2);
console.log(meyveler);

//? 7. asagidaki bilgileri dizi icerisinde saklayiniz ve her ogrencinin yasini ve not ortalamasini hesaplayiniz
/* 
ogrenci 1: yigit bilgi 2010 (70,60,80)
ogrenci 2: ada bilgi 2012 (80,80,90)
ogrenci 3: ahmet turan 2009 (60,60,70)
*/
let ogr1 = ["yigit", "bilgi", 2010, [70, 60, 80]];
let ogr2 = ["ada", "bilgi", 2012, [80, 80, 90]];
let ogr3 = ["ahmet", "turan", 2009, [60, 60, 70]];

//* yaslari:
// let simdi = new Date();

// let yas1 = simdi.getFullYear() - ogr1[2];
// console.log(yas1);

// let yas2 = simdi.getFullYear() - ogr2[2];
// console.log(yas2);

// let yas3 = simdi.getFullYear() - ogr3[2];
// console.log(yas3);

//* yaslari: 2.yol:
let ogrenciler = [ogr1, ogr2, ogr3];
let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];
console.log(yigit_yas, ada_yas, ahmet_yas);

//* not ortalamalari
// let ort1 = (ogr1[3][0] + ogr1[3][1] + ogr1[3][2]) / (ogr1.length - 1);
// console.log(ort1);

// let ort2 = (ogr2[3][0] + ogr2[3][1] + ogr2[3][2]) / (ogr2.length - 1);
// console.log(ort2);

// let ort3 = (ogr3[3][0] + ogr3[3][1] + ogr3[3][2]) / (ogr3.length - 1);
// console.log(ort3);

//* not ortalamalari 2.yol:
let yigit_not =
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / (ogr1[3].length);
let ada_not =
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / (ogr1[3].length);
let ahmet_not =
  (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / (ogr1[3].length);
console.log(yigit_not.toFixed(1), ada_not.toFixed(1), ahmet_not.toFixed(1));
