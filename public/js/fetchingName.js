window.addEventListener('DOMContentLoaded', () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const usernameEl = document.getElementById('menuUsername');
  if (storedUser && storedUser.username) {
    usernameEl.textContent = storedUser.username;
  } else {
    usernameEl.textContent = 'User';
  }
});

const userIcon = document.querySelector('.user-icon');
const userMenu = document.getElementById('userMenu');
userIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  userMenu.classList.toggle('show');
});

document.addEventListener('click', () => {
  userMenu.classList.remove('show');
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location.href = '../html/signin.html';
});



const namm = JSON.parse(localStorage.getItem("user"));
document.getElementById("fetched").textContent = namm.username;