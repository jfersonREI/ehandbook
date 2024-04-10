const body = document.querySelector("body");
const offCanvasSidebar = document.querySelector(".off-canvas-nav-group");
const offCanvasScrim = document.querySelector(".off-canvas-scrim");
const offCanvasMenuToggle = document.querySelector("#offCanvasMenuToggle");
const offCanvasSidebarContainer = document.querySelector(
  ".off-canvas-nav-group-inner"
);
const offCanvasGuideBtn = document.querySelector(".off-canvas-close-btn");

//navicon
offCanvasMenuToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (offCanvasSidebar.hasAttribute("opened")) {
    offCanvasSidebar.removeAttribute("opened", "");
    offCanvasSidebarContainer.removeAttribute("opened", "");
  } else if (!offCanvasSidebar.hasAttribute("opened")) {
    offCanvasSidebarContainer.removeAttribute("no-transition", "");
    offCanvasSidebar.setAttribute("opened", "");
    offCanvasSidebarContainer.setAttribute("opened", "");
    body.setAttribute("noscroll", "");
    offCanvasGuideBtn.focus();
    offCanvasScrim.setAttribute("visible", "");
  }
}

//guide navicon
offCanvasGuideBtn.addEventListener("click", closeGuideMenu);

function closeGuideMenu() {
  offCanvasSidebar.removeAttribute("opened", "");
  offCanvasSidebarContainer.removeAttribute("opened", "");
  offCanvasScrim.removeAttribute("visible", "");
  body.removeAttribute("noscroll", "");
  offCanvasMenuToggle.focus();
}

//backdrop
offCanvasScrim.addEventListener("click", closeScrim);

function closeScrim() {
  offCanvasSidebar.removeAttribute("opened", "");
  offCanvasSidebarContainer.removeAttribute("opened", "");
  offCanvasScrim.removeAttribute("visible", "");
  body.removeAttribute("noscroll", "");
}

//screen resizing
let mqls = [
  window.matchMedia("(min-width: 0)"),
  window.matchMedia("(min-width: 48rem)"),
  window.matchMedia("(min-width: 62rem)"),
  window.matchMedia("(min-width: 80rem)"),
];

function mediaqueryresponse() {
  if (mqls[0].matches) {
    offCanvasSidebar.removeAttribute("opened", "");
    offCanvasSidebarContainer.removeAttribute("opened", "");
    offCanvasSidebarContainer.setAttribute("no-transition", "");
  }
  if (mqls[1].matches) {
    offCanvasSidebar.removeAttribute("opened", "");
    offCanvasSidebarContainer.removeAttribute("opened", "");
    offCanvasScrim.removeAttribute("visible", "");
    body.removeAttribute("noscroll", "");
  }
  if (mqls[2].matches) {
  }
  if (mqls[3].matches) {
    offCanvasSidebar.removeAttribute("opened", "");
    offCanvasSidebarContainer.removeAttribute("opened", "");

    offCanvasScrim.removeAttribute("visible", "");
    body.removeAttribute("noscroll", "");
  }
}

for (var i = 0; i < mqls.length; i++) {
  mediaqueryresponse(); // call listener function explicitly at run time
  //mqls[i].addListener(mediaqueryresponse); // attach listener function to listen in on state changes
  mqls[i].addEventListener("change", mediaqueryresponse, false);
}

//close guide menu on escape
(function () {
  window.onkeyup = function (e) {
    if (e.keyCode == 27) {
      closeGuideMenu();
    }
  };
})();
