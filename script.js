const images = [
    "images/im-1.jpg",
    "images/im-2.jpg",
    "images/im-3.jpg",
    "images/im-4.jpg",
    "images/im-5.jpg",
    "images/im-6.jpg",
    "images/im-7.jpg",
    "images/im-8.jpg",
    "images/im-9.jpg",
    "images/im-10.jpg",
    "images/im-11.jpg",
    "images/im-12.jpg",
    "images/im-13.jpg",
    "images/im-14.jpg",
    "images/im-15.jpg",
    "images/im-16.jpg",
    "images/im-17.jpg",
    "images/im-18.jpg",
    "images/im-19.jpg",
    "images/im-20.jpg",
    
 
];

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const image = images[randomNumber - 1]; 
    document.getElementById('fact-image').src = image; 
}
