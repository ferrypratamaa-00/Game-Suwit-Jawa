// button for human
const gajah = document.querySelector(".gajah");
const orang = document.querySelector(".orang");
const semut = document.querySelector(".semut");
const info = document.querySelector(".info");

// choice from comp dan human
const quesComp = document.querySelector(".area-komputer .question-comp");
const quesOrang = document.querySelector(".area-komputer .question-human");

// button reset
const btnReset = document.querySelector(".btnReset");

// score
const match = document.getElementById("match");
const win = document.getElementById("win");
const lost = document.getElementById("lost");
const seri = document.getElementById("seri");

var hasil = "",
  score = {
    match: 0,
    win: 0,
    lost: 0,
    seri: 0,
  };

// random selection from the computer

function pilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) {
    return "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    return "orang";
  } else {
    return "semut";
  }
}

function totalScore(hasil) {
  switch (hasil) {
    case "menang":
      score.match = score.match + 1;
      score.win = score.win + 1;
      break;

    case "kalah":
      score.match = score.match + 1;
      score.lost = score.lost + 1;
      break;

    default:
      score.match = score.match + 1;
      score.seri = score.seri + 1;
      break;
  }
  return score;
}

//update info

function infoBoard(match, win, lost, seri) {
  this.match.innerHTML = match;
  this.win.innerHTML = win;
  this.lost.innerHTML = lost;
  this.seri.innerHTML = seri;
}

/*

Event Button

*/

// elephant state is clicked
gajah.addEventListener("click", function () {
  if (pilihanComputer() == "gajah") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/gajah.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/gajah.png");

    info.innerHTML = "Seri!";
    hasil = "seri";
  } else if (pilihanComputer() == "semut") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/semut.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/gajah.png");

    info.innerHTML = "Kalah!";
    hasil = "kalah";
  } else {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/orang.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/gajah.png");

    info.innerHTML = "Menang!";
    hasil = "menang";
  }
  totalScore(hasil);
  infoBoard(score.match, score.win, score.lost, score.seri);
});

// human state is clicked
orang.addEventListener("click", function () {
  if (pilihanComputer() == "orang") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/orang.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/orang.png");

    info.innerHTML = "Seri!";
    hasil = "seri";
  } else if (pilihanComputer() == "gajah") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/gajah.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/orang.png");

    info.innerHTML = "Kalah!";
    hasil = "kalah";
  } else {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/semut.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/orang.png");

    info.innerHTML = "Menang!";
    hasil = "menang";
  }
  totalScore(hasil);
  infoBoard(score.match, score.win, score.lost, score.seri);
});

// ant state is clicked
semut.addEventListener("click", function () {
  if (pilihanComputer() == "semut") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/semut.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/semut.png");

    info.innerHTML = "Seri!";
    hasil = "seri";
  } else if (pilihanComputer() == "orang") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/orang.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/semut.png");

    info.innerHTML = "Kalah!";
    hasil = "kalah";
  } else {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/gajah.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/semut.png");

    info.innerHTML = "Menang!";
    hasil = "menang";
  }
  totalScore(hasil);
  infoBoard(score.match, score.win, score.lost, score.seri);
});

// reset state is clicked
btnReset.addEventListener("click", function () {
  quesComp.removeAttribute("src");
  quesComp.setAttribute("src", "img/question.png");

  quesOrang.removeAttribute("src");
  quesOrang.setAttribute("src", "img/question.png");

  infoBoard("0", "0", "0", "0");
  info.innerHTML = '';
  score.match = 0;
  score.win = 0;
  score.lost = 0;
  score.seri = 0;
});
