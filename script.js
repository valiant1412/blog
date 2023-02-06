const addingPostNote = document.querySelector('#blabla');
const add_icon = document.querySelector('.add-icon');
const hamburger_button = document.querySelector('.hamburger-button');
const function_items= document.querySelector('.functions');
const search_button = document.querySelector('.submit');
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
search_button.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='http://127.0.0.1:5555/searching-page/';
})