import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(`.gallery`);

const markupLB = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
);

function handleShow(evt) {
  evt.preventDefault();

  const { target } = evt;

  const liData = target.dataset.source;
  const currentItem = galleryItems.find(({ original }) => original === liData);

  let lightbox = new SimpleLightbox(`gallery a`, {
    captions: true,
    captionSelector: `alt`,
    captionDelay: 250,
  });

  const instance = ulEl.create(
    `<a href="${currentItem.original}"><img src="${currentItem.preview}" alt="${currentItem.description}" title="${currentItem.description}"/></a>`
  );

  instance.show();

  ulEl.addEventListener(`keydown`, handleClose);

  function handleClose(evt) {
    if (evt.keyCode === 27) {
      instance.close();
    }
  }
}

ulEl.insertAdjacentHTML(`beforeend`, markupLB.join(``));

ulEl.addEventListener(`click`, handleShow);
