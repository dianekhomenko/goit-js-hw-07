import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery =
  document.querySelector(".gallery");

const template = galleryItems
  .map(
    (item) =>
      `<li><img class="gallery__image" src="${item.preview}" alt="${item.description}" data-url="${item.original}"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", template);

gallery.addEventListener("click", onClick);

function onClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  let bigPhoto = evt.target.dataset.url;
  console.log(bigPhoto);

  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${bigPhoto}">
	`
    )
    .show();
}
