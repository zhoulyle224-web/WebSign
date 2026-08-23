const dialog = document.querySelector('.image-lightbox');

if (dialog) {
  const dialogImage = dialog.querySelector('img');
  const dialogCaption = dialog.querySelector('p');
  const closeButton = dialog.querySelector('.image-lightbox-close');

  document.querySelectorAll('[data-gallery-src]').forEach((button) => {
    button.addEventListener('click', () => {
      const preview = button.querySelector('img');
      dialogImage.src = button.dataset.gallerySrc;
      dialogImage.alt = button.dataset.galleryAlt || preview?.alt || '';
      dialogCaption.textContent = button.closest('figure')?.querySelector('figcaption')?.textContent.trim() || '';
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    dialogImage.src = '';
  });
}
