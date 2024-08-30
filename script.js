const images = [
    "images/im-1.jpg",
    "images/im-2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
    "image13.jpg",
    "image14.jpg",
    "image15.jpg",
    "image16.jpg",
    "image17.jpg",
    "image18.jpg",
    "image19.jpg",
    "image20.jpg"
];

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 2) + 1; 
    const image = images[randomNumber - 1];

    document.getElementById('fact-image').src = image;
}
