// let JSONdata = '{"fact":"A cat has 230 bones in its body. A human has 206. A cat has no collarbone, so it can fit through any opening the size of its head.","length":130}';


// let valid = JSON.parse(JSONdata);

// let url = "https://catfact.ninja/fact";
// fetch(url)
//  .then((response)=>{
//     //  console.log(response);
//      return response.json();
// })
// .then((data)=>{
//     console.log(data);
//     return fetch(url);
// })
// .then((response)=>{
//     // console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((reject)=>{
//     console.log(reject);
// })


// async function getFacts(){
//     try{ 
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);

//         let res12 = await fetch(url);
//         let data12 = await res12.json();
//         console.log(data12);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2);
//     } catch(e){
//         console.log(e);
//     }

//     console.log('heloosjxihuhx xjhugcwg jhxuiwgdc')
// }
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{  let res = await axios.get(url);
        console.log(res.data);
    } catch(e){
        console.log(e);
    }
}