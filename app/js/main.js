$(function () {

  $('.top-slider__list').slick({
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 10000,
    dots: true,
  });

  $('.popular__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><style>.a{stroke-linejoin:round;stroke-width:2;stroke:#8D28AD;}</style><path d="M19 12H5" class="a"/><path d="M12 5L5 12 12 19" class="a"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><style>.a{stroke-linejoin:round;stroke-width:2;stroke:#8D28AD;}</style><path d="M5 12H19" class="a"/><path d="M12 5L19 12 12 19" class="a"/></svg></button>',
    infinite: false,
  });

  $('.categories__List').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
  });

  $('.menu__dropdown').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
    $('.menu__dropdown').toggleClass('menu__dropdown--active')
  });

});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}