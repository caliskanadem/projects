let isim = "Ahmet"; //? Global Scope
function yazdir() {
  let isim = "Ayse";
  let yas = 20;
  console.log(isim, yas);
}
yazdir();
// console.log(yas); //! yas function da tanimlandigi icin globalde ulasilamaz
console.log(isim); //? Global scope taki isim degiskenine ulasabildi ve onu yazdirdi

if (true) {
  let cinsiyet = "kadin";
  let isim = "Zeynep";
  console.log(isim, cinsiyet);
}
console.log(isim);

//! Fonksiyonlar kendi scope alanlarini olusturur
