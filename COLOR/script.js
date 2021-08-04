const button = document.getElementById("btn");
const color = document.querySelector(".color");

// ######VERSION-1########
//  const colors = ["#FA3890", "#01EF97", "#A711EA",'#89BAC6','#ECE8E8','#9669D9','#A27094','#DC8BE0', "#10F5D0", "#BA8E97", "#F587E4"];
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
button.addEventListener("click", () => {
  let hexColor = generateHex();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function generateHex() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
