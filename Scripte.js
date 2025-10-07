const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Images de chaque domaine (à personnaliser avec tes propres images)
const domainImages = {
    agriculture: [
        '65b2ca7b70cf565f9b0fa0863b6fa428.jpg',
        '6b93a26931dfd041cf0a8f511f24e8a7.jpg',
        'IMG-20250930-WA0003.jpg'


    ],
    volaille: [
        'IMG-20250930-WA0000.jpg',
        
    ],
    pisciculture: [
        'IMG-20250930-WA0002.jpg',
        'IMG-20250920-WA0001.jpg'
    ],
    transformation: [
        'a6c574c79724ea42fe5d808b00ec4659.jpg'
    ]
};

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox .prev');
const nextBtn = document.querySelector('.lightbox .next');
let currentDomain = '';
let currentIndex = 0;

// Ouvre la lightbox avec les images du domaine
function openLightbox(domain, index = 0) {
    currentDomain = domain;
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
}

function showImage() {
    const images = domainImages[currentDomain];
    if (images && images.length > 0) {
        lightboxImg.src = images[currentIndex];
    }
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function nextImage() {
    const images = domainImages[currentDomain];
    if (images) {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    }
}

function prevImage() {
    const images = domainImages[currentDomain];
    if (images) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    }
}

// Événements
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Ouvre la galerie au clic sur une image de domaine
const domainImgs = document.querySelectorAll('.domain-img');
domainImgs.forEach(img => {
    img.addEventListener('click', function() {
        const card = this.closest('.card');
        const domain = card.getAttribute('data-domain');
        openLightbox(domain, 0);
    });
});

// Ferme la lightbox si on clique en dehors de l'image
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

const heroBgSlider = document.querySelector('.hero-bg-slider');
if (heroBgSlider) {
    let currentIndex = 0;
    let imgEl = document.createElement('img');
    imgEl.src = sliderImages[currentIndex];
    heroBgSlider.appendChild(imgEl);
    function showNextImage() {
        imgEl.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % sliderImages.length;
            imgEl.src = sliderImages[currentIndex];
            imgEl.style.opacity = 0.7;
        }, 1000);
    }
    setInterval(showNextImage, 4000);
}
