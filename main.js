// mobile menu toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const links = menu.querySelectorAll('.mobile-link');
const icons = menu.querySelector('.social-icons');

btn.addEventListener('click', () => {
  // Toggle menu visibility
  menu.classList.toggle('hidden');

  if(!menu.classList.contains('hidden')){
    // Animate links sequentially
    links.forEach((link, index) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', 'translate-y-2');
        link.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-300');
      }, index * 100);
    });

    // Animate social icons
    setTimeout(() => {
      icons.classList.remove('opacity-0', 'translate-y-2');
      icons.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-300');
    }, links.length * 100);
  } else {
    // Reset links & icons
    links.forEach(link => {
      link.classList.add('opacity-0', 'translate-y-2');
      link.classList.remove('opacity-100', 'translate-y-0');
    });
    icons.classList.add('opacity-0', 'translate-y-2');
    icons.classList.remove('opacity-100', 'translate-y-0');
  }
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