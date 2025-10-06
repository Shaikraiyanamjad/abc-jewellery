// mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

// product section expand
 const viewMoreBtn = document.getElementById("viewMoreBtn");
  const extraProducts = document.getElementById("extra-products");

  viewMoreBtn.addEventListener("click", () => {
    if (extraProducts.classList.contains("hidden")) {
      extraProducts.classList.remove("hidden");
      setTimeout(() => {
        extraProducts.classList.remove("opacity-0", "translate-y-10");
      }, 50);
      viewMoreBtn.textContent = "Show Less";
    } else {
      extraProducts.classList.add("opacity-0", "translate-y-10");
      setTimeout(() => {
        extraProducts.classList.add("hidden");
      }, 400);
      viewMoreBtn.textContent = "View Full Collection";
    }
  });