let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Gelistirme Egitimi";
//? 1-url kac karakterlidir?
let sonuc;
sonuc = url.length;
console.log(sonuc);

//? 2-kurs adi kac kelimeden olusur?
console.log((sonuc = kursAdi.split(" ").length));

//? 3-url https ile mi basliyor?
console.log((sonuc = url.startsWith("https")));
if (sonuc) {
  console.log("Evet basliyor");
}

//? 4-Kursadi icerisinde `Egitimi` kelimesi var mi?
if (kursAdi.indexOf("Egitimi") > -1) {
  console.log("Evet var");
} else {
  console.log("Hayir yok");
}

//? 5-url ve kusAdi degiskenlerini kullanarak asagidaki string bilgiyi olusturunuz
//! https://www.sadikturhan.com/komple-web-gelistirme-kursu

//*yontem1:
cut = kursAdi.toLowerCase().replace(/ /g, "-");
sonuc = `${url}/${cut}`;
console.log(sonuc);

//*yontem2:
kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
console.log(`${url}/${kursAdi}`);
