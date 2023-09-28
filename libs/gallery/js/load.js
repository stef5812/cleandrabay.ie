document.addEventListener('DOMContentLoaded', () => {
  const images = ["Derreen.jpg", "causbay.JPG", "Ball-pass.JPG"];
  const galleryContainer = document.querySelector('.gallery-container');
  
  images.forEach((image) => {
    const imageSrc = `guide-gal/${image}`;
    const imageAlt = image.split('.')[0];
    
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery');
    
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('target', '_blank');
    anchorElement.setAttribute('href', imageSrc);
    
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageSrc);
    imageElement.setAttribute('alt', imageAlt);
    
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('desc');
    descriptionElement.textContent = imageAlt;
    
    anchorElement.appendChild(imageElement);
    galleryItem.appendChild(anchorElement);
    galleryItem.appendChild(descriptionElement);
    galleryContainer.appendChild(galleryItem);
  });
});
