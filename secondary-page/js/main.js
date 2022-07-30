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

//--------------------searchbar----------------
const searchbar = document.querySelector(".search-bar");
searchbar.addEventListener("click", (event) => {
  event.stopPropagation();
  searchbar.classList.toggle("searching");
});

//----------------------------------------------------------------------------------
/* back to top button-------------------------------------------------------------- */
//-------------------------------------------------------------------
const BackToTopBtn = document.querySelector(".top");
const FixedHeader = document.querySelector(".header");
window.addEventListener("scroll", ToTop);

function ToTop() {
  if (window.pageYOffset > 70) {
    BackToTopBtn.classList.add("Back_To_Top");
    FixedHeader.classList.add("fixed-header");
    document.querySelector(".page-container").style.padding = "64px 0 0 0";
  } else {
    BackToTopBtn.classList.remove("Back_To_Top");
    FixedHeader.classList.remove("fixed-header");
    document.querySelector(".page-container").style.padding = "0";
  }
}

BackToTopBtn.addEventListener("click", back);

function back() {
  window.scrollTo(0, 0);
}


// --------------------------ideas--------------

let addIdea = document.getElementById("showing");

let isShow = false;
function showHide() {
  if (!isShow) {
    addIdea.style.display = "flex";
    isShow = true;
  } else {
    addIdea.style.display = "none";
    isShow = false;
  }
}
