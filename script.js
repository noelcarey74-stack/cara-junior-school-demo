// =========================================================
// Cara Junior School Demo Website
// Mobile menu and small interaction helpers
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  if (!menuToggle || !siteNav) {
    return;
  }

  function closeMenu() {
    menuToggle.classList.remove("is-open");
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  function openMenu() {
    menuToggle.classList.add("is-open");
    siteNav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
  }

  menuToggle.addEventListener("click", function () {
    const isOpen = siteNav.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when a navigation link is clicked on mobile
  const navLinks = siteNav.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  // Close menu when clicking outside it
  document.addEventListener("click", function (event) {
    const clickedInsideMenu = siteNav.contains(event.target);
    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMenu();
    }
  });

  // Close menu if Escape key is pressed
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // If screen changes to desktop size, reset mobile menu state
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 980) {
      closeMenu();
    }
  });
});
