
function openVideoModal() {
    // Get the modal and iframe elements
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    const videoIframe = document.getElementById('videoIframe');

    // Set the YouTube video URL with autoplay enabled
    videoIframe.src = "https://www.youtube.com/embed/Y7f98aduVJ8?autoplay=1";

    // Show the modal
    videoModal.show();

    // Clear the video URL when the modal is closed to stop playback
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
        videoIframe.src = "";
    });
}

function animateCounter(element, target) {
    let count = 0;
    const increment = target / 100; // Adjust this value to control speed
    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            clearInterval(interval);
            element.innerText = Math.round(target);
        } else {
            element.innerText = Math.round(count);
        }
    }, 50); // Adjust the delay here for animation smoothness
}

// Select all elements with the 'counter' class and apply the animation
document.querySelectorAll('.counter').forEach(counterElement => {
    const target = parseInt(counterElement.getAttribute('data-target'), 10);
    animateCounter(counterElement, target);
});

// Select all sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Intersection Observer options
const options = {
  root: null,
  threshold: 0.5, // Adjust to trigger earlier or later
};

// Callback function to handle intersection events
const observerCallback = (entries) => {
  entries.forEach(entry => {
    const sectionId = entry.target.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (entry.isIntersecting) {
      // Remove 'active' from all nav links, then add it to the current one
      navLinks.forEach(link => link.classList.remove('active'));
      if (navLink) {
        navLink.classList.add('active');
      }
    }
  });
};

// Initialize the Intersection Observer and observe each section
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));



// menu functionality


function showMenu(menuId) {
    // Toggle active class on tabs
    document.querySelectorAll('.menu-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    document.querySelector(`.menu-tab[onclick="showMenu('${menuId}')"]`).classList.add('active');

    // Show the selected menu section
    document.querySelectorAll('.menu-section').forEach(section => {
      section.classList.add('d-none');
    });
    document.getElementById(menuId).classList.remove('d-none');
  }



  