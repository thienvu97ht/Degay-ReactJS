/* Click show modal */
var modalElm = document.querySelector(".modal");
var modalBody = document.querySelector(".modal__body-detail-product");
var cartElm = document.querySelector(".header__menu-nav-bag");
var menuMobile = document.querySelector(".modal-menu-mobile");
var modalSearch = document.querySelector(".modal-search");

function closeModal() {
  modalElm.style.display = "none";
  modalBody.style.display = "none";
  cartElm.style.display = "none";
  menuMobile.style.display = "none";
  modalSearch.style.display = "none";
}

function closeModalDetail() {
  modalElm.style.display = "none";
  modalBody.style.display = "none";
}

function closeModalCart() {
  modalElm.style.display = "none";
  cartElm.style.display = "none";
}

function closeModalMenu() {
  modalElm.style.display = "none";
  menuMobile.style.display = "none";
}

function closeModalSearch() {
  modalElm.style.display = "none";
  modalSearch.style.display = "none";
}

function showModalDetailProduct() {
  modalElm.style.display = "flex";
  modalBody.style.display = "block";
  if (modalElm.style.display === "flex") {
    modalBody.classList.add("modal-active");
  } else {
    modalBody.classList.remove("modal-active");
  }
}

function showModalCart() {
  modalElm.style.display = "flex";
  cartElm.style.display = "block";
}

function showModalMenu() {
  modalElm.style.display = "flex";
  menuMobile.style.display = "flex";
}

function showModalSearch() {
  modalElm.style.display = "flex";
  modalSearch.style.display = "flex";
}

/* Search product */
function searchProduct() {
  window.location.href = "timkiem.html";
}