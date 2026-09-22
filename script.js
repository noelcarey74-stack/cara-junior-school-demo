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

  function replaceLeafText(pattern, replacement) {
    document.querySelectorAll("body *").forEach(function (element) {
      if (element.childElementCount === 0 && element.textContent) {
        element.textContent = element.textContent.replace(pattern, replacement);
      }
    });
  }

  // Site-wide school year update for classroom pages.
  // This keeps the class update cards current without editing every class page one by one.
  replaceLeafText(/2025\s*\/\s*2026/g, "2026 / 2027");
  replaceLeafText(/2025\s*-\s*2026/g, "2026-2027");

  // Admissions notice update for 2027-2028. Dates are TBC until the school confirms them.
  const path = window.location.pathname || "";

  if (path.endsWith("/admissions.html") || path.endsWith("admissions.html")) {
    document.querySelectorAll('a[href="admissions-notice-2026-2027.html"]').forEach(function (link) {
      link.setAttribute("aria-label", "Admissions notice 2027 2028");
      const heading = link.querySelector("h3");
      if (heading) {
        heading.textContent = "Admissions Notice 2027–2028";
      }
    });
  }

  if (path.includes("admissions-notice-2026-2027.html")) {
    document.title = "Admissions Notice 2027–2028 | Cara Junior School";
    replaceLeafText(/2026–2027/g, "2027–2028");
    replaceLeafText(/2026-2027/g, "2027-2028");

    const heroTitle = document.querySelector(".hero-content h1");
    if (heroTitle) {
      heroTitle.textContent = "Admissions Notice 2027–2028";
    }

    const heroText = document.querySelector(".hero-text");
    if (heroText) {
      heroText.textContent = "Key admission dates, decision dates and places available for the 2027–2028 school year at Cara Junior School.";
    }

    const applicationCard = document.querySelector(".policy-hero-card");
    if (applicationCard) {
      const applicationHeading = applicationCard.querySelector("h2");
      const applicationText = applicationCard.querySelector("p");
      if (applicationHeading) {
        applicationHeading.textContent = "Application Dates";
      }
      if (applicationText) {
        applicationText.textContent = "Application dates are to be confirmed.";
      }
    }

    document.querySelectorAll(".policy-summary-card").forEach(function (card) {
      const label = card.querySelector("strong");
      const value = card.querySelector("p");
      if (label && value && /Applications Open|Applications Close|Decision Date/i.test(label.textContent)) {
        value.textContent = "TBC";
      }
    });

    document.querySelectorAll(".notice-date-card strong").forEach(function (value) {
      value.textContent = "TBC";
    });
  }

  // Classroom staff lists for 2026 / 2027.
  // Names come from the staff class list supplied by the school.
  const classStaff = {
    green: {
      className: "Green Class",
      teacherLabel: "Class Teacher",
      teacher: "Jean Walsh",
      snas: "Mary St Leger, Nicole O Halloran, Rosaire Wall"
    },
    red: {
      className: "Red Class",
      teacherLabel: "Class Teacher",
      teacher: "Aine Kirby",
      snas: "Helena O Sullivan, Mary Byrne, Gonzalo de la Puente / Martina Nugent"
    },
    peach: {
      className: "Peach Class",
      teacherLabel: "Class Teacher",
      teacher: "Holly Cussen",
      snas: "Edita Sweeney, Ciara Harrington, Jennet Reyes"
    },
    turquoise: {
      className: "Turquoise Class",
      teacherLabel: "Class Teacher",
      teacher: "Aisling Dempsey",
      snas: "Julie Fenney, Deirdre Brewster, Robert Bailey"
    },
    grey: {
      className: "Grey Class",
      teacherLabel: "Class Teachers",
      teacher: "Annmarie Finnegan & Roisin Byrne",
      snas: "Shauna O Driscoll, Katie Ahern, Amy Twohig"
    },
    navy: {
      className: "Navy Class",
      teacherLabel: "Class Teacher",
      teacher: "Siobhan O Leary",
      snas: "Gemma Crowley, Charlotte Barton, Fiona Cahalane / Janet Hales"
    },
    purple: {
      className: "Purple Class",
      teacherLabel: "Class Teacher",
      teacher: "Sarah Cunningham",
      snas: "Natasha O Mahony, Linda Twohig, Rosina Sweeney"
    },
    cerise: {
      className: "Cerise Class",
      teacherLabel: "Class Teacher",
      teacher: "Lisa Quinlan",
      snas: "Eilish Cronin / Karen Moynihan, Karen O Farrell, Debbie Kelliher"
    },
    blue: {
      className: "Blue Class",
      teacherLabel: "Class Teacher",
      teacher: "Nora O Riordan",
      snas: "Laura Kelly, Stephaine Power, Beata (Lyndsey Murphy)"
    },
    orange: {
      className: "Orange Class",
      teacherLabel: "Class Teacher",
      teacher: "Laura Anketell",
      snas: "Jennifer Davis, Sarah Doolan, Alison O Donovan (Lyndsey Murphy)"
    },
    silver: {
      className: "Silver Class",
      teacherLabel: "Class Teacher",
      teacher: "Roisin Smiddy",
      snas: "Noreen Walsh, Dean O Brien, Kelly Murphy"
    },
    yellow: {
      className: "Yellow Class",
      teacherLabel: "Class Teacher",
      teacher: "Jennifer Mulcahy",
      snas: "Janice Walsh, Deirdre Church, Sonia Brandon TBC"
    }
  };

  function getClassKeyFromPage() {
    const page = (window.location.pathname || "").split("/").pop().toLowerCase();
    const match = page.match(/^([a-z]+)-class\.html$/);
    if (match && classStaff[match[1]]) {
      return match[1];
    }
    return null;
  }

  const classKey = getClassKeyFromPage();
  const staff = classKey ? classStaff[classKey] : null;

  if (staff) {
    const teamList = document.querySelector(".team-list");
    if (teamList) {
      teamList.querySelectorAll("li").forEach(function (item) {
        const label = item.querySelector("strong");
        const value = item.querySelector("span");
        if (!label || !value) return;

        const labelText = label.textContent.trim().toLowerCase();

        if (labelText.includes("class teacher")) {
          label.textContent = staff.teacherLabel;
          value.textContent = staff.teacher;
        }

        if (labelText.includes("sna")) {
          label.textContent = "SNA Team";
          value.textContent = staff.snas;
        }
      });
    }

    const noteBox = Array.from(document.querySelectorAll("div")).find(function (box) {
      return box.className && typeof box.className === "string" && box.className.indexOf("note-box") !== -1;
    });

    if (noteBox && /Teacher and SNA names can be added/i.test(noteBox.textContent)) {
      noteBox.textContent = "Class team names have been updated for the 2026 / 2027 school year. Staff photographs should only be used where staff are happy and the school approves.";
    }
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
