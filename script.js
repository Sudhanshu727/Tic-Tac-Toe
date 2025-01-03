let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".newgm");
let winmsg = document.querySelector(".winner");
let hidden_part = document.querySelector(".msg");

let turnX = true;
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnX) {
      btn.innerText = "X";
      turnX = false;
    } else {
      btn.innerText = "O";
      turnX = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});
const disableBtns = () => {
  for (buttons of btns) {
    buttons.disabled = true;
  }
};
const enableBtns = () => {
  for (buttons of btns) {
    buttons.disabled = false;
    buttons.innerText = "";
  }
};

const showWinner = (w) => {
  winmsg.innerText = `Congratulations! Winner is ${w}`;
};

const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1 = btns[pattern[0]].innerText;
    let pos2 = btns[pattern[1]].innerText;
    let pos3 = btns[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(`Winner is ${pos1}`);
        showWinner(pos1);
        disableBtns();
        hidden_part.classList.remove("hide");
      }
    }
  }
};

const NewGame = () => {
  hidden_part.classList.add("hide");
  enableBtns();
  turnX = true;
  console.log("Reset");
};

newbtn.addEventListener("click", NewGame);
resetbtn.addEventListener("click", NewGame);
