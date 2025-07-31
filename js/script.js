document.addEventListener('DOMContentLoaded',()=>{
    console.log('script cargado');
    const iconMenu=document.getElementById('icon-menu');
    const menuMobile=document.querySelector('.menu-mobile');

    iconMenu.addEventListener('click', ()=>{
        console.log('click en icon-menu');
        menuMobile.classList.toggle('open');
        iconMenu.classList.toggle('open');
        
    });

    
   
});