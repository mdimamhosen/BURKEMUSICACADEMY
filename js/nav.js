(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const closeButton = document.querySelector(".menu-close");
  const mobileNav = document.querySelector("#mobile-nav");
  const mobileLinks = [...mobileNav.querySelectorAll("a")];
  const desktopBreakpoint = window.matchMedia("(min-width: 768px)");
  let previousOverflow = "";

  const setMenuOpen = (open, { returnFocus = true } = {}) => {
    if (open) {
      previousOverflow = document.body.style.overflow;
      mobileNav.hidden = false;
      mobileNav.inert = false;
      mobileNav.setAttribute("aria-hidden", "false");
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close navigation");
      document.body.classList.add("menu-open");
      requestAnimationFrame(() => {
        mobileNav.classList.add("is-open");
        mobileLinks[0]?.focus();
      });
      return;
    }

    if (mobileNav.hidden) return;
    mobileNav.classList.remove("is-open");
    mobileNav.inert = true;
    mobileNav.setAttribute("aria-hidden", "true");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
    document.body.style.overflow = previousOverflow;
    window.setTimeout(() => {
      if (menuButton.getAttribute("aria-expanded") === "false") mobileNav.hidden = true;
    }, 190);
    if (returnFocus) menuButton.focus();
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  closeButton.addEventListener("click", () => setMenuOpen(false));

  mobileNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false, { returnFocus: false });
  });

  document.addEventListener("keydown", (event) => {
    if (mobileNav.hidden) return;

    if (event.key === "Escape") {
      event.preventDefault();
      setMenuOpen(false);
      return;
    }

    if (event.key !== "Tab") return;
    const focusable = [closeButton, ...mobileLinks].filter((element) => !element.hasAttribute("disabled"));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  desktopBreakpoint.addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false, { returnFocus: false });
  });
})();
