
//------------hamburger menu-------------------------

const navslide = () => {
  const menu = document.querySelector(".menu");
  const header = document.querySelector(".else");
  const menu_btn = document.querySelector(".hambergur");

  menu.addEventListener("click", () => {
    header.classList.toggle("else-active");

    menu_btn.classList.toggle("is-active");
  });
};

navslide();

/* back to top button-------------------------------------------------------------- */
const BackToTopBtn = document.querySelector(".top");
const FixedHeader = document.querySelector(".main-header");
window.addEventListener("scroll", ToTop);

function ToTop() {
  if (window.pageYOffset > 100) {
    BackToTopBtn.classList.add("Back_To_Top");
  } else {
    BackToTopBtn.classList.remove("Back_To_Top");
  }
}

BackToTopBtn.addEventListener("click", back);

function back() {
  window.scrollTo(0, 0);
}



//-------dropdown----------------------------------------------

const drop = document.querySelector(".dropdown");
const language = document.querySelector(".dropdown-lang");

drop.addEventListener("click", open);
function open(event) {
  event.stopPropagation();
  language.classList.toggle("languages");
}

document.addEventListener("click", close);
function close() {
  if (language.classList.contains("languages")) {
    language.classList.remove("languages");
  }
}

