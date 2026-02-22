const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('menu')

btn.addEventListener('click',() => {
    box.classList.toggle('active');
});
menuBtn.addEventListener('click',()=>){
    menu.classList.toggle('active');
};