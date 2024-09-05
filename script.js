document.addEventListener('DOMContentLoaded', function() {
    loadImages();
});

function loadImages() {
    const data = JSON.parse(localStorage.getItem('galleryData')) || { vetrina: [], gallery1: [] };

    const mainGallery = document.getElementById('main-gallery');
    mainGallery.innerHTML = ''; // Clear existing content
    data.vetrina.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.onclick = () => openGallery(item.id);
        div.innerHTML = `<img src="${item.src}" alt="${item.alt}"><p>${item.alt}</p>`;
        mainGallery.appendChild(div);
    });

    for (const [key, gallery] of Object.entries(data)) {
        if (key.startsWith('gallery')) {
            const galleryContent = document.getElementById(`${key}-content`);
            galleryContent.innerHTML = ''; // Clear existing content
            gallery.forEach(item => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.innerHTML = `<img src="${item.src}" alt="${item.alt}"><p>${item.description}</p>`;
                galleryContent.appendChild(div);
            });
        }
    }
}

function openGallery(galleryId) {
    document.getElementById(galleryId).style.display = 'block';
}

function closeGallery(galleryId) {
    document.getElementById(galleryId).style.display = 'none';
}

function addVetrinaImage() {
    const src = document.getElementById('vetrina-src').value;
    const alt = document.getElementById('vetrina-alt').value;
    const id = document.getElementById('vetrina-id').value;

    const data = JSON.parse(localStorage.getItem('galleryData')) || { vetrina: [], gallery1: [] };
    data.vetrina.push({ src, alt, id });
    localStorage.setItem('galleryData', JSON.stringify(data));
    location.reload();
}

function addGalleryImage() {
    const id = document.getElementById('gallery-id').value;
    const src = document.getElementById('gallery-src').value;
    const alt = document.getElementById('gallery-alt').value;
    const description = document.getElementById('gallery-desc').value;

    const data = JSON.parse(localStorage.getItem('galleryData')) || { vetrina: [], gallery1: [] };
    if (!data[id]) data[id] = [];
    data[id].push({ src, alt, description });
    localStorage.setItem('galleryData', JSON.stringify(data));
    location.reload();
}
