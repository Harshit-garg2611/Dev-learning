const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve");
    }, 5000)
})

// older method 
function getData() {
    // js engine will not wait for the promise to be resolved 
    p.then((res) => console.log(res));
    console.log("Hello buddy !");
}


async function handlePromise() {
    console.log("dont wait buddy ")
    // here JS engine wait for the promise to resolve at line 17 above code execute quickly 
    const val = await p;
    console.log(val);
    console.log("Hello buddy !");

    const val1 = await p;
    console.log(val1);
    console.log("Hello buddy !");
    // above two wait for 10 seconds than executes sim. 
}
handlePromise();


// fetch function 
// fetch() => is a promise whenever it resolved gives you a response object 
//  and this response object have a body which is a readable stream && whenever you have to convert this to json than 
//  .json 

// fetch()=> response.json() => result

// resolve fetch like this 
const API_URL = "";
async function handle() {
    const val = await fetch(url);
    const jsonValue = await val.json();
    console.log(jsonValue);
}