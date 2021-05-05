$(function () {

  $('.dropdown').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
    $('.dropdown').toggleClass('dropdown--active')
  });

});