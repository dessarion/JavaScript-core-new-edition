const colorBox = document.querySelector('.colors');
const secretBox = document.querySelector('.secret');
const cells = document.querySelectorAll('.cell');
const listItems = document.querySelectorAll('li');
let index = 0;
const secrets = ['You want to know?','I dont tell You!','I have a secret!'];
const colors = ['green','red','yellow']; 

function colorChanging(){       
    index++;
    if(index > 2){
        index = 0;
    };
    event.target.style.backgroundColor = colors[index];    
};

colorBox.addEventListener('mouseover',colorChanging);
colorBox.addEventListener('mouseout', () => {
    event.target.style.backgroundColor = 'rgb(136, 26, 136)';
});
secretBox.addEventListener('mouseover',()=>{
    event.target.innerText = secrets[0];
    event.target.style.backgroundColor = colors[2];
});
secretBox.addEventListener('mousedown',()=>{
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    event.target.innerText = secrets[1];
});
secretBox.addEventListener('mouseup',()=>{
    event.target.innerText = secrets[0];
    event.target.style.backgroundColor = colors[2];
})
secretBox.addEventListener('mouseout',()=>{
    event.target.innerText = secrets[2];
    event.target.style.backgroundColor = 'rgb(136, 26, 136)';
});

function cellsEvents(){
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener('click',()=>{
            let imageUrl = prompt('Enter url for background:');
            event.target.style.backgroundImage = `url(${imageUrl})`;
        });
    };
};
cellsEvents();

function listItemsColor(){
    for(let i = 0; i< listItems.length; i++){
        let colorInTag = listItems[i].textContent;
        listItems[i].addEventListener('click',()=>{
            if(event.target.style.color === colorInTag){
                event.target.style.color = '#000';
            } else {
                event.target.style.color = colorInTag;
            }; 
        });
    };
};
listItemsColor();

