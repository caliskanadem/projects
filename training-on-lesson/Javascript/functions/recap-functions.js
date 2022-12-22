function name(a, b) {
  return a * b + a * b * 4;
}

console.log(name(5, 6));

function ciftTekSayilar(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} Cift sayidir`);
    } else {
      console.log(`${i} Tek sayidir`);
    }
  }
}

// function bolum(num1) {
//   for (let i = 1; i <= num1; i++) {
//     if (i % 2 === 0 && i % 3 !== 0) {
//       console.log(`${i} buzz`);
//     } else if (i % 2 !== 0 && i % 3 === 0) {
//       console.log(`${i} fizz`);
//     } else if (i % 2 === 0 && i % 3 === 0) {
//       console.log(`${i} buzzfizz`);
//     }
//   }
// }
// console.log(bolum(85));

const yeniNesil = function (a, b, c, d) {
  return a * b + 5 + (c + d);
};
console.log(yeniNesil(3, 4, 5, 6));

const calculate = function (x, y, op) {
  let result = 0;
  if (op == "+") {
    return x + y;
  } else if (op == "-") {
    return x - y;
  } else if (op == "*") {
    return x * y;
  } else if (op == "/") {
    return x / y;
  }
};
const sonuc = calculate(10, 4, "*");
console.log(sonuc);

function bolum(num1) {
  for (let i = 1; i <= num1; i++) {
    if (i % 2 === 0 && i % 3 !== 0) {
      console.log(`${i} buzz`);
    } else if (i % 2 !== 0 && i % 3 === 0) {
      console.log(`${i} fizz`);
    } else if (i % 2 === 0 && i % 3 === 0) {
      console.log(`${i} buzzfizz`);
    }
  }
}
console.log(bolum(sonuc));
