let options = [document.getElementById("rock"), document.getElementById("paper"), document.getElementById("scissors")];
let playerScore = 0;
let cpuScore = 0;
let outcome = ["win", "lose", "draw"];
let result = document.getElementById("score");
let finalScore = document.getElementById("final-score");
let finalOutcome = ["you won!", "ah you lost", "tie"];
let round = 0;
let totalRound = 10;
let retryButton = document.getElementById("retry-button");
let startButton = document.getElementById("start-button");

// ROCK
function rps(rock, paper, scissors) {
    function getCpuResult() {
        return Math.floor(Math.random() * 3) + 1;
    }
    options[0].onclick = function () {
        cpuResult = getCpuResult();
        document.getElementById("player-option").innerHTML = rock.id;

        // draw
        if (cpuResult === 1) {
            result.innerHTML = outcome[2];
            document.getElementById("cpu-option").innerHTML = rock.id;

            // lose
        } else if (cpuResult === 2) {
            result.innerHTML = outcome[1];
            document.getElementById("cpu-option").innerHTML = paper.id;
            cpuScore += 1;
            document.getElementById("cpu-score").innerHTML = cpuScore;

            // win
        } else {
            result.innerHTML = outcome[0];
            document.getElementById("cpu-option").innerHTML = scissors.id;
            playerScore += 1;
            document.getElementById("player-score").innerHTML = playerScore;
        }
        timer();
        round += 1;
        roundCount();
    };

    // PAPER
    options[1].onclick = function () {
        cpuResult = getCpuResult();
        document.getElementById("player-option").innerHTML = paper.id;

        // win
        if (cpuResult === 1) {
            result.innerHTML = outcome[0];
            document.getElementById("cpu-option").innerHTML = rock.id;
            playerScore += 1;
            document.getElementById("player-score").innerHTML = playerScore;

            // draw
        } else if (cpuResult === 2) {
            result.innerHTML = outcome[2];
            document.getElementById("cpu-option").innerHTML = paper.id;

            // lose
        } else {
            result.innerHTML = outcome[1];
            document.getElementById("cpu-option").innerHTML = scissors.id;
            cpuScore += 1;
            document.getElementById("cpu-score").innerHTML = cpuScore;
        }
        timer();
        round += 1;
        roundCount();
    };

    // SCISSORS
    options[2].onclick = function () {
        cpuResult = getCpuResult();
        document.getElementById("player-option").innerHTML = scissors.id;

        // lose
        if (cpuResult === 1) {
            result.innerHTML = outcome[1];
            document.getElementById("cpu-option").innerHTML = rock.id;
            cpuScore += 1;
            document.getElementById("cpu-score").innerHTML = cpuScore;

            // win
        } else if (cpuResult === 2) {
            result.innerHTML = outcome[0];
            document.getElementById("cpu-option").innerHTML = paper.id;
            playerScore += 1;
            document.getElementById("player-score").innerHTML = playerScore;

            // draw
        } else {
            result.innerHTML = outcome[2];
            document.getElementById("cpu-option").innerHTML = scissors.id;
        }
        timer();
        round += 1;
        roundCount();
    };
}

rps(options[0], options[1], options[2]);

function timer() {
    setTimeout(function () {
        document.getElementById('score').innerHTML = '';
        document.getElementById('player-option').innerHTML = '';
        document.getElementById('cpu-option').innerHTML = '';
    }, 1850);
}

function roundCount() {
    if (round === totalRound && playerScore > cpuScore) {
        finalScore.innerHTML = finalOutcome[0];
        disabled();
    } else if (round === totalRound && playerScore === cpuScore) {
        finalScore.innerHTML = finalOutcome[2];
        disabled();
    } else if (round === totalRound && playerScore < cpuScore) {
        finalScore.innerHTML = finalOutcome[1];
        disabled();
    }
}

function disabled() {
    options[0].style.visibility = "hidden";
    options[1].style.visibility = "hidden";
    options[2].style.visibility = "hidden";

    retryButton.style.visibility = "visible";
}

function refresh() {
    location.reload();
}

function start(){
    let overlay = document.getElementById("overlay");
    overlay.style.visibility = "hidden";
}