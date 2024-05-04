// let btn = document.querySelector('button');
// // btn.onclick = function() {
// //   console.log("Button is clicked ");
// // }

// function sayHello(){
//     console.log("You clicked the button");
// }
// function name(){
//     let name = prompt("enter name");
//     console.log(`Welcome ${name}`);
// }
// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");
// // for(btn of btns){
// //     btn.onclick=sayHello;
// //     // btn.onmouseenter = function(){
// //     //     console.log("enter");
// //     // };
// // }

// for(btn of btns){
//     btn.addEventListener("click", name);
//     btn.addEventListener("click", sayHello);
// }
//


// Activity : 
// make a simple web page on clicking the button it changes bg-color of box and color of text written
// let btn = document.querySelector("button");
// function changeColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     return `rgb(${red}, ${green}, ${blue})`;
// }
// btn.addEventListener("click", function () {
//     let color = changeColor();
//     document.querySelector("h1").innerText = color;
//     document.querySelector(".box").style.backgroundColor = color;
// });


let btn = document.querySelector('button');
btn.addEventListener("click", function(e){
    console.log(e);
})
let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event){
    console.log("code is ", event.code);
    console.log("code is ",event.key);
    console.log("key press");
})