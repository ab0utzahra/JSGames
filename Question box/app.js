// SELECTORES
 
questionsBox = document.querySelector('.questions-box');
showClick = questionsBox.querySelector('.show-click');
questionAnswer = questionsBox.querySelector('.qusetion-answer');
openBtn = questionsBox.querySelector('.fa-plus-square');
closeBtn = questionsBox.querySelector('.fa-minus-square');

// FUNCTIONS 



// EVENT LISTENERS 

showClick.addEventListener('click', function(){
   questionAnswer.classList.toggle('show-answer');
   openBtn.classList.toggle('d-none');
   closeBtn.classList.toggle('d-block');
});

