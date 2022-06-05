window.onload = function () {
    var images = [
        'image2.jpeg',
        'image3.jpeg',
        'image6.jpeg',
        'image10.jpeg'
    ];

    document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random()*images.length)] + ')';
}
