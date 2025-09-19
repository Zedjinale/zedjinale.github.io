'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = "?";
let highScore = 0;

document.querySelector(".check").addEventListener('click',
    function () {
        let guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        if (!guess) {

            document.querySelector('.message').textContent = "🚫 No Number!";
        }
        else if (guess == secretNumber) {
            if (score > highScore) {

                highScore = score;
            }
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = "30rem";
            document.querySelector('.message').textContent = "😽Correct Number!😽";
            document.querySelector('.score').textContent = score;
            document.querySelector('.highscore').textContent = highScore;



        }

        else if (guess > secretNumber) {

            if (score > 1) {
                score--;
                document.querySelector('.message').textContent = "🙀TOO HIGH!🙀";
                document.querySelector('.score').textContent = score;
            }

            else {
                document.querySelector('.message').textContent = "🙈You lost the Game!🙊";
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = '#ff0000 ';



            }

        }

        else if (guess < secretNumber) {
            if (score > 1) {
                score--;
                document.querySelector('.message').textContent = "😿TOO LOW!😿";
                document.querySelector('.score').textContent = score;

            }

            else {
                document.querySelector('.message').textContent = "🙈You lost the Game!🙊";
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = '#ff0000 ';



            }

        }

    });

document.querySelector(".again").addEventListener('click',

    function () {

        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = "?";
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = "15rem";
        document.querySelector('.message').textContent = "Start guessing...";
        document.querySelector(".guess").value = "";

    }

);



