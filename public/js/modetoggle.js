// ../js/modeToggle.js

const toggleBtn = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('dark-mode')) {
    modeIcon.classList.remove('bi-moon-fill');
    modeIcon.classList.add('bi-sun-fill');
  } else {
    modeIcon.classList.remove('bi-sun-fill');
    modeIcon.classList.add('bi-moon-fill');
  }
});
