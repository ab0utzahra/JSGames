const hover = document.querySelector('.circle');

hover.addEventListener('mouseenter', ()=> {
    if(!hover.classList.contains('hover')){
        hover.classList.add('hover');
    }
})

hover.addEventListener('mouseleave', ()=> {
    if(hover.classList.contains('hover')){
        hover.classList.remove('hover');
    }
})