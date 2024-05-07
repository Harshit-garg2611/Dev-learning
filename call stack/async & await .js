// function getNum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*11);
//             console.log(num);
//             resolve();
//         }, 1000)
//     })
// }


// async function print(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// Colour change 
// let h1 = document.querySelector('h1');

// function colourChange(color){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolve();
//         }, 1000)
//     })
// }

// async function change(){
//     await colourChange('red');
//     await colourChange('green');
//     await colourChange('blue');
//     await colourChange('pink');
//     await colourChange('purple');
//     await colourChange('orange');
//      colourChange('crimson');
// }


let h1 = document.querySelector('h1');

function colourChange(color){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          let random = Math.floor(Math.random()*10);
          if(random>5) reject('reject promise');
            h1.style.color=color;
            resolve();
        }, 1000)
    })
}

async function change(){
try{await colourChange('red');
    await colourChange('green');
    await colourChange('blue');
    await colourChange('pink');
    await colourChange('purple');
    await colourChange('orange');
     await colourChange('crimson');
     }
    catch(err){
        console.log(err);
    }
    let a=5;
    let b=6;
    console.log(a+b);
}