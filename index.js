const icon = document.querySelector(".icon");
// const darkModeElements = document.querySelectorAll(".dark-mode");

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
