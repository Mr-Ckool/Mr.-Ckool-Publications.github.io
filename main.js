window.onload = function () {
    var images = [
        'image3.jpeg',
    ];

    document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random()*images.length)] + ')';
}
