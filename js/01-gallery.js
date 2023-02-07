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

let galleryBig;;

function onClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  let bigPhoto = evt.target.dataset.source;

  galleryBig = basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${bigPhoto}">
	`
    )
    .show();
}

document.addEventListener("keydown", closeGallery);

function closeGallery({ key }) {

    if (galleryBig.show || key === "Escape") {
        console.log("close");
        galleryBig.close();
    }   
    
}
