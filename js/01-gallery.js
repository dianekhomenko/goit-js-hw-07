import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery =
  document.querySelector(".gallery");

const template = galleryItems
  .map(
    (item) =>
      `<li><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" /></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", template);

gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  let bigPhoto = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${bigPhoto}">
	`,
    {
      onShow: (instance) => {
        window.addEventListener(
          "keydown",
          onKey
        );
      },
      onClose: (instance) => {
        window.removeEventListener(
          "keydown",
          onKey
        );
      },
    }
  );
    
  instance.show();

  function onKey({ key }) {
    if (key !== "Escape") {
      return;
    }
    instance.close();
  }
}