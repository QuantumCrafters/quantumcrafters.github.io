
// Array to store image file names
const projectImageFiles = [
  'W01.png', 'W02.png', 'W03.png', 'W04.png', 'W05.png', 'W06.png',
  'W07.png', 'W08.png', 'W09.png', 'W10.png', 'W11.png', 'W12.png',
  'W13.png', 'W14.png', 'W15.png', 'W16.png', 'W17.png', 'W18.png',
  'W19.png', 'W20.png', 'W21.png', 'W22.png', 'W23.png'
];

var workImgSrc = [];

const galleryContainer = document.querySelector('.gallery-work');

// Function to load the images
function loadImages() {
  const filesLength = projectImageFiles.length;

  for (let i = 0; i < filesLength; i++) {
    const img = document.createElement('img');
    img.src = `res/images/projects/${projectImageFiles[i]}`;
    img.alt = `Project ${i + 1}`;
    galleryContainer.appendChild(img);
    workImgSrc.push(img.src);
  }

  // Added a click event listener to each dynamically created image
  galleryContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      for (let j = 0; j < workImgSrc.length; j++) {
        if (workImgSrc[j] == event.target.src) {
          openModal(workImgSrc, j);
        }
      }
    }
  });
}

// Initial load
loadImages();