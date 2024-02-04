const title2 = document.getElementById("title")
const hellos = document.getElementsByClassName("hello")
// const h1 = document.getElementsByTagName("h1");
const title = document.querySelector(".hello h1");


console.dir(title2);
console.log(title2);

function handTitleClick() {
    title.style.color = "blue";
    console.log("title was clicked!");
}

title.addEventListener("click", handTitleClick)

// title.innerText = "Got you";

// console.log(title.id);
// console.log(title.className);

// console.dir(hellos);

