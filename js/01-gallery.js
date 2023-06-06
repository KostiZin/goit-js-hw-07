import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// const ulEl = document.querySelector(`.gallery`);

// const markup = galleryItems.map(
//   ({
//     preview,
//     original,
//     description,
//   }) => `<li><img class="js-target gallery__image" src="${preview}" alt="${description}">
// </li>`
// );

// ulEl.insertAdjacentHTML(`beforeend`, markup.join(``));

// ulEl.addEventListener(`click`, handleShow);

// // if we click on the space nothing will happen (function below)

// function handleShow(evt) {
//   const { target } = evt;
//   if (!target.classList.contains("js-target")) {
//     return;
//   }
//   const liDescription = target.alt;
//   const currentItem = galleryItems.find(
//     ({ description }) => description === liDescription
//   );

//   const instance = basicLightbox.create(`
//   <div><img class="gallery__link" src="${currentItem.original}" alt="${currentItem.description}"></div>
// `);

//   instance.show();
// }

console.log(galleryItems);

const ulEl = document.querySelector(`.gallery`);

const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
  <img class="gallery__image" src="${original}" alt="${description}" data-source="${original}"/>
  </a>
</li>`
);

ulEl.insertAdjacentHTML(`beforeend`, markup.join(``));

ulEl.addEventListener(`click`, handleShow);

// if we click on the space nothing will happen (function below)

function handleShow(evt) {
  evt.preventDefault();

  console.log(evt.target);
  const { target } = evt;

  //   if (!target.classList.contains("js-target")) {
  //     return;
  //   }

  //   if (
  //     target.classList.contains(".gallery__image") ??
  //     target.closest("gallery__link")
  //   ) {

  // treba vpysaty dataset zamist description
  const liDescription = target.alt;
  const currentItem = galleryItems.find(
    ({ description }) => description === liDescription
  );

  const instance = basicLightbox.create(`
  <li><img class="gallery__image" src="${currentItem.original}" alt="${currentItem.description}" data-source="${currentItem.original}"/>
  </li>`);

  instance.show();
}
