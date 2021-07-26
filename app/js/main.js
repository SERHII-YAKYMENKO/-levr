$(function () {

  var btn = $('.btn');

  btn.on('click', function () {
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
  });

  $('.box').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $(".star").rateYo({
    starWidth: "15px",
    spacing: "5px",
    normalFill: "none",
    ratedFill: "#FF7A00",
    readOnly: true,
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none"><path d="M7.4 0.5L5.6 3.8 1.6 4.4C0.9 4.5 0.6 5.3 1.1 5.7L4 8.4 3.4 12C3.2 12.7 4 13.2 4.6 12.9L8.2 11.2 11.8 12.9C12.5 13.2 13.2 12.7 13.1 12L12.4 8.4 15.3 5.7C15.9 5.3 15.6 4.5 14.8 4.4L10.8 3.8 9 0.5C8.7-0.1 7.8-0.2 7.4 0.5Z"/></svg>',
  });

  $(".star__featured").rateYo({
    starWidth: "16px",
    spacing: "6px",
    normalFill: "#E0E0E0",
    ratedFill: "#FF7A00",
    readOnly: true,
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none"><path d="M7.4 0.5L5.6 3.8 1.6 4.4C0.9 4.5 0.6 5.3 1.1 5.7L4 8.4 3.4 12C3.2 12.7 4 13.2 4.6 12.9L8.2 11.2 11.8 12.9C12.5 13.2 13.2 12.7 13.1 12L12.4 8.4 15.3 5.7C15.9 5.3 15.6 4.5 14.8 4.4L10.8 3.8 9 0.5C8.7-0.1 7.8-0.2 7.4 0.5Z"/></svg>',
  });

  $('.top-slider__list').slick({
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 10000,
    dots: true,
  });

  $('.product-top__list').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path d="M8 13.9L7.4 14.6C7.1 14.9 6.6 14.9 6.3 14.6L0.2 8.5C-0.1 8.2-0.1 7.8 0.2 7.5L6.3 1.4C6.6 1.1 7.1 1.1 7.4 1.4L8 2.1C8.3 2.4 8.3 2.9 8 3.2L4.3 6.8 13.3 6.8C13.7 6.8 14 7.1 14 7.5L14 8.5C14 8.9 13.7 9.3 13.3 9.3L4.3 9.3 8 12.8C8.3 13.1 8.3 13.6 8 13.9ZM8 13.9" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path d="M6 2.1L6.6 1.4C6.9 1.1 7.4 1.1 7.7 1.4L13.8 7.5C14.1 7.8 14.1 8.2 13.8 8.5L7.7 14.6C7.4 14.9 6.9 14.9 6.6 14.6L6 13.9C5.7 13.6 5.7 13.1 6 12.8L9.7 9.3 0.8 9.3C0.3 9.3 0 8.9 0 8.5L0 7.5C0 7.1 0.3 6.8 0.8 6.8L9.7 6.8 6 3.2C5.7 2.9 5.7 2.4 6 2.1ZM6 2.1" /></svg></button>',
    infinite: false,
    responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  $('.popular__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path d="M8 13.9L7.4 14.6C7.1 14.9 6.6 14.9 6.3 14.6L0.2 8.5C-0.1 8.2-0.1 7.8 0.2 7.5L6.3 1.4C6.6 1.1 7.1 1.1 7.4 1.4L8 2.1C8.3 2.4 8.3 2.9 8 3.2L4.3 6.8 13.3 6.8C13.7 6.8 14 7.1 14 7.5L14 8.5C14 8.9 13.7 9.3 13.3 9.3L4.3 9.3 8 12.8C8.3 13.1 8.3 13.6 8 13.9ZM8 13.9" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path d="M6 2.1L6.6 1.4C6.9 1.1 7.4 1.1 7.7 1.4L13.8 7.5C14.1 7.8 14.1 8.2 13.8 8.5L7.7 14.6C7.4 14.9 6.9 14.9 6.6 14.6L6 13.9C5.7 13.6 5.7 13.1 6 12.8L9.7 9.3 0.8 9.3C0.3 9.3 0 8.9 0 8.5L0 7.5C0 7.1 0.3 6.8 0.8 6.8L9.7 6.8 6 3.2C5.7 2.9 5.7 2.4 6 2.1ZM6 2.1" /></svg></button>',
    infinite: false,
    responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.categories__List').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    variableWidth: true,
    responsive: [{
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      },
    ]
  });

  $('.featured__list').slick({
    centerMode: true,
    centerPadding: '24.5%',
    // centerPadding: '470px',
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><style>.a{stroke-linejoin:round;stroke-width:2;stroke:#8D28AD;}</style><path d="M19 12H5" class="a"/><path d="M12 5L5 12 12 19" class="a"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><style>.a{stroke-linejoin:round;stroke-width:2;stroke:#8D28AD;}</style><path d="M5 12H19" class="a"/><path d="M12 5L19 12 12 19" class="a"/></svg></button>',
    zIndex: 100,
  });

  $('.sale__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path d="M8 13.9L7.4 14.6C7.1 14.9 6.6 14.9 6.3 14.6L0.2 8.5C-0.1 8.2-0.1 7.8 0.2 7.5L6.3 1.4C6.6 1.1 7.1 1.1 7.4 1.4L8 2.1C8.3 2.4 8.3 2.9 8 3.2L4.3 6.8 13.3 6.8C13.7 6.8 14 7.1 14 7.5L14 8.5C14 8.9 13.7 9.3 13.3 9.3L4.3 9.3 8 12.8C8.3 13.1 8.3 13.6 8 13.9ZM8 13.9" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path d="M6 2.1L6.6 1.4C6.9 1.1 7.4 1.1 7.7 1.4L13.8 7.5C14.1 7.8 14.1 8.2 13.8 8.5L7.7 14.6C7.4 14.9 6.9 14.9 6.6 14.6L6 13.9C5.7 13.6 5.7 13.1 6 12.8L9.7 9.3 0.8 9.3C0.3 9.3 0 8.9 0 8.5L0 7.5C0 7.1 0.3 6.8 0.8 6.8L9.7 6.8 6 3.2C5.7 2.9 5.7 2.4 6 2.1ZM6 2.1" /></svg></button>',
    infinite: false,
    zIndex: 100,
  });

  $('.menu__dropdown').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__dropdown').toggleClass('menu__dropdown--active');
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(clockClass, endtime) {
    const clock = document.querySelector(clockClass);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);
      daysSpan.innerHTML = ('0' + t.days).slice(-2);
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.countdown').attr('data-time');
  initializeClock('.countdown', deadline);

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

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

//anchor
var StickyElement = function (node) {
  var doc = $(document),
    fixed = false,
    anchor = node.find('.anchor'),
    content = node.find('.header__inner, .menu__list, .menu__list--active');

  var onScroll = function (e) {
    var docTop = doc.scrollTop(),
      anchorTop = anchor.offset().top;

    console.log('scroll', docTop, anchorTop);
    if (docTop > anchorTop) {
      if (!fixed) {
        anchor.height(content.outerHeight());
        content.addClass('fixed');
        fixed = true;
      }
    } else {
      if (fixed) {
        anchor.height(0);
        content.removeClass('fixed');
        fixed = false;
      }
    }
  };

  $(window).on('scroll', onScroll);
};

var demo = new StickyElement($('#fixed'));