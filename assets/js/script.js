const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50
    ? header.classList.add("active")
    : header.classList.remove("active");
});

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () {
  this.classList.toggle("active");
};

if (accordionAction.length > 0) {
  accordionAction.forEach((item) => {
    item.addEventListener("click", toggleAccordion);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const allImages = document.querySelectorAll(".images .img");
  const lightbox = document.querySelector(".lightbox");
  const closeImgBtn = lightbox.querySelector(".close-icon");

  allImages.forEach((img) => {
    img.addEventListener("click", () =>
      showLightbox(img.querySelector("img").src)
    );
  });

  const showLightbox = (imgSrc) => {
    const lightboxImg = lightbox.querySelector("img");
    lightboxImg.src = imgSrc; 
    lightbox.classList.add("show"); 
    document.body.style.overflow = "hidden"; 
  };

  closeImgBtn.addEventListener("click", (event) => {
    event.stopPropagation();  
    lightbox.classList.remove("show"); 
    document.body.style.overflow = "auto"; 
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });
});
