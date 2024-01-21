const myButton = document.querySelector ('button');
const image = document.querySelector ('img');
const images=["cat1.jpeg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg", "cat7.jpg", "cat8.jpg", "cat9.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage(){
    console.log(image);

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];
    

}