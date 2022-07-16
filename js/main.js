//------------hamburger menu-------------------------

const navslide = () => {
  const menu = document.querySelector(".menu");
  const header = document.querySelector(".else");
  const menu_btn = document.querySelector(".hambergur");

  menu.addEventListener("click", menu_open);

  function menu_open(event) {
    event.stopPropagation();
    header.classList.toggle("else-active");

    menu_btn.classList.toggle("is-active");
  }

  document.addEventListener("click", menu_close);
  function menu_close() {
    if (header.classList.contains("else-active")) {
      header.classList.remove("else-active");
      menu_btn.classList.remove("is-active");
    }
  }
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

// const drop = document.querySelector(".dropdown");
// const language = document.querySelector(".dropdown-lang");

// drop.addEventListener("click", open);
// function open(event) {
//   event.stopPropagation();
//   language.classList.toggle("languages");
// }

// function close() {
//   

//--------------- dropdown------------------------

const dropdowns = document.querySelector(".dropdown");

const select = document.querySelector(".select");
const options = document.querySelector(".options");
const selected = document.querySelector(".selected");
const option = document.querySelector(".option");
const caret = document.querySelector(".caret");

function clicked(element) {
  const value = element.innerHTML;
  document.getElementById("selected").innerHTML = value;
  close(options,"options--active")
  close(caret,"caret-rotate")
}


select.addEventListener("click", options_open);
  

function close(cls,closed){
  if (cls.classList.contains(closed)) {
    cls.classList.remove(closed);
  }
}
function options_open(event) {
  event.stopPropagation();
  options.classList.toggle("options--active");
  caret.classList.toggle("caret-rotate");
}

document.addEventListener("click", ()=>{
  close(options,"options--active");
  close(caret,"caret-rotate");
});
