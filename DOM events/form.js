document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    // alert("form is submit");
    let inp = document.querySelector("input");
    console.dir(inp); // provide input object when submit 
    // console.log(inp.innerText); 
    // we can't able to get inner text in input element instead we use value to get what is passed in input
    console.log(inp.value);
})