/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tc) => {
      tc.classList.remove("filters__active");
    });
    target.classList.add("filters__active");

    tabs.forEach((t) => {
      t.classList.remove("filter-tab-active");
    });
    tab.classList.add("filter-tab-active");
  });
});

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const srAnimation = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

srAnimation.reveal(`.profile__border`);
srAnimation.reveal(`.profile__name`, { delay: 500 });
srAnimation.reveal(`.profile__profession`, { delay: 600 });
srAnimation.reveal(`.profile__social`, { delay: 700 });
srAnimation.reveal(`.profile__info-group`, { interval: 800, delay: 700 });
srAnimation.reveal(`.profile__buttons`, { delay: 800 });
srAnimation.reveal(`.filters__content`, { delay: 900 });
srAnimation.reveal(`.filters`, { delay: 1000 });
