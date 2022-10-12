window.addEventListener('DOMContentLoaded', () => { 
    const menu = document.querySelector('.navbar'), 
    menuItem = document.querySelectorAll('.navbar_item'), 
    hamburger = document.querySelector('.hamburger'); 
 
    hamburger.addEventListener('click', () => { 
        hamburger.classList.toggle('hamburger_active'); 
        menu.classList.toggle('navbar_active'); 
    }); 
 
    menuItem.forEach(item => { 
        item.addEventListener('click', () => { 
            hamburger.classList.toggle('hamburger_active'); 
            menu.classList.toggle('navbar_active'); 
        }) 
    }) 
})