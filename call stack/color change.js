let h1 = document.querySelector('h1');


function colorChange(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve();
        }, delay)
    })
}

colorChange('red', 1000)
.then(()=>{
   return colorChange('green', 500);
})
.then(()=>{
    return colorChange('blue', 500);
})
.then(()=>{
    return colorChange('pink', 500);
})
.then(()=>{
    return colorChange('orange', 500);
})