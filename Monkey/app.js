const closeface = document.querySelector('.close');
const openface = document.querySelector('.open');

closeface.addEventListener('click', ()=> {
  openface.classList.add('active');
  closeface.classList.remove('active');
  
})

openface.addEventListener('click', () =>{
    closeface.classList.add('active');
    openface.classList.remove('active');
    alert("Isn't cute?😇")
})

