let cnt = 1;

//stores player X score in local storage

if (localStorage.scoreX) {
  scoreX = localStorage.scoreX;
  document.getElementById("resultX").innerHTML = localStorage.scoreX;
} else {
  scoreX = 0;
  document.getElementById("resultX").innerHTML = 0;
}
//stores player X score in local storage

if (localStorage.scoreO) {
  scoreO = localStorage.scoreO;
  document.getElementById("resultO").innerHTML = localStorage.scoreO;
} else {
  scoreO = 0;
  document.getElementById("resultO").innerHTML = scoreO;
}

let currentPlayer = "X";


function player(clicked_id) {
  let playClick = document.getElementById(clicked_id);
  if (cnt <= 9) {
    //it checks box blank or not
    if (playClick.innerText == "") {
      //it will check current player
      playClick.innerText = currentPlayer == "X" ? "X" : "O";
      if (winner()) {
        if (playClick.innerText == "X") {
          let nameX = document.getElementById("playerXName").value;
          if (nameX == "") {
            nameX = "X";
          } else {
            NameX = document.getElementById("playerXName").value;
          }
          document.getElementById(
            "result"
          ).innerText = `${nameX} is Winner..!!`;
          showScoreX();
          cnt = 10;
        } else if (playClick.innerText == "O") {
          let nameO = document.getElementById("playerOName").value;
          if (nameO == "") {
            nameO = "O";
          } else {
            NameO = document.getElementById("playerOName").value;
          }
          document.getElementById(
            "result"
          ).innerText = `${nameO} is Winner..!!`;
          showScoreO();
          cnt = 10;
         
        }
      }
      cnt++;
      //checking for tie
      if (!winner() && cnt > 9) {
       
        document.getElementById("result").innerText = `Game is Tie..!!`;
      }
      currentPlayer = currentPlayer == "X" ? "O" : "X";
      turn(currentPlayer);
    }
   
  }
}
function getData(get) {
  let pa = document.getElementById(get).innerText;
  return pa;
}

//checkCondition check values they are same or not.
function checkCondition(c1, c2, c3) {
  if (
    getData(c1) != "" &&
    getData(c2) != "" &&
    getData(c3) != "" &&
    getData(c1) == getData(c2) &&
    getData(c2) == getData(c3) &&
    getData(c3) == getData(c1)
  ) {
    return true;
  }
}

//check all the possibility in the board to get a winner
function winner() {
  if (
    checkCondition("box1", "box2", "box3") ||
    checkCondition("box4", "box5", "box6") ||
    checkCondition("box7", "box8", "box9") ||
    checkCondition("box1", "box4", "box7") ||
    checkCondition("box2", "box5", "box8") ||
    checkCondition("box3", "box6", "box9") ||
    checkCondition("box1", "box5", "box9") ||
    checkCondition("box3", "box5", "box7")
  ) {
    console.log("Winner");
    return true;
    
  }
}

function turn(currPlayer) {
  let getplayer = "";
  let showPlayer = document.getElementById("playersTurn");
  if (currPlayer == "X") {
    let tempX = document.getElementById("playerXName").value;
    if (tempX == "") {
      getplayer = "X";
    } else {
      getplayer = tempX;
    }
  } else if (currPlayer == "O") {
    let tempO = document.getElementById("playerOName").value;
    if (tempO == "") {
      getplayer = "O";
    } else {
      getplayer = tempO;
    }
  } else {
    return getplayer;
  }
  let msgTurn = `Now ${getplayer}'s turn`;
  return (showPlayer.innerText = msgTurn);
}

function ShowMsg() {
  let msg = winner ? "Winner" : "";
  let setMsg = document.getElementById("result");
  setMsg.innerText = msg;
}
function showScoreX() {
 
  if (typeof Storage !== "undefined") {
    if (localStorage.scoreX) {
      localStorage.scoreX = Number(localStorage.scoreX) + 1;
    } else {
      localStorage.scoreX = 1;
    }
    document.getElementById("resultX").innerHTML = localStorage.scoreX;
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}
function showScoreO() {
 
  if (typeof Storage !== "undefined") {
    if (localStorage.scoreO) {
      localStorage.scoreO = Number(localStorage.scoreO) + 1;
    } else {
      localStorage.scoreO = 1;
    }
    document.getElementById("resultO").innerHTML = localStorage.scoreO;
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}

function reset() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("box" + i).innerText = "";
    document.getElementById("result").innerText = "";
  }
  cnt = 1;
}

function newGame() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("box" + i).innerText = "";
    document.getElementById("result").innerText = "";
  }
  cnt = 1;
  if (localStorage.scoreO) {
    localStorage.removeItem("scoreO");
    document.getElementById("resultO").innerHTML == 0;
  }
  if (localStorage.scoreX) {
    localStorage.removeItem("scoreX");
    document.getElementById("resultX").innerHTML == 0;
  }
  
  location.reload();
}
//Audio
const soundBtn = document.querySelector(".container");
let myAudio = document.querySelector("#audio");
soundBtn.addEventListener("click", () => {
  myAudio.play();
});

