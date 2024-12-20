// Typed.js implementation
const typed = new Typed('.typed-text', {
  strings: ['My Journey','To the world of', 'Software Developer', 'Begins here!'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});



// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});





//animation for My Journey

function animateTimelineItems() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('animate');
    }, index * 200);
  });
}



// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll animation
function handleScrollAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('animate');
    } else {
      item.classList.remove('animate');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimation);

// Initial check on page load
window.addEventListener('load', handleScrollAnimation);


// skill-section-js

