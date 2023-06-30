let Singers = [
    {
        name:'Daffy',
        singer: 'Talkdown'
    },
    {
        name:'Nakhla',
        singer: 'Mehrad Hidden'
    },
    {
        name:'Easy',
        singer: 'Behzad Leito, Sepehr Khalse'
    },
    {
        name:'Bottle',
        singer: 'Talkdown'
    }
]

let SingersDetails = Singers.map(function(item){
    return '<div>'+ item.name + ' ' + ' By ' + item.singer + '</div>'
})

const info = document.querySelector('.info');
info.innerHTML = SingersDetails.join('\n');