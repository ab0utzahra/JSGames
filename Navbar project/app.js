//SELECTORES

const sidebarToggle = document.querySelector('.sidebar-toggle');
const links = document.querySelector('.links');
const showicon = document.querySelector('.fa-bars');
const closeicon = document.querySelector('.fa-times');


// EVENT LISTENERS

sidebarToggle.addEventListener('click', ()=>{
    // if(links.classList.contains('show-link')){
    //     links.classList.remove('show-link');       
    //     closeicon.classList.remove('fa-times');
    //     closeicon.classList.add('fa-bars');
    // }
    // else {
    //     links.classList.add('show-link');
    //     showicon.classList.remove('fa-bars');
    //     showicon.classList.add('fa-times');
    // }

    links.classList.toggle('show-link');
    showicon.classList.toggle('fa-times');
});



// FUNCTIONS 