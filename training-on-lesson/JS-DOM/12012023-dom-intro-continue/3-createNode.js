console.log("**** CREATE NODE ****");

//?Yeni bir P elementi olusturalim
const newPar = document.createElement("p");
const text = document.createTextNode("Bu bir p elementidir.");
newPar.appendChild(text);
console.log(newPar);

const h2 = document.querySelector(".item-list h2");
h2.after(newPar);
// h2.before(newPar)

//?INPUT value
const myInput = document.getElementById("input"); //? element
console.log(myInput.value); //? degerini alir.

//? id ,class
newPar.id = "par";
newPar.className = "center red";

newPar.id = "par";
newPar.className = "center red";

newPar.classList.add("bg-tomato", "left", "blue");
newPar.classList.remove("left");
if (!newPar.classList.contains("blue")) {
  newPar.classList.add("blue");
} else {
  newPar.classList.add("orange");
}

newPar.classList.toggle("white");

console.log(newPar.getAttribute("class"));
console.log(newPar.getAttribute("id"));
console.log(newPar.getAttribute("name"));
console.log(myInput.getAttribute("name"));
console.log(myInput.getAttribute("type"));
console.log(myInput.id);

// const newDiv = document.querySelector("#new-div");
// newDiv.innerHTML += `<li id="go class="red">Go</li>`;

const newDiv = document.createElement("div");
newDiv.id = "new-div";
document.getElementById("btn").after(newDiv);
newDiv.innerHTML += `<li id="go" class="red">GO</li>`;
