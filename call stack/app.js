// source in console : debugger 
// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     return two()+two();
// }
// three();

// callback hell ...................
let h1 = document.querySelector('h1');

// setTimeout(()=>{
//     h1.style.color='red';
// }, 1000)

// setTimeout(()=>{
//     h1.style.color='green';
// }, 2000);

// setTimeout(()=>{
//     h1.style.color='blue';
// }, 3000);

// The above way is repeated 

function changeColor(color, delay, nextColor){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColor) nextColor();
    }, delay)
}


changeColor('red', 1000, ()=>{
    changeColor('orange', 1000, ()=>{
        changeColor('blue', 1000, ()=>{
            changeColor('green', 1000);
        });
    });
});



