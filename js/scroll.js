
// scroll function
let currentSection = 0;
const sections = document.querySelectorAll('.section');

const workScrollView = document.querySelector('.image-container-work');
const reviewScrollView = document.querySelector('.image-container-review');

const workScrollViewTop = workScrollView.offsetTop;
const workScrollViewBottom = workScrollViewTop + workScrollView.offsetHeight;

const reviewScrollViewTop = reviewScrollView.offsetTop;
const reviewScrollViewBottom = reviewScrollViewTop + reviewScrollView.offsetHeight;

var workScrollViewHovered = false;
var reviewScrollViewHovered = false;

// Scroll function to scroll elements
function scrollElement(element, dX, dY) {
  element.scrollLeft += dX;
  element.scrollTop += dY;
}

// Initial determination of the active section and menu highlighting
function highlightActiveMenu() {
    let viewing = currentSection;
    document.querySelectorAll('nav a').forEach((anchor, index) => {
        if (index === viewing)
            anchor.focus();
    });
}

// Scroll function to determine the active section
function determineActiveSection() {
  const scrollPosition = window.scrollY;

  // scroll page
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const dX = section.offsetHeight/2;

    if (scrollPosition > (sectionTop-dX) && scrollPosition < (sectionBottom-dX)) {
        if (currentSection != i) {
          currentSection = i;
          highlightActiveMenu();
        }
        break;
    }
  }
}

// Debounce function to limit the frequency of function calls
function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

// Scroll function with debouncing
const debouncedScroll = debounce(() => {
  determineActiveSection();
}, 200); // Adjust the delay as needed

// Scroll listener using the debounced function
window.addEventListener('scroll', debouncedScroll);

// Mouse enter event for workScrollView
workScrollView.addEventListener('mouseenter', () => {
  workScrollViewHovered = true;
});

// Mouse leave event for workScrollView
workScrollView.addEventListener('mouseleave', () => {
  workScrollViewHovered = false;
});

// Mouse enter event for reviewScrollView
reviewScrollView.addEventListener('mouseenter', () => {
  reviewScrollViewHovered = true;
});

// Mouse leave event for reviewScrollView
reviewScrollView.addEventListener('mouseleave', () => {
  reviewScrollViewHovered = false;
});

// Wheel event listener
window.addEventListener('wheel', (event) => {
  if (workScrollViewHovered) {
    event.preventDefault();
    scrollElement(workScrollView, event.deltaY, 0); // passing vertical value as horizontal
  } else if (reviewScrollViewHovered) {
    event.preventDefault();
    scrollElement(reviewScrollView, event.deltaY, 0); // passing vertical value as horizontal
  }
}, {passive: false});

// Initial determination of the active section
determineActiveSection();