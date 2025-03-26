document.addEventListener("DOMContentLoaded", function () {
  let page = document.body.getAttribute("data-page");
  if (page == "home") {
    home();
  } else if (page == "TicTaoToe") {
    TicTacToe();
  } else if (page == "Snake") {
    Snake();
  } else if (page == "Dino") {
    Dino();
  } else if (page == "Guess") {
    Guess();
  } else if (page == "login") {
    login();
  }
});
function home() {
  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("TicTaoToe") == true) {
      document.getElementById("describe").innerHTML =
        "Tic Tac Toe is a game where two players take turns marking the spaces in a 3×3 grid with X and O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.";
      document.getElementById("describeImg").src = "./Img/TicTaoToe.png";
      console.log("Tic Tac Toe");
    } else if (e.target.classList.contains("Snake") == true) {
      document.getElementById("describe").innerHTML =
        "Snake is a game where the player maneuvers a line which grows in length, with the line itself being a primary obstacle. The player loses when the line runs into the border of the screen or itself.";
      document.getElementById("describeImg").src = "./Img/Snake.png";
      console.log("Snake");
    } else if (e.target.classList.contains("Dino") == true) {
      document.getElementById("describe").innerHTML =
        "Dino is a game where the player controls a dinosaur running across the screen. The player must avoid obstacles by jumping over them.";
      document.getElementById("describeImg").src = "./Img/Dino.png";
      console.log("Dino");
    } else if (e.target.classList.contains("Guess") == true) {
      document.getElementById("describe").innerHTML =
        "Guess is a game where the player must guess a number between 1 and 100. The player is given hints to help them guess the number. The player wins if they guess the number correctly.";
      document.getElementById("describeImg").src = "./Img/Guess.png";
      console.log("Guess");
    }
  });

  // document.addEventListener("mouseout", function (e) {
  //   document.getElementById("describe").innerHTML =
  //     "Hover over a game to learn more about it";
  //   document.getElementById("describeImg").src = "./Img/game.png";
  // });
}
function TicTacToe() {
  var turn = Math.round(Math.random()) % 2;
  var winFlag = false;
  document.getElementById("turn").innerHTML = turn == 0 ? "X" : "O";
  // if (turn == 0) {
  //   alert("X goes first");
  // } else {
  //   alert("O goes first");
  // }
  console.log(turn);
  function checkWinner(strVal) {
    let listOfElements = document.getElementsByClassName("cell");
    if (
      listOfElements[0].innerHTML == strVal &&
      listOfElements[1].innerHTML == strVal &&
      listOfElements[2].innerHTML == strVal
    ) {
      listOfElements[0].style.backgroundColor = "green";
      listOfElements[1].style.backgroundColor = "green";
      listOfElements[2].style.backgroundColor = "green";
      alert(strVal + " wins");
      winFlag = true;
    } else if (
      listOfElements[0].innerHTML == strVal &&
      listOfElements[3].innerHTML == strVal &&
      listOfElements[6].innerHTML == strVal
    ) {
      listOfElements[0].style.backgroundColor = "green";
      listOfElements[3].style.backgroundColor = "green";
      listOfElements[6].style.backgroundColor = "green";
      alert(strVal + " wins");
      winFlag = true;
    } else if (
      listOfElements[0].innerHTML == strVal &&
      listOfElements[4].innerHTML == strVal &&
      listOfElements[8].innerHTML == strVal
    ) {
      listOfElements[0].style.backgroundColor = "green";
      listOfElements[4].style.backgroundColor = "green";
      listOfElements[8].style.backgroundColor = "green";
      alert(strVal + " wins");
      winFlag = true;
    } else if (
      listOfElements[1].innerHTML == strVal &&
      listOfElements[4].innerHTML == strVal &&
      listOfElements[7].innerHTML == strVal
    ) {
      listOfElements[1].style.backgroundColor = "green";
      listOfElements[4].style.backgroundColor = "green";
      listOfElements[7].style.backgroundColor = "green";
      alert(strVal + " wins");
      winFlag = true;
    } else if (
      listOfElements[2].innerHTML == strVal &&
      listOfElements[5].innerHTML == strVal &&
      listOfElements[8].innerHTML == strVal
    ) {
      listOfElements[2].style.backgroundColor = "green";
      listOfElements[5].style.backgroundColor = "green";
      listOfElements[8].style.backgroundColor = "green";
      alert(strVal + " wins");
      winFlag = true;
    } else if (
      listOfElements[2].innerHTML == strVal &&
      listOfElements[4].innerHTML == strVal &&
      listOfElements[6].innerHTML == strVal
    ) {
      listOfElements[2].style.backgroundColor = "green";
      listOfElements[4].style.backgroundColor = "green";
      listOfElements[6].style.backgroundColor = "green";
      alert(strVal + " wins");
      winFlag = true;
    } else if (
      listOfElements[3].innerHTML == strVal &&
      listOfElements[4].innerHTML == strVal &&
      listOfElements[5].innerHTML == strVal
    ) {
      listOfElements[3].style.backgroundColor = "green";
      listOfElements[4].style.backgroundColor = "green";
      listOfElements[5].style.backgroundColor = "green";
      alert(strVal + " wins");
      winFlag = true;
    } else if (
      listOfElements[6].innerHTML == strVal &&
      listOfElements[7].innerHTML == strVal &&
      listOfElements[8].innerHTML == strVal
    ) {
      listOfElements[6].style.backgroundColor = "green";
      listOfElements[7].style.backgroundColor = "green";
      listOfElements[8].style.backgroundColor = "green";
      alert(strVal + " wins");
      winFlag = true;
    }
    if (winFlag == true) {
      if (strVal == "X") {
        document.getElementById("scoreX").innerHTML =
          parseInt(document.getElementById("scoreX").innerHTML) + 1;
      } else {
        document.getElementById("scoreO").innerHTML =
          parseInt(document.getElementById("scoreO").innerHTML) + 1;
      }
    }
  }
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("cell") == false || winFlag == true) {
      if (e.target.getAttribute("id") == "reset") {
        let listOfElements = document.getElementsByClassName("cell");
        for (let i = 0; i < listOfElements.length; i++) {
          listOfElements[i].innerHTML = "";
          listOfElements[i].style.backgroundColor = "";
        }
        winFlag = false;
        return;
      } else {
        return;
      }
    } else if (e.target.innerHTML == "X" || e.target.innerHTML == "O") {
      return;
    }
    if (turn == 0) {
      e.target.innerHTML = "X";
      checkWinner("X");
      turn = 1;
    } else {
      e.target.innerHTML = "O";
      checkWinner("O");
      turn = 0;
    }
  });
}

