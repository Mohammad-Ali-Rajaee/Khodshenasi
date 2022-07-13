const navslide = () => {
  const menu = document.querySelector(".menu");
  const header = document.querySelector(".else");
  const menu_btn = document.querySelector(".hambergur");

  menu.addEventListener("click", () => {
    header.classList.toggle("else-active");

    menu_btn.classList.toggle("is-active");
  });
};
/* back to top button */
const BackToTopBtn = document.querySelector(".top");
const FixedHeader = document.querySelector(".main-header");
window.addEventListener("scroll", ToTop);

function ToTop() {
  if (window.pageYOffset > 100) {
    if (!BackToTopBtn.classList.contains("Back_To_Top")) {
        BackToTopBtn.classList.remove("Back_To_Top_End");
        BackToTopBtn.classList.add("Back_To_Top");
        BackToTopBtn.style.display = "block";
        // FixedHeader.classList.add("fixed-header");
    }
  } else {
    BackToTopBtn.style.display = "none";
    if (BackToTopBtn.classList.contains("Back_To_Top")) {
        BackToTopBtn.classList.remove("Back_To_Top");
        BackToTopBtn.classList.add("Back_To_Top_End");
    }
}
}
BackToTopBtn.addEventListener("click", back);

function back() {
  window.scrollTo(0, 0);
}

const dropdownLanguages = () => {
  const drop = document.querySelector(".dropdown");

  menu.addEventListener("click", () => {
    drop.classList.add("languages");
  });
};
navslide();
