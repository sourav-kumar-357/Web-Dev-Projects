// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Search placeholder animation
const searchInput = document.querySelector(".search-input");
const placeholderText = [
  "Search mobiles",
  "Search electronics",
  "Search fashion",
  "Search books",
];
let i = 0;

setInterval(() => {
  searchInput.setAttribute("placeholder", placeholderText[i]);
  i = (i + 1) % placeholderText.length;
}, 2500);

// Toggle dark mode (optional, requires styling)
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};
