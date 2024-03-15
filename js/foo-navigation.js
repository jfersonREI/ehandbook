const mainNav = document.querySelector(".foo-sidebar-mini-to-top");

window.onscroll = function () {
  windowScroll();
};

function windowScroll() {
  mainNav.classList.toggle(
    "foo-sidebar-mini-to-top--show",
    mainNav.scrollTop > 100 || document.documentElement.scrollTop > 100
  );
}
