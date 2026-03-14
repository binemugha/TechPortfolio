(function () {
  "use strict";

  const nav = document.querySelector(".site-nav");
  const reveals = document.querySelectorAll(".reveal");
  const year = document.querySelector("#year");
  const collapseElement = document.querySelector("#siteNav");
  const navLinks = document.querySelectorAll(".nav-link");

  const updateNav = () => {
    if (!nav) {
      return;
    }

    nav.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("is-visible"));
  }

  if (collapseElement && window.bootstrap) {
    const navCollapse = bootstrap.Collapse.getOrCreateInstance(collapseElement, {
      toggle: false,
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992 && collapseElement.classList.contains("show")) {
          navCollapse.hide();
        }
      });
    });
  }
})();
