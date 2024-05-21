let container = document.querySelector('.container');
let box = document.querySelector('.box');
let button = document.querySelector('button');

let position = [{ 'X': 0 },
                { 'Y': 0 }
               ]


button.addEventListener('click', () => {
    move();
})


function move() {
   let posX = position[0].X++;
    let posY = position[1].Y++;
    box.style.top  = posY +'%';
    box.style.left = posX +'%';
    if(posX>'90%' && posY>'90%'){
        cancelAnimationFrame(move);
        return;
    }
    window.requestAnimationFrame(move);
}

// window.requestAnimationFrame(move);
 