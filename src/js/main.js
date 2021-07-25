$('#carousel1').owlCarousel({
  autoplay:true,
  autoplayTimeout: 10000,
  items: 1,
  dots: true,
  touchDrag: false,
  pullDrag: false,
  loop:true
});


$('.help .item').on('click', function() {
  $('.help .item').removeClass('active');
  $(this).addClass('active');

  if ($('.help .item').hasClass('web active')) {
    $('.help').addClass('active');
  }
  else {
    $('.help').removeClass('active');
  }
});
