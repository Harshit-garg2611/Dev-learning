const foodSound = new Audio('assets/food.mp3');
const gameOverSound = new Audio('assets/gameover.mp3');
const moveSound = new Audio('assets/move.mp3');
const board = document.getElementById('game-board');
let score = document.querySelector('#score');
let highScore = document.querySelector('#highScore');
let currScore = 0;
let highscore = 0;

let dir = { x: 0, y: 0 };
let snakePos = [{
    x: 13,
    y: 13
}
];
let food = { x: 6, y: 7 }
let lastTime = 0;
let speed = 10;
// game loop 
function main(currTime) {
    window.requestAnimationFrame(main);
    if ((currTime - lastTime) / 1000 < 1 / speed) {
        return;
    }
    lastTime = currTime;
    gameEngine();
}

function isCollide(snakeArr) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
            return true;
        }
    }

    if (snakeArr[0].x === 0 || snakeArr[0].x >= 20 || snakeArr[0].y === 0 || snakeArr[0].y >= 20) {
        return true;
    }
}

function gameEngine() {
    // update snake & food array 
    // if snake collide 
    if (isCollide(snakePos)) {
        // highScore.innerText = `High Score : ${highscore}`;
        gameOverSound.play();
        // alert('game over !');
        snakePos = [{
            x: 13,
            y: 13
        }]
        dir = { x: 0, y: 0 };
        food = { x: 6, y: 7 };
        currScore = 0;
        score.innerText = `Score : ${currScore}`;

    }
    // gameOverSound.pause();


    // if snake has eaten the food 
    if (snakePos[0].x === food.x && snakePos[0].y === food.y) {
        foodSound.play();
        currScore += 1;
        highscore = Math.max(currScore, highscore);
        highScore.innerText = `High Score : ${highscore}`;
        score.innerText = `Score : ${currScore}`;
        snakePos.unshift({ x: snakePos[0].x + dir.x, y: snakePos[0].y + dir.y });
        food = { x: Math.floor(Math.random() * 17 + 2), y: Math.floor(Math.random() * 17 + 2) }
    }

    // moving the snake 
    for (let i = snakePos.length - 2; i >= 0; i--) {
        snakePos[i + 1] = { ...snakePos[i] };
    }
    snakePos[0].x += dir.x;
    snakePos[0].y += dir.y;

    // display snake and food on screen
    board.innerHTML = "";

    // snake
    snakePos.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })


    // food display 
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}


//   main logc of gama 

window.requestAnimationFrame(main);

window.addEventListener('keydown', e => {
    dir = { x: 0, y: 1 }; // start game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            // console.log('Arrow UP');
            dir.x = 0;
            dir.y = -1;
            break;
        case "ArrowDown":
            // console.log('Arrow Down');
            dir.x = 0;
            dir.y = 1;
            break;
        case "ArrowLeft":
            // console.log('Arrow Left');
            dir.x = -1;
            dir.y = 0;
            break;
        case "ArrowRight":
            // console.log('Arrow Right');
            dir.x = 1;
            dir.y = 0;
            break;
        default: break;
    }
})