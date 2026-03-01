import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader-wrapper");
const SLbGallery = new SimpleLightbox(".gallery a");


export function createGallery(images) {
    let markup = images.map((image) =>
        `<li class="gallery-item">
    <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" title=""></a>
    <ul class="info">
    <li class="info-item">likes: ${image.likes}</li>
    <li class="info-item">views: ${image.views}</li>
    <li class="info-item">comments: ${image.comments}</li>
    <li class="info-item">downloads: ${image.downloads}</li>
    </ul>
    
</li>`
    ).join("");

    gallery.insertAdjacentHTML('beforeend', markup);
    SLbGallery.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.add("active");
}

export function hideLoader() {
    loader.classList.remove("active");
}