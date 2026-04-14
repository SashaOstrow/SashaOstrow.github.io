document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Toggle ---
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarMenu = document.getElementById("navbarMenu");
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", function () {
      navbarToggle.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
    });
  }

  // --- Reveal on Scroll Up ---
  const mainNavbar = document.getElementById("main-navbar");
  if (mainNavbar) {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
      const currentScrollY = window.scrollY;
      const navbarHeight = mainNavbar.offsetHeight;

      if (currentScrollY > lastScrollY && currentScrollY > navbarHeight) {
        mainNavbar.classList.add("is-hidden");
      } else {
        mainNavbar.classList.remove("is-hidden");
      }

      lastScrollY = currentScrollY;
    });
  }
  //navbar
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
  //footer
  // Load footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });

  // --- Lightbox (image popup) ---
  const images = document.querySelectorAll(".clickable-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  if (images.length && lightbox && lightboxImg && closeBtn) {
    images.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
      });
    });

    // Close with X
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    // Close when clicking outside image
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }

  const buttons = document.querySelectorAll(".toggle-btn");
  const contents = document.querySelectorAll(".content");

  buttons.forEach((button, index) => {
    const originalText = button.textContent;
    button.dataset.original = originalText;

    button.addEventListener("click", () => {
      const content = contents[index];

      const isOpen = content.classList.contains("active");

      // close all
      contents.forEach((c, i) => {
        c.classList.remove("active");
        buttons[i].textContent = buttons[i].dataset.original;
      });

      // open clicked one (if it wasn't already open)
      if (!isOpen) {
        content.classList.add("active");
        button.textContent = "Hide";
      }
    });
  });
});
