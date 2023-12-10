
// Function to open the modal
function openModal(imageSrcArray, currentIndex) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const leftButton = document.getElementById('leftButton');
  const rightButton = document.getElementById('rightButton');

  modal.style.display = 'block';
  modalImage.src = imageSrcArray[currentIndex];

  // Add event listeners to left and right buttons
  leftButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + imageSrcArray.length) % imageSrcArray.length;
    modalImage.src = imageSrcArray[currentIndex];
  });

  rightButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % imageSrcArray.length;
    modalImage.src = imageSrcArray[currentIndex];
  });
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}