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

    const lastModifiedSpan = document.getElementById('last-modified');
    lastModifiedSpan.textContent = document.lastModified;
  });