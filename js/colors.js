const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ["#FF66B2", "#99CCFF", "#FFCCE5", "#6DE2B0", "#CC0066", "#B266FF", "#FF9933", "#B2FF66"];


myButton.addEventListener('click', changeColor);

function changeColor(){
    console.log(myBox);

    let randomIndex = Math.floor(Math.random() * colors.length) ;
    console.log(randomIndex);
    myBox.style.backgroundColor= colors[randomIndex];
}