import images from "./gallery-items.js";
console.log(images);

const gallery = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");

//Добавляю картинки

function addImages() {
  const galleryHTML = images.reduce((acc, el) => {
    acc += `<li class="gallery__item">
            <a class="gallery__link" href="${el.original}">
                <img 
                    class="gallery__image"
                    src="${el.preview}"
                    data-source="${el.original}"
                    alt="${el.description}" 
                />
            </a>
        </li>`;
    return acc;
  }, "");
  gallery.insertAdjacentHTML("beforeend", galleryHTML);
}
addImages();

gallery.addEventListener("click", getUrls);

function getUrls(event) {
  const target = event.target;
  event.preventDefault();
  if (target.tagName !== "IMG") {
    return;
  }
  const imageSource = target.dataset.source;
  openModal(imageSource);
}

function openModal(imageSource) {
  modal.classList.add("is-open");
  const source = modal.querySelector(".lightbox__image");
  source.src = imageSource;
}

const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);

closeButton.addEventListener("click", closeModal);
function closeModal(event) {
  if (event.target.tagName !== "IMG") {
    modal.classList.remove("is-open");
    modal.querySelector(".lightbox__image").src = "";
  }
}

const overlay = document.querySelector(".lightbox__content");
console.log(overlay);
overlay.addEventListener("click", closeModal);

// закрытие на esc
document.addEventListener("keyup", closeModalEsc);
function closeModalEsc() {
  if (event.key === "Escape") {
    if (modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
    }
  }
}

// Скрол по картинкам
document.addEventListener("keyup", galleryScroll);
function galleryScroll(event) {
  let currentSrc = document.querySelector(".lightbox__image").src;
  const currentLi = gallery.querySelector(`[href="${currentSrc}"]`).parentNode;
  const leftSibling =
    currentLi.previousSibling === null
      ? currentLi.parentNode.lastChild
      : currentLi.previousSibling;
  const rightSibling =
    currentLi.nextSibling === null
      ? currentLi.parentNode.firstChild
      : currentLi.nextSibling;
  const leftSiblingSrc = leftSibling.firstChild.nextSibling.href;
  const rightSiblingSrc = rightSibling.firstChild.nextSibling.href;
  if (event.key === "ArrowLeft") {
    document.querySelector(".lightbox__image").src = leftSiblingSrc;
  }
  if (event.key === "ArrowRight") {
    document.querySelector(".lightbox__image").src = rightSiblingSrc;
  }
}
