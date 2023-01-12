console.log("***** SELECTORS *****");

document.title = "😈DOM";

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
const myHeader = document.getElementById("header");
console.log(myHeader);
myHeader.style.color = "blue";
myHeader.style.backgroundColor = "yellow";

const button = document.getElementById("btn");
const textInput = document.getElementById("input");
button.style.backgroundColor = "black";
button.style.color = "yellow";
button.style.border = "none";
button.style.padding = "0.7rem";
button.style.borderRadius = "10px";
button.style.fontSize = "20px";
textInput.style.padding = "0.7rem";
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const list = document.getElementsByTagName("li");
console.log(list); //?HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

list[0].style.color = "magenta";
list[list.length - 1].style.color = "purple";

const header = document.getElementsByTagName("header");
console.log(header[0]);

console.log(list.item(3));

list[3].textContent = "REACT / VUE";
list[3].innerText = "REACT / VUE / Swelte";
list[3].innerHTML = "REACT / VUE / Swelte / Angular";

console.log(list[2].textContent);

console.log(list[2].innerText);

console.log(list[2].innerHTML);

list[4].innerHTML += `<li><a class="link" href ="https://www.clarusway.com">CW</a></li>`;
//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const itemList = document.getElementsByClassName("item-list");
console.log(itemList);
console.log(itemList[0]);

const itemListArr = Array.from(itemList);
console.log(...itemList);
// [...itemList].forEach(x=>console.log(x));
itemListArr.forEach((x) => console.log(x));

const itemListSpread = [...itemList];
console.log(itemListSpread);
// itemListSpread.forEach((x) => console.log(x));
itemListSpread.map((x) => console.log((x.style.color = "red")));
//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
