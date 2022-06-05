window.onload = function () {
    var images = [
        'image1.jpeg',
        'image2.jpeg',
        'image3.jpeg',
        'image4.jpeg',
        'image5.jpeg',
        'image6.jpeg',
        'image7.jpeg',
        'image8.jpeg',
        'image9.jpeg',
        'image10.jpeg'
    ];

    document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random()*images.length)] + ')';
}
