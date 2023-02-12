const log_in = document.querySelector('.submit_log_in');
const sign_in = document.querySelector('.submit_sign_in')
const fields = document.querySelectorAll('.fields');
const social_media_container = document.querySelectorAll('.another-method-container')
let a =false;
//when user click to the button, it will direct to homepage
log_in.addEventListener('click',function(event){
event.preventDefault();
window.location.href='http://127.0.0.1:5500/homepage.html'
})
sign_in.addEventListener('click',function(event){
event.preventDefault();
alert("Sign in succesffuly");
window.location.href='http://127.0.0.1:5500/homepage.html'
})
//when user click to  log-in, screen will display the log-in screen
//sign-in function is the same 
const log_in_button= document.querySelector('#log-in');
const sign_in_button= document.querySelector('#sign-in');

function display_none_before(a){//
    if(a){
sign_in_button.style.setProperty('--SignIn_underline','none')
log_in_button.style.setProperty('--LogIn_underline','block')

}else{
   log_in_button.style.setProperty('--LogIn_underline','none')
   sign_in_button.style.setProperty('--SignIn_underline','block')
}
}
log_in_button.addEventListener('click',function(){
    display_none_before(true);
    
    for(let i=0;i<fields.length;i++){
       
        fields[i].classList.toggle('hidden');
        social_media_container[i].classList.toggle('hidden')
            
        }   
})
sign_in_button.addEventListener('click',function(){
    display_none_before(false);
    
        for(let i=0;i<fields.length;i++){
            
            fields[i].classList.toggle('hidden');
            social_media_container[i].classList.toggle('hidden')
          
    }
    
})
display_none_before(true);
//nhap lai mat khau
const password = document.querySelector(".password");
const retype_password=document.querySelector('.retype_password');
const correct_password = document.querySelector('.correct');
const incorrect_password = document.querySelector('.incorrect');
retype_password.addEventListener('input',function(){
    if(retype_password.value===password.value){
        correct_password.classList.remove('hidden');
        incorrect_password.classList.add('hidden');
    }else{
        
        correct_password.classList.add('hidden');
        incorrect_password.classList.remove('hidden');
    }
})

