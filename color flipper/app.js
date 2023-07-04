// SELECTORES
const colors = ['yellow', 'purple', 'green', 'pink', 'blue']
const button = document.querySelector('.change-color');
const backcolor = document.querySelector('.back-color');
const text = document.querySelector('.hex-color');



// EVENT LISTENERS

button.addEventListener("click", () =>{
    const randomNumber = randomNum();   
   document.body.style.backgroundColor = colors[randomNumber];
   text.innerText = colors[randomNumber];
})



// FUNCTIONS

randomNum = () => {
    return Math.floor(Math.random()* colors.length)
}