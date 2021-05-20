$(function () {

  $(".star").rateYo({
    starWidth: "15px",
    spacing: "5px",
    normalFill: "none",
    ratedFill: "#FF7A00",
    readOnly: true,
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none"><path d="M7.4 0.5L5.6 3.8 1.6 4.4C0.9 4.5 0.6 5.3 1.1 5.7L4 8.4 3.4 12C3.2 12.7 4 13.2 4.6 12.9L8.2 11.2 11.8 12.9C12.5 13.2 13.2 12.7 13.1 12L12.4 8.4 15.3 5.7C15.9 5.3 15.6 4.5 14.8 4.4L10.8 3.8 9 0.5C8.7-0.1 7.8-0.2 7.4 0.5Z"/></svg>',
  });

  // $(".star-details").rateYo({
  //   starWidth: "18px",
  //   spacing: "13px",
  //   normalFill: "#d6d6d6",
  //   ratedFill: "#ffcc00",
  //   readOnly: true,
  //   "starSvg": '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg - inline--fa fa - star fa - w - 18 " role="img" xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
  // });

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