function Snake() {
  let gridRow = 20;
  let gridCol = 20;
  let directionSnake = "right";
  let slider = document.getElementById("myRange");
  let delay = 300 - document.getElementById("myRange").value * 2.5;
  let speed = document.getElementById("myRange").value;
  let interval;
  let playerRow = Math.floor(gridRow / 2);
  let playerCol = Math.floor(gridCol / 2);
  let appleRow = Math.floor(Math.random() * 100) % gridRow;
  let appleCol = Math.floor(Math.random() * 100) % gridCol;
  let score = 0;
  let gameOver = false;
  let startGame = false;
  let listOfParts = [playerRow + "-" + playerCol];

  while (appleRow == playerRow && appleCol == playerCol) {
    appleRow = Math.floor(Math.random() * 100) % gridRow;
    appleCol = Math.floor(Math.random() * 100) % gridCol;
  }

  function createGrid(row, col) {
    const gridContainer = document.getElementById("gameScreen");
    gridContainer.style.gridTemplateColumns = "repeat(" + gridCol + ", 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(" + gridRow + ", 1fr)";
    // gridContainer.style.width = Math.round((gridRow * 30) / 20) + "rem";
    // gridContainer.style.height = Math.round((gridCol * 30) / 20) + "rem";
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("id", i + "-" + j);
        gridContainer.appendChild(cell);
      }
    }
  }
  function placeObject(row, col, object) {
    let cell = document.getElementById(row + "-" + col);
    cell.classList.add(object);
  }
  createGrid(gridRow, gridCol);
  placeObject(appleRow, appleCol, "apple");
  placeObject(playerRow, playerCol, "player");

  function moveSnake() {
    let playerHeadId = listOfParts[listOfParts.length - 1];
    let playerPos = document
      .getElementById(playerHeadId)
      .getAttribute("id")
      .split("-");
    let playerRow = parseInt(playerPos[0]);
    let playerCol = parseInt(playerPos[1]);
    switch (directionSnake) {
      case "up":
        playerRow--;
        playerRow = playerRow < 0 ? gridRow - 1 : playerRow;
        break;
      case "down":
        playerRow++;
        playerRow = playerRow >= gridRow ? 0 : playerRow;
        break;
      case "left":
        playerCol--;
        playerCol = playerCol < 0 ? gridCol - 1 : playerCol;
        break;
      case "right":
        playerCol++;
        playerCol = playerCol >= gridCol ? 0 : playerCol;
        break;
    }
    // console.log("Before move " + listOfParts[listOfParts.length - 1]);
    let nextCellId = playerRow + "-" + playerCol;
    // console.log("After move " + nextCellId);
    if (gameOver == false) {
      if (document.getElementById(nextCellId).classList.contains("apple")) {
        document.getElementById(nextCellId).classList.remove("apple");
        document.getElementById(nextCellId).classList.add("player");
        while (
          document
            .getElementById(appleRow + "-" + appleCol)
            .classList.contains("player") ||
          document
            .getElementById(appleRow + "-" + appleCol)
            .classList.contains("apple")
        ) {
          appleRow = Math.floor(Math.random() * 100) % gridRow;
          appleCol = Math.floor(Math.random() * 100) % gridCol;
        }
        document.getElementById(nextCellId).classList.add("player");
        listOfParts.push(nextCellId);

        placeObject(appleRow, appleCol, "apple");
        score++;
      } else if (
        document.getElementById(nextCellId).classList.contains("player")
      ) {
        alert("Game Over");
        gameOver = true;
        clearInterval(interval);
      } else {
        document.getElementById(listOfParts[0]).classList.remove("player");
        for (let i = 0; i < listOfParts.length - 1; i++) {
          listOfParts[i] = listOfParts[i + 1];
          document.getElementById(listOfParts[i]).classList.add("player");
        }
        listOfParts[listOfParts.length - 1] = nextCellId;
        document.getElementById(nextCellId).classList.add("player");
        // document.getElementById(listOfParts[0]).classList.add("player");
      }
      document.getElementById("score").innerHTML = score;
    } else {
      return;
    }
    // for (let i = 0; i <= listOfParts.length - 1; i++) {
    //   console.log("Element " + i + " : " + listOfParts[i]);
    // }
  }
  function keypressFunction(e) {
    document.removeEventListener("keydown", keypressFunction);
    if (e.key == "w") {
      if (directionSnake != "down") {
        directionSnake = "up";
      }
    } else if (e.key == "s") {
      if (directionSnake != "up") {
        directionSnake = "down";
      }
    } else if (e.key == "a") {
      if (directionSnake != "right") {
        directionSnake = "left";
      }
    } else if (e.key == "d") {
      if (directionSnake != "left") {
        directionSnake = "right";
      }
    }
    setTimeout(() => {
      document.addEventListener("keydown", keypressFunction);
    }, 10);
  }
  document.addEventListener("keydown", keypressFunction);
  document.addEventListener("click", function (e) {
    if (e.target.getAttribute("id") == "start") {
      if (startGame == false) {
        // delay = document.getElementById("myRange").value;
        // document.getElementById("delay").innerHTML = delay;
        interval = setInterval(moveSnake, delay);
        startGame = true;
      }
    } else if (e.target.getAttribute("id") == "reset") {
      clearInterval(interval);
      window.location.reload();
    }
  });
  slider.oninput = function () {
    speed = document.getElementById("myRange").value;
    delay = 300 - speed * 2.5;
    document.getElementById("delay").innerHTML = speed + " %";

    if (interval != NaN) {
      clearInterval(interval);
    }
    if (startGame == true) {
      interval = setInterval(moveSnake, delay);
    }
  };
  console.log(document.getElementById("0-0"));
}
function Dino() {
  let player = document.getElementById("player");
  let gameScreen = document.getElementById("gameScreen");
  let scoreElement = document.getElementById("score");
  let objCreateInterval, objAnimationFrame;
  let playerTop = parseInt(window.getComputedStyle(player).top);
  let playerHeight = parseInt(window.getComputedStyle(player).height);
  let objects = []; // Store active objects

  let jumpSeq = [
    "url(./Img/player/jump01.png)",
    "url(./Img/player/jump02.png)",
    "url(./Img/player/jump03.png)",
    "url(./Img/player/jump04.png)",
    "url(./Img/player/jump05.png)",
    "url(./Img/player/jump06.png)",
  ];

  let gameSpeed = 3; // Slower movement to make the game more playable
  let spawnRate = 1500; // Less frequent object spawning
  let score = 0;
  let startFlag = false;
  let lastUpdate = performance.now(); // Tracks last frame update

  player.style.animationName = "none";

  //  Jump Animation (Better Timing & Smoother Jump)
  function jump(evt) {
    if (evt.key == "w") {
      player.style.animationName = "none";
      document.removeEventListener("keypress", jump);

      jumpSeq.forEach((imageURL, index) => {
        setTimeout(() => {
          player.style.content = imageURL;
          if (index < 2) player.style.top = `${playerTop - index * 80}px`;
          else if (index < 4) player.style.top = `${playerTop - 130}px`;
          else player.style.top = `${playerTop}px`;
        }, index * 200); // Reduced delay for smoother movement
      });

      setTimeout(() => {
        player.style.animationName = "playerAnimation";
        document.addEventListener("keypress", jump);
      }, 200 * (jumpSeq.length - 1));
    }
  }

  //  Create Object (Boxes) with Controlled Spawning Rate
  function createObj() {
    clearTimeout(objCreateInterval);
    let box = document.createElement("div");
    box.classList.add("box");
    gameScreen.appendChild(box);

    let boxHeight = parseInt(window.getComputedStyle(box).height);
    box.style.top = `${350 - boxHeight}px`;
    box.style.left = "100%"; // Spawn at the right edge

    objects.push(box); // Store reference for movement

    // Adjust spawn rate over time to gradually increase difficulty
    spawnRate = Math.max(1000, spawnRate - 20);

    objCreateInterval = setTimeout(createObj, spawnRate);
  }

  // Move Objects (Uses `requestAnimationFrame`) with Better Speed Control
  function moveObj(timestamp) {
    let deltaTime = (timestamp - lastUpdate) / 16.67; // Normalize speed
    lastUpdate = timestamp;

    objects.forEach((box, index) => {
      let boxLeft = parseInt(window.getComputedStyle(box).left);
      let boxWidth = parseInt(window.getComputedStyle(box).width);
      let boxTop = parseInt(window.getComputedStyle(box).top);

      //  Collision Detection (Fixed Overlapping)
      let playerTop = parseInt(window.getComputedStyle(player).top);
      let playerLeft = parseInt(window.getComputedStyle(player).left);
      let playerWidth = parseInt(window.getComputedStyle(player).width) - 30;
      let gameScreen = document.getElementById("gameScreen");

      if (
        playerTop + playerHeight >= boxTop &&
        playerLeft <= boxLeft + boxWidth &&
        boxLeft <= playerLeft + playerWidth
      ) {
        player.style.animationName = "none";

        gameScreen.innerHTML = `<p class="gameover">Game Over!<p>`;
        gameScreen.innerHTML += `<button id="startButton" onclick="window.location.reload()">Restart</button>`;

        player.style.content = "url(./Img/player/Lost.png)";
        clearTimeout(objCreateInterval);
        cancelAnimationFrame(objAnimationFrame);
        document.removeEventListener("keypress", jump);
        startFlag = false;
        return; // Stop updating
      }

      // Move box left based on speed
      box.style.left = `${boxLeft - gameSpeed * deltaTime}px`;

      // Remove off-screen boxes & Increase Score
      if (boxLeft <= -boxWidth) {
        box.remove();
        objects.splice(index, 1);
        score++;
        scoreElement.innerText = score;

        // Gradually increase game speed
        gameSpeed = Math.min(gameSpeed + 0.1, 7);
      }
    });
    objAnimationFrame = requestAnimationFrame(moveObj);
  }
  //  Start Game
  function startGame(evt) {
    if (evt.target.id !== "startButton" || startFlag) return;

    spawnRate = 1500; // Reset object spawn rate
    gameSpeed = 3; // Reset speed

    objCreateInterval = setTimeout(createObj, spawnRate);
    objAnimationFrame = requestAnimationFrame(moveObj);

    player.style.animationName = "playerAnimation";
    document.addEventListener("keypress", jump);

    startFlag = true;
  }

  document.addEventListener("click", startGame);
}
function Guess() {
  var number = Math.floor(Math.random() * 100) + 1;
  var guess = 0;
  var remainingAttempt = 0;
  var diffcultyFlag = false;
  console.log("The Correct Number is " + number);
  function submitGuess() {
    if (guess == number) {
      alert("You win! The number was " + number);
      window.location.reload();
      return;
    } else if (guess < number) {
      alert("Higher");
      remainingAttempt--;
    } else {
      alert("Lower");
      remainingAttempt--;
    }
    if (remainingAttempt == 0 && diffcultyFlag == true) {
      alert("You lose! The number was " + number);
      window.location.reload();
      return;
    }
    guess = 0;
  }
  function game(e) {
    if (diffcultyFlag == false && e.target.tagName.toLowerCase() == "button") {
      alert("Please select a difficulty");
      return;
    } else if (e.target.getAttribute("id") == "submit") {
      submitGuess();
    } else if (e.target.getAttribute("id") == "clear") {
      guess = 0;
    } else {
      if (e.target.tagName.toLowerCase() == "button") {
        guess = guess * 10 + parseInt(e.target.getAttribute("id"));
      }
      if (guess >= 100) {
        submitGuess();
      }
    }
    document.getElementById("attemptslife").innerHTML = remainingAttempt;
    document.getElementById("guess").innerHTML = guess;
  }

  document.addEventListener("click", function (e) {
    if (e.target.getAttribute("id") == "easy") {
      remainingAttempt = 100;
      diffcultyFlag = true;
    } else if (e.target.getAttribute("id") == "medium") {
      remainingAttempt = 10;
      diffcultyFlag = true;
    } else if (e.target.getAttribute("id") == "hard") {
      remainingAttempt = 3;
      diffcultyFlag = true;
    } else {
      game(e);
    }
    if (diffcultyFlag == true) {
      document.getElementById("difficulty").classList.add("hidden");
      setTimeout(() => {
        document.getElementById("difficulty").style.display = "none";
        document.getElementById("attempts").classList.add("visible");
        document.getElementById("attempts").style.display = "block";
      }, 500);

      document.getElementById("attemptslife").innerHTML = remainingAttempt;
    }
  });
}

function login() {
  function consolePrint() {
    console.log(
      "Username : " +
        document.getElementById("username").value +
        " Password : " +
        document.getElementById("password").value +
        " Checkbox : " +
        document.getElementById("stayincheckbox").checked
    );
    window.location.href = "./index.html";
  }
  document.getElementById("logiButton").addEventListener("click", consolePrint);
}
// Auxillary Function for Logout
function logout() {
  window.location.href = "./login.html";
}
