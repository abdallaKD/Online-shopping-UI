// Select the button
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Show the button after scrolling 100vh
  if (window.scrollY > window.innerHeight) {
    // scrollToTopButton.style.display = 'block';
    scrollToTopButton.style.zIndex = 99999;
    scrollToTopButton.style.opacity = 1;
  } else {
    // scrollToTopButton.style.display = 'none';
    scrollToTopButton.style.zIndex = -99999;
    scrollToTopButton.style.opacity = 0;
  }
});

// Add a click event to scroll to the top
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
});
