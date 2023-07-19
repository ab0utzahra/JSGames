// SELECTORES 
const openbtn = document.querySelector('.open-btn');
const closebtn = document.querySelector('.close-btn');
const modalcontent = document.querySelector('.modal-wrapper');


// FUNCTIONS 

const closemodal = () => {
    modalcontent.innerText ='Ok ! we do not have anything here yet';
    closebtn.classList.add('d-none');
    modalcontent.classList.remove('bg-light');
};

// EVENTS LISTENERS 

openbtn.addEventListener('click', ()=>{
    modalcontent.innerText = 'Thanks 💜 I was so tired and could not design this page well sooo it works 😇';
});

closebtn.addEventListener('click', closemodal);


