// logic : 
// Step 1 : key press -> game start 
// step 2 : level 1 + light flash 
//  tracker : game sequence["yellow", "green", "blue"....] + user sequence 
// step 3 : user press the button 
// step 4 : check 
// if(user==game){
        //    level up
// }else{
    // wrong sequence pls try again 
// }


let gameSeq = [];
let userSeq = [];
let highScore = 0;

let isGameStart = false;
let level = 0;
let h2 = document.querySelector('h2'); 

let color = ["red", "green", "orange", "blue"];

document.addEventListener('keypress', function(){
    if(isGameStart==false){
        // console.log("game started");
        isGameStart=true;
        levelUp();
    }
})


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 150)
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    // random button choosen by game
    let randomIndx = Math.floor(Math.random()*4);
    let randCol = color[randomIndx];
    gameSeq.push(randCol);
    let randomBtn = document.querySelector(`.${randCol}`);  
    btnFlash(randomBtn);
}
function cheCKAns(idx){
    // console.log("curr level", level);
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout('levelUp()', 500);
        }
    }else{
        highScore=Math.max(highScore, level);
        h2.innerHTML=`Game Over ! Your Score is <b>${level}</b> <br> Highest score ${highScore} <br> Press any key to restart `;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        }, 250)
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userCol = btn.getAttribute('id');
    userSeq.push(userCol);
    cheCKAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click', btnPress);
}
function reset(){
    level=0;
    userSeq=[];
    gameSeq=[];
    isGameStart=false;
}