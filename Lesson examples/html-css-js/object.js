// let kullaniciA = {
//   ad: "sadik",
//   soyad: "turan",
//   yas: 38,
//   adres: { sehir: "kocaeli", ilce: "izmit" },
//   hobiler: ["sinema", "sport"],
// };

// let kullaniciB = {
//   ad: "ahmet",
//   soyad: "cinar",
//   yas: 25,
//   adres: { sehir: "kocaeli", ilce: "izmit" },
//   hobiler: ["sinema", "sport"],
// };
// let sonuc;
// sonuc = kullaniciA.ad;
// sonuc = kullaniciA.soyad;
// sonuc = kullaniciA["yas"];
// sonuc = kullaniciA.adres.sehir;
// sonuc = kullaniciA.hobiler[0];
// sonuc = kullaniciA.hobiler[1];
// console.log(sonuc);
// let kullanicilar = [kullaniciA, kullaniciB];
// sonuc = kullanicilar[0].ad;
// let urunler = [
//   { urun_adi: "samsung s22", urun_fiyat: 13000 },
//   { urun_adi: "samsung s23", urun_fiyat: 15000 },
// ];

// console.log(sonuc);
// console.log(urunler[0]);

let siparis_1 = {
  siparis_id: 101,
  siparis_tarihi: "30.12.2022",
  odeme_sekli: "kredi karti",
  kargo_adresi: {
    mahalle: "yahya kaptan",
    ilce: "izmit",
    sehir: "kocaeli",
  },
  urunler: [
    {
      urun_id: 5,
      urun_adi: "iphone 13 pro",
      urun_url: "https://abc.com/iphone-13-pro",
      urun_fiyat: 22000,
    },
    {
      urun_id: 6,
      urun_adi: "iphone 13 pro max",
      urun_url: "https://abc.com/iphone-13-pro-max",
      urun_fiyat: 25000,
    },
  ],
};

let siparis_2 = {
  siparis_id: 102,
  siparis_tarihi: "30.12.2022",
  odeme_sekli: "kredi karti",
  kargo_adresi: {
    mahalle: "yahya kaptan",
    ilce: "izmit",
    sehir: "kocaeli",
  },
  urunler: [
    {
      urun_id: 6,
      urun_adi: "iphone 13 pro max",
      urun_url: "https://abc.com/iphone-13-pro-max",
      urun_fiyat: 25000,
    },
  ],
};

let siparis1_toplam =
  (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * 1.18;

let siparis2_toplam = siparis_1.urunler[0].urun_fiyat * 1.18;

console.log("siparis1: " + siparis1_toplam);
console.log("siparis2: " + siparis2_toplam);
console.log("Toplam odenen miktar: ", siparis1_toplam + siparis2_toplam);

let toplamsiparis = siparis1_toplam + siparis2_toplam;
siparisler = [siparis_1, siparis_2];
