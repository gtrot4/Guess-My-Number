"use strict";
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Answer!`;
console.log(document.querySelector(`.message`).textContent);

console.log(document.querySelector(`.label-score`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

//directions for your code to follow throughout
let secret = Math.trunc(Math.random() * 20) + 1; //multiplying by 20 only gets it to 19...add 1 for the full 20

let score = 20; //let because it changes depending on the user input.
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  //This line of code is to add an event listener for a mouse click.
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess); //Use number function here to make the string that is outputted into a number

  //When there is no input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `No number!`;
    displayMessage(`No Number!`); //better than line 31 repeated
    //When player wins
  } else if (guess === secret) {
    displayMessage(`Correct Number YOU WIN!`);
    document.querySelector(`.number`).textContent = secret;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    //implmenting highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(guess > secret ? `Too High!` : `Too Low!`);
      // document.querySelector(`.message`).textContent =
      //   guess > secret ? `Too High!` : `Too Low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`YOU LOSE!`);
      // document.querySelector(`.message`).textContent = `YOU LOSE!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
  //When guess is higher than number
  // } else if (guess > secret) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too High!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `YOU LOSE!`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  //   //when guess is lower than number
  // } else if (guess < secret) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too Low!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `YOU LOSE!`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1; //generates new random winning number
  displayMessage(`Start Guessing...OR ELSE!`);
  // document.querySelector(`.message`).textContent = `Start Guessing!`; //resets prompt for user
  document.querySelector(`.score`).textContent = score; //resets score to 20
  document.querySelector(`.number`).textContent = `?`; //resets # box
  document.querySelector(`.guess`).value = ``; //empty value for user input
  document.querySelector(`body`).style.backgroundColor = `#222`; //resets background color to black
  document.querySelector(`.number`).style.width = `15rem`; //resets winning number to smaller size
});
