$(function () {
  $(".slider_inner").slick({
    arrows: false,
    dots: true,
    adaptiveHeiigs: true,
    infinity: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
  });
});

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .header_menu").toggleClass("active");
  });
});

$("a").click(function (event) {
  event.preventDefault();
  $("<div>")
    .append("default " + event.type + " prevented")
    .appendTo("#log");
});

const elements = document.getElementsByClassName(".title_colums");
for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", showMenu);
  elements[i].addEventListener("noclick", hideMenu);
}

function showMenu() {
  if (this.children.length > 1) {
    this.children[1].style.height = "auto";
    this.children[1].style.opacity = "1";
    this.children[1].style.overflow = "visible";
  }
}

function hideMenu() {
  if (this.children.length > 1) {
    this.children[1].style.height = "0";
    this.children[1].style.opacity = "0";
    this.children[1].style.overflow = "hidden";
  }
}

function showAdditionalFooterItemData(e) {
  e.target.parentElement.classList.toggle('show_footer_list')
}