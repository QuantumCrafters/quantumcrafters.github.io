
const reviewImageFiles = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
  '7.png', '8.png', '9.png', '10.png', '11.png', '12.png',
  '13.png', '14.png', '15.png', '16.png',
  '17.png', '18.png', '19.png', '20.png', '21.png', '22.png',
  '23.png', '24.png', '25.png', '26.png', '27.png', '28.png',
  '29.png', '30.png', '31.png', '32.png', '33.png', '34.png',
  '35.png', '36.png', '37.png', '38.png', '39.png', '40.png',
  '41.png'
];

var reviewImgSrc = [];

const galleryContainer2 = document.querySelector('.gallery-review');

// Function to load the images
function loadImages2() {
  const filesLength = reviewImageFiles.length;

  for (let i = 0; i < filesLength; i++) {
    const img = document.createElement('img');
    img.src = `res/images/reviews/${reviewImageFiles[i]}`;
    img.alt = `Project ${i + 1}`;
    galleryContainer2.appendChild(img);
    reviewImgSrc.push(img.src);
  }

  // Added a click event listener to each dynamically created image
  galleryContainer2.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      for (let j = 0; j < reviewImgSrc.length; j++) {
        if (reviewImgSrc[j] == event.target.src) {
          openModal(reviewImgSrc, j);
        }
      }
    }
  });
}

loadImages2();
