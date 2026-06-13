let songImage = document.querySelector('.song-image img');

let count = 0;
let imageSequence = 1;
setInterval(counter, 1000);
function counter() {
    count++;

    if (count % 10 == 0) {
        imageSequence++;

        if (imageSequence >= 6) {
            imageSequence = 1
        }
        songImage.src = "img/cleb" + imageSequence + ".jpg"
    };
};