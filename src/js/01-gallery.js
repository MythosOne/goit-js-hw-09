// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(SimpleLightbox);
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryImage = galleryItems.map(({ preview, description, original }) =>
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`);

gallery.insertAdjacentHTML("beforeend", galleryImage.join(""));
// gallery.addEventListener("click", onClick);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});