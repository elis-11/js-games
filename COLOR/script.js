const button = document.getElementById("btn");
const color = document.querySelector(".color");

// ######VERSION-1########
// const colors = ["red", "green", "yellow", "orange", "black", "white"];
// button.addEventListener("click", () => {
//   let hexColor = colors[getRandomNumber()];
//   document.body.style.backgroundColor = hexColor;
//   color.textContent = hexColor;
// });
// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
//######VERSION-2########
const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const colors = ["red", "green", "yellow", "orange", "black", "white"];
button.addEventListener("click", () => {
  let hexColor = colors[getRandomNumber()];
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
