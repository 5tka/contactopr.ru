$(document).ready(function(){
	  $(".hamburger").click(function(){
	    $(this).toggleClass("is-active");

	  });
	  $('.header-slider .bxslider').bxSlider({
pager: false
		});
	  $('.header-slider').css({
        visibility: "visible",
        opacity: "1"
   	 });
	$('.bxslider-about').bxSlider({
		pager: false
	});
});
