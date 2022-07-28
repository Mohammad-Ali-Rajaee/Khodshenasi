//------------hamburger menu-------------------------
//---------------------------------------------------
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


//----------------------------------------------------------------------------------
/* back to top button-------------------------------------------------------------- */
//-------------------------------------------------------------------
const BackToTopBtn = document.querySelector(".top");
const FixedHeader = document.querySelector(".header");
window.addEventListener("scroll", ToTop);

function ToTop() {
  if (window.pageYOffset > 70) {
    BackToTopBtn.classList.add("Back_To_Top");
    FixedHeader.classList.add("fixed-header")
  } else {
    BackToTopBtn.classList.remove("Back_To_Top");
    FixedHeader.classList.remove("fixed-header");
  }
}

BackToTopBtn.addEventListener("click", back);

function back() {
  window.scrollTo(0, 0);
}


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

//--------------searchbar-----------------------

const searchbar = document.querySelector(".search-bar");
searchbar.addEventListener("click", (event)=> {
  event.stopPropagation();
  searchbar.classList.toggle("searching");
});