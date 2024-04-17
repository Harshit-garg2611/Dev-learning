// const min = prompt("Enter min. no");
const max = prompt("Enter max. no: ");
console.log("write quit to end ! ");
const output = Math.floor(Math.random() * (max))+1;
let guess = (prompt("guess the number"));
while (true) {
    if(guess=="quit"){
        break;
    }
    if (guess == output) {
        confirm("You guess the right no.");
        break;
    } else {
        if(guess<output){
           guess = prompt("enter large");
        }else{
            guess = prompt("enter small");
            
        }
    }
    
}