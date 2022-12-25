let simdi = new Date(); //simdiki tarih-saat

//?         GET METHODS
sonuc = simdi;
sonuc = simdi.getDate(); //tarih
sonuc = simdi.getDay(); //tarih-gun
sonuc = simdi.getFullYear(); //yil
sonuc = simdi.getHours(); //saat
sonuc = simdi.getTime();

//?        SET METHODS
simdi.setFullYear(2025); //yil guncelle
simdi.setMonth(7); //ay guncelle
simdi.setDate(15); //gun guncelle
sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();
sonuc = simdi - dogumTarihi;
let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000; //saniye
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;

console.log(sonuc);
console.log(typeof sonuc);
