const response = document.querySelector(".response");
const question = document.querySelector("input");
const button = document.querySelector("button");
const Array = [
    "Oh look at Who is here? &#128525" ,
    "Hey How can i help you? &#128522 ",
    "Hey Sweetie ! Wanna speak together? &#128512 ",
    "Hi buddy! i'm here to help you &#128519"

]

button.addEventListener("click", function(){
    let res = Math.floor(Math.random()*Array.length);
    response.innerHTML = Array[res];
    question.value ="";
    console.log(res);
});