// //  a function that executes when internet speed is high and does not executes when internet speed is slow 
function savetoDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;    // random func returns value 1 to 10 
        if(internetSpeed>4){
            resolve("success : data was saved");
        }else{
            reject('failure : data was not saved ');
        }
    })
}; 

// // ..........................................................................................................
// let request = savetoDB('Harshit garg');    // this request is a promise object return by savetoDB function 
// request.then(()=>{
//     console.log("promise is accepted");
//     console.log(request);
// })
// .catch(()=>{
//     console.log('promise is rejected');
//     console.log(request);
// })

// // .............................more compact version of above 
 savetoDB('Harshit garg')    
.then(()=>{
    console.log("promise is accepted");
})
.catch(()=>{
    console.log('promise is rejected');
})