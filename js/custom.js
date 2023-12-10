$(document).ready(function(){
  $('#menu-icon').click(function(){
    $(".menu-main").toggleClass('show-menu');
    $(this).toggleClass('menu-open');
    $("html").toggleClass("burger-overlay-active");
  });
});
// On scroll header fixed code
jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 100) {
      jQuery('.site-header').addClass('fixed');
    } else {
      jQuery('.site-header').removeClass('fixed');
    }
  });

//////////////////////////
$(document).ready(function(){
  $('.search-wrapper a').click(function(){
      $(".search-wrapper .search-tooltip").toggleClass('open');
  });
});
//////////////////

$('.testimonial_slider').slick({
  dots: false,
  arrows:true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  prevArrow: '<i class="far fa-chevron-left"></i>',
	nextArrow: '<i class="far fa-chevron-right"></i>'
});

/////////////////
jQuery(window).scroll(function(){
	if(jQuery(window).scrollTop() > 1){
		jQuery('header').addClass('fixed');
	}
	else{
		jQuery('header').removeClass('fixed');
	}
  });
		


