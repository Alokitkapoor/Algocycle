const toggleBtn = document.getElementById("modeToggle");
const themeLink = document.getElementById("theme");
const modeIcon = document.getElementById("modeIcon");

toggleBtn.addEventListener("click", () => {
  const currentTheme = themeLink.getAttribute("href");

  if (currentTheme === "../css/landingwhite.css") {
    themeLink.setAttribute("href", "../css/landingdark.css");
    modeIcon.classList.remove("bi-moon-fill");
    modeIcon.classList.add("bi-sun-fill"); 
  } else {
    themeLink.setAttribute("href", "../css/landingwhite.css");
    modeIcon.classList.remove("bi-sun-fill");
    modeIcon.classList.add("bi-moon-fill"); 
  }
});
