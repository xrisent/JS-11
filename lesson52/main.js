const heading = document.getElementsByTagName("h1")[0];
console.log(heading);

const heading2 = document.getElementsByClassName("heading2")[0];
console.log(heading2);

const heading3 = document.getElementById("heading3");
console.log(heading3);

const paragraph = document.querySelector("p");
console.log("paragraph", paragraph);

const test = document.querySelector(".heading2");
console.log("test", test);

const finded = document.querySelectorAll("div");
console.log("finded", finded);

finded.forEach((item) => {
  console.log("innerHtml", item.innerHTML);
  console.log("innerText", item.innerText);
  console.log("-----------------------------");
});

// --------------------------------------

const youTubeLink = document.createElement("a");
youTubeLink.href = "https://www.youtube.com";
youTubeLink.innerText = "YouTube";
youTubeLink.target = "_blank";
document.body.appendChild(youTubeLink);
document.body.prepend(youTubeLink);

heading2.remove();

const lastItem = document.querySelector(".child:last-child");
console.log("lastItem", lastItem);

lastItem.innerHTML =
  "<img alt='YouTube Thumbnail' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s'>";
// const container = document.getElementsByClassName("container")[0].children[-1];
// console.log("container", container);

// lastItem.classList.add("new-class");
// lastItem.classList.remove("child");
lastItem.classList.toggle("new-class");
