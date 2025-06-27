let wishlistCount = 0;
let bagCount = 0;

function increaseCount(type) {
  if (type === "wishlist") {
    wishlistCount++;
    document.getElementById("wishlistCount").innerText = wishlistCount;
  } else if (type === "bag") {
    bagCount++;
    document.getElementById("bagCount").innerText = bagCount;
  }
}

// Search Suggestions
const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("searchSuggestions");

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim().length > 0) {
    suggestions.classList.remove("hidden");
  } else {
    suggestions.classList.add("hidden");
  }
});

// Scroll-to-top
const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
