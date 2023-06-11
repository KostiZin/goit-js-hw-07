import { galleryItems } from "./gallery-items.js";

// Change code below this line

const ulEl = document.querySelector(`.gallery`);

// Create a new markup

const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
 <a class="gallery__link" href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
);

ulEl.insertAdjacentHTML(`beforeend`, markup.join(``));

// // Create a function from the eventListener

function handleShow(evt) {
  evt.preventDefault();
}

ulEl.addEventListener(`click`, handleShow);

// Add settings from the SimpleLightbox

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
