// List
const stuff = [
 {
    id :1,
    name :"Person 2",
    carrier: "Web Developer",
    img : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    description : "Ye Chizi Inja Hast"
 },
 {
    id :2,
    name :"Person 3",
    carrier: "Front-end Developer",
    img : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-2_np9x5l.jpg",
    description : "Hichi nist"
 },
 {
    id :3,
    name :"Person 1",
    carrier: "UX Designer",
    img : "./img/11.png",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde distinctio vero, facilis tenetur illo qui nihil obcaecati. Pariatur harum mollitia omnis velit consectetur eveniet nam ullam ratione eligendi tempore!"
 }

]

// SELECTORES
const picture = document.querySelector('.my-pic');
const names = document.querySelector('.name');
const carrier = document.querySelector('.carrier');
const description = document.querySelector('.description');
const nextbtn = document.querySelector('.nextbtn');
const prevbtn = document.querySelector('.prevbtn');
const randombtn = document.querySelector('.randombtn');
let thisItem = 0;

// EVENT LISTENERS
window.addEventListener('DomContentLoaded',()=>{
    showItem();
})

// FUNCTIONS 

function showItem () {
    const item = stuff[thisItem];
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
   thisItem ++ ;
    if(thisItem > stuff.length - 1 ){
        thisItem = 0
    }
    showItem();
});

prevbtn.addEventListener(('click'), ()=>{
    thisItem -- ;
     if(thisItem < stuff.length - 1 ){
         thisItem = 0
     }
     showItem();
 });

 randombtn.addEventListener(('click'), ()=>{
    thisItem = Math.floor(Math.random() * stuff.length);
    showItem();
   
 });