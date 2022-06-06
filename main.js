window.onload = function () {
    var images = [
        'image1.jpeg',
    ];

    document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random()*images.length)] + ')';
}
