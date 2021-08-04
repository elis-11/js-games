const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  jump();
});

jump = () => {
  if (dino.classList != "jump") {
    dino.classlist.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
};
