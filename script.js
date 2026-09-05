// =========================================================
// Cara Junior School Website
// Mobile menu and site-wide finishing helpers
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  if (menuToggle && siteNav) {
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
      isOpen ? closeMenu() : openMenu();
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
      const clickedInsideMenu = siteNav.contains(event.target);
      const clickedMenuButton = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedMenuButton) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 980) {
        closeMenu();
      }
    });
  }

  // Site-wide footer clean-up and consistency.
  const footer = document.querySelector(".site-footer");

  if (footer) {
    document.querySelectorAll("body > .footer-bottom").forEach(function (extraFooterBottom) {
      extraFooterBottom.remove();
    });

    document.querySelectorAll("body *").forEach(function (element) {
      if (element.childElementCount === 0 && element.textContent.trim() === "```") {
        element.remove();
      }
    });

    const firstFooterColumn = footer.querySelector(".footer-grid > div:first-child");
    if (firstFooterColumn && !firstFooterColumn.textContent.includes("Charity Number")) {
      const charity = document.createElement("p");
      charity.textContent = "Charity Number: 20139599";
      firstFooterColumn.appendChild(charity);
    }

    const quickLinksHeading = Array.from(footer.querySelectorAll("h3")).find(function (heading) {
      return heading.textContent.trim().toLowerCase() === "quick links";
    });

    if (quickLinksHeading) {
      const quickLinksList = quickLinksHeading.parentElement.querySelector("ul");
      if (quickLinksList && !quickLinksList.querySelector('a[href="newsletter.html"]')) {
        const newsletterItem = document.createElement("li");
        const newsletterLink = document.createElement("a");
        newsletterLink.href = "newsletter.html";
        newsletterLink.textContent = "Newsletters";
        newsletterItem.appendChild(newsletterLink);
        quickLinksList.appendChild(newsletterItem);
      }
    }

    // Public footer credit shown across the website.
    const footerCreditHtml = '&copy; 2026 Cara Junior School. Website by <a href="https://careywebservices.ie" target="_blank" rel="noopener noreferrer">Carey Web Services</a>.';
    const footerCredit = footer.querySelector(".footer-bottom .container p") || footer.querySelector(".footer-bottom p");

    if (footerCredit) {
      footerCredit.innerHTML = footerCreditHtml;
    } else {
      const footerBottom = document.createElement("div");
      footerBottom.className = "footer-bottom";
      footerBottom.innerHTML = '<div class="container"><p>' + footerCreditHtml + '</p></div>';
      footer.appendChild(footerBottom);
    }
  }

  // Add a newsletter shortcut to the News page if not already in the page content.
  if (document.body && document.title.includes("News")) {
    const latestNewsSection = document.getElementById("latest-news");
    const newsGrid = latestNewsSection ? latestNewsSection.querySelector(".news-grid") : null;

    if (newsGrid && !newsGrid.querySelector('a[href="newsletter.html"]')) {
      const card = document.createElement("article");
      card.className = "news-card featured-news-card";
      card.innerHTML = `
        <span class="news-tag">Newsletters</span>
        <h3>School newsletters</h3>
        <p>
          School newsletters, reminders and approved updates for parents and guardians
          will be available in the newsletter archive.
        </p>
        <a href="newsletter.html">View newsletters</a>
      `;
      newsGrid.prepend(card);
    }
  }
});
