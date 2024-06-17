const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P1 success")
        reject("p1 fails");
    },3000)
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P2 success")
        reject("P2 fail")
    },1000)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P3 success")
        reject("p3 fails")
    },2000)
})

// Promise.all([p1, p2, p3])
// .then((res)=> console.log(res));

// Promise.allSettled([p1, p2, p3])
// .then((res)=>console.log(res));

// Promise.race([p1, p2, p3])
// .then((res)=>console.log(res));

// Promise.any([p1, p2, p3])
// .then((res)=>console.log(res));