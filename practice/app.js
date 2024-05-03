// Practice Q's 
// a <p> in red colour that says Hey! I'm red . 
let para = document.createElement('p'); 
para.innerText = "Hey! I'm red .";
document.querySelector("body").append(para);
// para.style.color="red";
para.classList.add('red');

// a h3 with blue text that says Hey ! I am blue h3
let h3 = document.createElement('h3');
h3.innerText = "Hey ! I am blue h3";
document.querySelector('body').append(h3);
h3.classList.add('blue');


// a div with black border & pink bg with following 
// another h1 that says I m a div 
//  a p that says me too 

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');
document.querySelector('body').append(div)
div.appendChild(h1);
div.insertAdjacentElement("beforeend", p)
div.classList.add("div1");
h1.innerText="I m a div ";
p.innerText="me too";