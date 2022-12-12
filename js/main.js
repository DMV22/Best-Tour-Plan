$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: "coverflow",
    slidesPerView: 1,
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    effect: "coverflow",
    slidesPerView: 1,
  });

  let menuButton = $('.menu-button')
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible")
  })

  let modalButton = $("[data-toggle=modal]")
  modalButton.on('click', openModal)
  let closeModalButton = $(".modal__close")
  closeModalButton.on('click', closeModal)

  function openModal() {
    let modalOverlay = $(".modal__overlay")
    let modalDialog = $(".modal__dialog")
    modalOverlay.addClass("modal__overlay--visible")
    modalDialog.addClass("modal__dialog--visible")
  }

  function closeModal(event) {
    event.preventDefault()
    let modalOverlay = $(".modal__overlay")
    let modalDialog = $(".modal__dialog")
    modalOverlay.removeClass("modal__overlay--visible")
    modalDialog.removeClass("modal__dialog--visible")
  }

  // Опрацювання форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please specify your telephone",
        },
      },
    });
  });

  $(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

  $("[name=phone]").mask("+38(999)-999-9999");

  AOS.init()
});