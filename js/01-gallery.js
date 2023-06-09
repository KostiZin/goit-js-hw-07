import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(`.gallery`);

const markupLB = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
  <img class="gallery__image" src="${original}" alt="${description}" data-source="${original}"/>
  </a>
</li>`
);

function handleShow(evt) {
  evt.preventDefault();

  console.log(evt.target);
  const { target } = evt;

  const liData = target.dataset.source;
  const currentItem = galleryItems.find(({ original }) => original === liData);

  const instance = basicLightbox.create(
    `
  <li><img class="gallery__image" src="${currentItem.original}" alt="${currentItem.description}" data-source="${currentItem.original}"/>
  </li>`
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
