$('#icon_Menu').click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass('menu_Open');
});
$('.bg_close_mobile_menu').bind('click', function(){
    $('#icon_Menu').click();
});

$('.wrap_brand').slick({
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });