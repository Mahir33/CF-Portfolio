const hamburgerMenu = document.querySelector('.hamburger');

hamburgerMenu.addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');

  navLinks.classList.toggle('show');
});
