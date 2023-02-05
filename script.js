const addingPostNote = document.querySelector('#blabla');
const add_icon = document.querySelector('.add-icon');
const hamburger_button = document.querySelector('.hamburger-button');
const function_items= document.querySelector('.functions');
add_icon.addEventListener("mouseover",function(){
    
    addingPostNote.classList.remove('hidden');
})
add_icon.addEventListener("mouseout",function(){
    addingPostNote.classList.add('hidden');
})
hamburger_button.addEventListener("click",function(){
if(function_items.style.display==='none'){
    function_items.style.display='block'
}else{
    function_items.style.display='none'
}
})