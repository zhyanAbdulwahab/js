window.addEventListener("load", init);

let time = 6;
let score = 0;
let isplaying;
//DOM  lerawa access akain bo inputakani html aka
const currentWord = document.querySelector("#current-word"); // random wordaka
const wordInput = document.querySelector("#word-input"); // aw whaya ka la inputaka ainwsin
const timeDisplay = document.querySelector("#time"); // katakai
const scoreDisplay = document.querySelector("#score"); //  scoreakai ka chani kokrdotawa
const message = document.querySelector("#message"); // show i message bka agar gameover ya successbu

// chan wshayk daxll akain la arrayak ta  show i bka ba random  30 whai tyaya
const words = [
  "parachute",
  "suburb",
  "method",
  "cover",
  "praise",
  "pace",
  "beard",
  "shadow",
  "boat",
  "weight",
  "gloom",
  "invisible",
  "book",
  "hole",
  "tight",
  "pill",
  "photography",
  "unfortunately",
  "flight",
  "shiver",
  "teach",
  "cluster",
  "throat",
  "glue",
  "surprise",
  "concrete",
  "council",
  "trouser",
  "survivor",
  "excuse",
];
//  intilize game
// abe har web page akaman krdawa am functiona esh bkat  lanaw am functionasha calli awanai trman krdwa
function init() {
  // ba shewayaki random aw shana wargrin
  showword(words);
  wordInput.addEventListener("input", startGame);
  setInterval(countDown, 1000);
  setInterval(checkStatus, 50);
}

function startGame() {
  // cheki awa aka nwsini naw inputaka yaksana bawai naw arrayaka ka show bwa
  // barawrdyan bka agar yaksan bu awa score 1 zyabka
  if (matchWord()) {
    isplaying = true;
    time = 6;
    showword(words);
    wordInput.value = "";
    score++;
  }
  // aikain ba -1 lawanay la sfra wshaka b arasti bnwse aw kata nabe game over bbe
  if (score === -1) {
    // agar game over bu amai xwarawa call bka
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
function matchWord() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "correct";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function showword(words) {
  //  1- ba random indexek wargreu bixata naw current word
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}
function countDown() {
  // taibata ba cheki time bzane agar la sfr gawratr kami katawa agara 0 is play false be
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isplaying = false;
  }

  timeDisplay.innerHTML = time;
}
function checkStatus() {
  // am functiona eshakai awaya bzane yaryaka kai game over abe
  if (time === 0 && isplaying === false) {
    message.innerHTML = "Game Over";
    score = -1;
  }
}
