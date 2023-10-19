let click = document.querySelector('.register-button');
let list = document.querySelector('.menu-list');

click.addEventListener("click", ()=>{
    list.classList.toggle('new-menu');
});