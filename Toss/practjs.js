
const message = document.querySelector('.mymessage');
const buttons = document.querySelectorAll("button");
const CoinArray = ["شیر", "خط"];
let scores = [0, 0];


for (let i=0; i<buttons.length ; i++) {
    buttons[i].addEventListener("click", tossgame)

}
function tossgame (e) {
    let PlayerGuess = e.target.innerText;  
    let computertoss = Math.floor(Math.random()*2);
    let ComputerGuess = CoinArray[computertoss];
    let output ;
    message.innerHTML = "من این و انتخاب کردم : " +  ComputerGuess + "  |  "  + "تو اینو انتخاب کردی : " +  PlayerGuess + "</br>"+ "</br>";
    if (PlayerGuess === ComputerGuess) {
        output = "تو بردی الان خیلی خوشحالی ؟ " + "&#128528" + "</br>";
        scores[0]++;
    }
    else  
    {
        output="باختی " + "&#128527" + "</br>";
        scores[1]++;
    }

    message.innerHTML += output + "</br>" + "امتیاز تو : " + scores[0] + " | "  + "  امتیاز من 	 : " + scores[1] ;
}
