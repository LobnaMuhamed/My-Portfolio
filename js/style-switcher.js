/* ======================= Toggle Style Switcher ======================= */
const styleSwitcherToggle = document.querySelector(".style_switcher_toggler");
const MySwitcher = document.querySelector(".style_switcher");

styleSwitcherToggle.addEventListener("click", () => {
  MySwitcher.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (MySwitcher.classList.contains("open")) {
    MySwitcher.classList.remove("open");
  }
});

/* ======================= Theme Colors ======================= */
const alternateStyles = document.querySelectorAll(".alternate-style");
if (window.localStorage.getItem("color")) {
  alternateStyles.forEach((style) => {
    style.setAttribute("disabled", "true");
  });
  document
    .querySelector(`[data-color = ${window.localStorage.getItem("color")}]`)
    .removeAttribute("disabled");
}
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
      window.localStorage.setItem("color", style.dataset.color);
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/* ======================= Theme Light & Dark Mode ======================= */
const dayNight = document.querySelector(".day_night");
if (window.localStorage.getItem("mode")) {
  if (window.localStorage.mode == "light") {
    if (dayNight.querySelector("i").classList.contains("fa-sun")) {
      dayNight.querySelector("i").classList.remove("fa-sun");
      dayNight.querySelector("i").classList.add("fa-moon");
    }
    document.body.classList.remove("dark");
  } else if (window.localStorage.mode == "dark") {
    if (dayNight.querySelector("i").classList.contains("fa-moon")) {
      dayNight.querySelector("i").classList.remove("fa-moon");
      dayNight.querySelector("i").classList.add("fa-sun");
    }
    document.body.classList.add("dark");
  }
}

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
p
var modeName = "";
if (document.body.classList.contains("dark")) {
  modeName = dark;
} else {
  modeName = light;
}

window.localStorage.setItem("mode", modeName);

// if (dayNight.querySelector("i").classList.contains("fa-moon")) {
//   window.localStorage.removeItem("mode");
//   window.localStorage.setItem("mode", "fa-sun");
// } else if (dayNight.querySelector("i").classList.contains("fa-sun")) {
//   window.localStorage.removeItem("mode");
//   window.localStorage.setItem("mode", "fa-moon");
// }

// if (dayNight.querySelector("i").classList.contains("fa-moon")) {
//   document.body.classList.add("dark");
// } else if (dayNight.querySelector("i").classList.contains("fa-sun")) {
//   document.body.classList.remove("dark");
// }

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
