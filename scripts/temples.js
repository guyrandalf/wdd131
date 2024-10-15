document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');

      if (navMenu.classList.contains('show')) {
        hamburger.innerHTML = '✖';
      } else {
        hamburger.innerHTML = '☰';
      }
    });

    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = document.lastModified;
  });