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

savetoDB('Harshit garg')    
.then(()=>{
    console.log("data 1 saved");
    return savetoDB('Java script')
})
.then(()=>{
    console.log('data 2 saved');
})
.catch(()=>{
    console.log('promise is rejected');
})