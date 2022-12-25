function selamlama(msg) {
  console.log(msg);
}

selamlama("selam");
selamlama("merhaba");
selamlama("iyi gunler");

function yasHesapla(dogumYili) {
  //   console.log(new Date().getFullYear() - dogumYili);
  return new Date().getFullYear() - dogumYili;
}
let yasAhmet = yasHesapla(1987);
let yasAyse = yasHesapla(1985);
console.log(yasAhmet, yasAyse);
// console.log(yasHesapla(1987));
// yasHesapla(1985);
// yasHesapla(1987);

function emekliligeKacYilKaldi(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let kalan_sene = 65 - yas;
  if (kalan_sene > 0) {
    console.log(`Sayin ${isim} emekli olmaniza ${kalan_sene} kaldi`);
  } else {
    console.log("Zaten emekli oldunuz");
  }
}
emekliligeKacYilKaldi(1980, "Adem");
emekliligeKacYilKaldi(1980, "Gulhan");
