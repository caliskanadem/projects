//!              JS ERRAY METHODS

let ogrenciler = ["cinar", "yigit", "ada"];

sonuc = ogrenciler.length;

//* erray to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join("-");

//* eleman silme
sonuc = ogrenciler.pop(); //* son eleman silinir ve silinen elemani ekrana yazdirir
sonuc = ogrenciler.shift(); //* ilk elemani silinir ve silinen elemani ekrana yazdirir

sonuc = ogrenciler.push("sena"); //* dizinin sonuna eleman eklenir

sonuc = ogrenciler.unshift("sena"); //* dizinin basina eleman ekler
// console.log(sonuc);
// console.log(ogrenciler);

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes"];
// sonuc = markalar1.concat(markalar2, markalar3);

console.log(markalar1.indexOf("toyota"));

sonuc = markalar1.splice(0, 1, "bmw", "audi"); //* 0. indexten baslayarak markalar2 nin birinci dizi elemanini siler ve 
0. diziden itibaren yazilanlari diziye dahil eder (hem eleman eklemek hemde silmek icin kullanilabilir)

console.log(sonuc);
console.log(markalar1);
