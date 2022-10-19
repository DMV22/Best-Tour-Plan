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


});