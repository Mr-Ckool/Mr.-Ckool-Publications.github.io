window.onload = function () {
    var images = [
        'image1.jpeg',
        'image2.jpeg',
        'image3.jpeg',
    ];

    document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random()*images.length)] + ')';
}
