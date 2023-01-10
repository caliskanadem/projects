//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");
// const myH2 = document.getElementsByTagName("h2");
// myH2[0].style.color = "red";

// const car = {
//   name: "BMW",
//   model: 1990,
//   engine: 1.6,
//   colors: ["blue", "purple"],
// };

// //! 1.YONTEM
// const name1 = car.name;
// const model1 = car["model"];
// console.log(name1);

// //! 2.YONTEM
// const { name, model, color } = car; //? destructre

// console.log(name, model);

// let { engine: motor } = car;
// console.log(motor, car);
// car.engine = 2.2;
// console.log(car);

//* EXAMPLE: NESTED
// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },
//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
// };

// const { car1, car2 } = cars;
// console.log(car1, car2);
// const { name: nameCar1, engine: engineCar1 } = car1;
// const { name: nameCar2, engine: engineCar2 } = car1;
// console.log(nameCar1, nameCar2);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

//*Classical
team.forEach((t, i) => {
  console.log(i + 1 + ". " + "NAME:", t.name);
  console.log("SURNAME:", t.surname);
  console.log("JOB:", t.job);
  console.log("AGE:", t.age);
  console.log("*****************");
});

//*Destructre
team.forEach((t, i) => {
  const { name, surname, job, age } = t;
  console.log(i + 1 + ". " + "NAME:", name);
  console.log("SURNAME:", surname);
  console.log("JOB:", job);
  console.log("AGE:", age);
  console.log("*****************");
});

//* functionun donduruldugu obje dogrudan dest. yapilabilir

const getInfo = () => {
  return {
    id: new Date().getTime(),
    productName: "MacBook",
    price: 5000,
  };
};
console.log(getInfo());
const { productName, price } = getInfo();
console.log("PrICE", price);

const calculate = ({ price, name }) => {
  console.log("NAME:", name);
  console.log("PRICE:", price * 1.2);
};
calculate({ price: 50000, name: "macbook" });

// const check = ({ a, b, c }) => {
//   console.log(a, b, c);
// };

const check = (data) => {
  const { a, b, c } = data;
};

const data = {
  a: 1,
  b: 2,
  c: 3,
};

check(data);
