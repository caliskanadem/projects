//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatoru ile
//* ---------------------------------------------------------

const car = new Object();
car.brand = "Volvo";
car.model = 1990;
car.color = "egean blue";

const car2 = new Object();
car2.brand = "BMW";
car2.model = 2023;
car2.color = "red";

console.log(car);
console.log(car.model); //? .notasyonu ile erisim
console.log(car["color"]); //? square bracket ile erisim

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

function Personel(id, ad, maas) {
  this.tc = id;
  this.name = ad;
  this.salary = maas;
  //   console.log(this)
}

const p1 = new Personel("1234567890", "Selim", 40000);
console.log(p1);
const p2 = new Personel("2344567890", "Levent", 40000);
console.log(p2);
const p3 = new Personel("2344567890", "Murat");
console.log(p3);

console.log(this);

// window.alert("merhaba")
console.log(window.Personal);

//* ---------------------------------------------------------
//* 3-object literal (en cok tercih edilen yontem)
//* ---------------------------------------------------------

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  languages: ["C++", "Go", "Java", "Javascript"],
  salary: 10000,
};
console.log(worker);
worker.age += 1;
console.log(worker);
worker["languages"].forEach((l) => console.log(l));

const upperCaseLangs = worker["languages"].map((l) => l.toUpperCase());
console.log(upperCaseLangs);

worker.nationality = "T.C";
// console.log(worker);

const person = worker;

person.dob = 2000;

console.log({ worker });
console.log({ person });

//* ---------------------------------------------------------
//*                Object Metotlari
//* ---------------------------------------------------------

const personel = {
  name: "Can",
  surname: "Canan",
  dob: 1990,
  salary: 10000,
  job: "developer",
  drivingLicance: false,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
};

summary: () => {
  return `${this.name} is ${this.calculateAge()} years old.`;
};

console.log(personel.dob);
console.log("AGE: ", personel.calculateAge());

console.log(personel.summary());
