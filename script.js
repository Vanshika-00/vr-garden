const images = [
    "images/ig-1.jpg",
    "images/ig-2.jpg",
    "images/ig-3.jpg",
    "images/ig-4.jpg",
    "images/ig-5.jpg",
    "images/ig-6.jpg",
    "images/ig-7.jpg",
    "images/ig-8.jpg",
    "images/ig-9.jpg",
    "images/ig-10.jpg",
    "images/ig-11.jpg",
    "images/ig-12.jpg",
    "images/ig-13.jpg",
    "images/ig-14.jpg",
    "images/ig-15.jpg",
    "images/ig-16.jpg",
    "images/ig-17.jpg",
    "images/ig-18.jpg",
    "images/ig-19.jpg",
    "images/ig-20.jpg",
    
 
];

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const image = images[randomNumber - 1]; 
    document.getElementById('fact-image').src = image; 
}
