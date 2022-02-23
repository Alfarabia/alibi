let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

let alert = document.querySelector(".login-form .alert");
let submit = document.querySelector(".login-form .submit");
submit.addEventListener("click", function(){
    alert.classList.remove("disp-none");
    alert.classList.add("disp-block");
})

