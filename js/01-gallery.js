import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(`.gallery`);

// Create a new markup

const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
  <img class="gallery__image" src="${original}" alt="${description}" data-source="${original}"/>
  </a>
</li>`
);

// Add a new markup to the HTML

ulEl.insertAdjacentHTML(`beforeend`, markup.join(``));

// Create a new function from addEventListener

function handleShow(evt) {
  // Create delegation (when we click on empty field (not img) nothing will be clicked)

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  // Prevent default behaviour

  evt.preventDefault();

  // Check what picture has been chosen by clicking

  const liData = evt.target.dataset.source;
  const currentItem = galleryItems.find(({ original }) => original === liData);

  // Create a new markup for a new modal window

  const instance = basicLightbox.create(
    `<li><img class="gallery__image" src="${currentItem.original}" alt="${currentItem.description}" data-source="${currentItem.original}"/></li>`
  );

  // The window will be shown

  instance.show();

  // Create a new event to close the window with Escape

  ulEl.addEventListener(`keydown`, handleClose);

  function handleClose(evt) {
    if (evt.keyCode === 27) {
      instance.close();

      // Delete an event when the modal window is closed

      ulEl.removeEventListener("keydown", handleClose);
    }
  }
}

//  Create an event open a modal window on click (function above)

ulEl.addEventListener(`click`, handleShow);
