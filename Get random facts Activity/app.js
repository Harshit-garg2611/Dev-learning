// let btn = document.querySelector('button');
// let p = document.querySelector('#result');

// btn.addEventListener('click', async ()=>{
//     let fact = await getFact();
//     p.innerText = fact;
// })


// let url = 'https://catfact.ninja/fact';

// async function getFact(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e){
//         return "404";
//     }
// }



let btn = document.querySelector('button');
let img = document.querySelector('#image')
let url = 'https://dog.ceo/api/breeds/image/random';
btn.addEventListener('click', async ()=>{
    let link = await getImage();
    img.setAttribute('src', link);
})

async function getImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
        // console.log(res);
    } catch(e){
        return "404";
    }
}