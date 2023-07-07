// List
const stuff = [
 {
    id :1,
    name :"Zahra Aledavood",
    carrier: "Web Developer",
    img : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    description : "Ye Chizi Inja Hast"
 },
 {
    id :2,
    name :"Rasta Aledavood",
    carrier: "Front-end Developer",
    img : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-2_np9x5l.jpg",
    description : "Hichi nist"
 },
]

// SELECTORES
const picture = document.querySelector('.my-pic');
const names = document.querySelector('.name');
const carrier = document.querySelector('.carrier');
const nextbtn = document.querySelector('.nextbtn');
const prevbtn = document.querySelector('.prevtbtn');
const randombtn = document.querySelector('.randombtn');
let thisitem = 0;

// EVENT LISTENERS
window.addEventListener('DomContentLoaded',()=>{
    showItem();
})

// FUNCTIONS 

function showItem () {
    const item = stuff[thisitem];
    picture.src = item.img;
    description.textContent = item.description;
    carrier.textContent = item.carrier ;
    names.textContent = item.name;
};


// btns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         const style = e.currentTarget.classList;
//         if(style.contains('nextbtn')){
//             thisitem ++ ;
//              if(thisitem > stuff.length - 1){
//                thisitem = 0 ;
//              }      
//         } 
//         showItem();
        
//     })
    
// });

nextbtn.addEventListener(('click'), ()=>{
   thisitem ++ ;
    if(thisitem > stuff.length - 1 ){
        thisitem = 0
    }
});

prevbtn.addEventListener(('click'), ()=>{
    thisitem -- ;
     if(thisitem < stuff.length - 1 ){
         thisitem = 0
     }
 });