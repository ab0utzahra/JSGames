// SELECTORES
const resetbtn = document.querySelector('.reset');
const desbtn = document.querySelector('.descrease');
const inbtn = document.querySelector('.increase');
const container = document.getElementById('contain');
const btns = document.querySelectorAll('.btn');
let count = 0;

// EVENT LISTENERS

desbtn.addEventListener("click", ()=>{
   count++ ;
   container.textContent = count;
});

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const style = e.currentTarget.classList;
        if (style.contains("increase")){
            count -- ;
            
        }
        if (style.contains("reset")) {
            count = 0 ;
        }
        container.textContent = count;
    })
})

// FUNCTIONS