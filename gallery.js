const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

function addImage() {
    const img = document.createElement('img');
    img.src = `https://placekitten.com/100/100?image=${math.floor(math.random()*16)}`;
    img.addEventListener("click", () => {
        lightboximg.src = img.src;
        lightbox.style.display ="flex";
    });
    gallery.appendChild(img);
}


