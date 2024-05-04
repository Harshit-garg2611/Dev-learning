let box = document.querySelector('#text');
box.addEventListener("input", function(){
    document.querySelector('p').innerText=this.value;
})