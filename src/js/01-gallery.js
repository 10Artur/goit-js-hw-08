// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItemsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
        })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});