const DomBody = document.querySelector('body');
const DomMainHeader = document.querySelector('h1');
const paragraphLinks = document.querySelector('p:nth-child(2)');
const paragraphLinksFont = document.querySelectorAll('a');
const DomDiv = document.querySelector('div');
const listItems = document.querySelectorAll('li');


const bodyColor = prompt('Set the page color:');
const bodyFont = prompt('Set font style:');
const HeaderAlign = prompt('Set main header position:');
const paragraphLinksBackground = prompt('Set background for first paragraph:');
const divInnerTextColor = prompt('Set font color to list and their header:');
const divInnerTextSize = prompt('Set font size to list and their header:');
const divInnerTextFontWeight = prompt('Set font weight to list and their header:');

DomBody.style.backgroundColor = bodyColor;
DomBody.style.fontStyle = bodyFont;
DomMainHeader.style.textAlign = HeaderAlign;
paragraphLinks.style.backgroundColor = paragraphLinksBackground;
function fontColor(){
    const fontColor = prompt('Set font color for first paragraph:');
    paragraphLinks.style.color = fontColor;
    for(let i = 0; i < paragraphLinksFont.length; i++){
        paragraphLinksFont[i].style.color = fontColor;
    };
};
fontColor();
DomDiv.style.color = divInnerTextColor;
DomDiv.style.fontSize = divInnerTextSize;
DomDiv.style.fontWeight = divInnerTextFontWeight;
function listMarkers(){
    const listDots = prompt('Set list marker type:')
    for(let i = 0; i < listItems.length; i++ ){
        listItems[i].style.listStyleType = listDots;
    };
};
listMarkers();
function links(){
   for(let i = 0; i < paragraphLinksFont.length; i++){
       let link = prompt(`Enter link for item#${i+1}`);
       paragraphLinksFont[i].href = link;
       paragraphLinksFont[i].innerText = link;
   } ;
};
links()
console.log(DomDiv);