let startButton = document.querySelector('#start-btn');
let box = document.querySelectorAll('.grid-item');
let img = document.querySelector('.hide');
let turnO = true; 
let result = document.querySelector('.result');
let turnMusic = new Audio('assets/ting.mp3');
let winAudio = new Audio('assets/music.mp3');
let overMusic = new Audio('assets/gameover.mp3');
let gameOver = false;

const winPatterns = [
                [0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8]
];

startButton.addEventListener('click', resetFunction);


function resetFunction(){
    turnO=true;
    for(el of box){
        el.disabled=false;
        el.innerText='';
    }
    img.classList.add('hide');
    result.innerText='';
    winAudio.pause();
}



box.forEach(element => {
    element.addEventListener('click', ()=>{
        if(turnO){
            element.innerText = "O";
            turnO=false;
        }else{
            element.innerText = "X";
            turnO=true;
        }
        element.disabled = true;
        turnMusic.play();
        checkWinner();
    })
})

function disabledBox(){
    for(el of box){
        el.disabled=true;
    }
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                result.innerText = `Winner ${pos1}`;
                img.classList.remove('hide');
                winAudio.play();
                disabledBox();
            }
        }
    }
}