let input = document.querySelector("#task");
let btn = document.querySelector("#add")
let ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    let item = document.createElement("li");
    item.setAttribute('id', 'doneTask')
    item.innerText=input.value;
    let task = document.createElement('input');
    task.setAttribute('type', 'checkbox');
    task.setAttribute('class', 'delete')
    ul.appendChild(item);
    item.insertAdjacentElement('afterbegin', task);
    input.value="";
} );

ul.addEventListener('click', function(event){
    if( event.target.nodeName='INPUT'){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

// let del = document.querySelectorAll('.delete');
// for(delBtn of del){
//     delBtn.addEventListener('click', function(){
//         let par = delBtn.parentElement;
//         par.remove();
//     })
// }
