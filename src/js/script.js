$(document).ready(function(){
	  $(".hamburger").click(function(){
	    $(this).toggleClass("is-active");
	    $("#menu").toggleClass("db");
	  });
	$(window).resize(function() {
		var t = $(window).width();
		if (t >= 1070 && ($(".hamburger").removeClass("is-active"))) {
		$("#menu").removeClass("db")
	}

		// 	if($("#hamburger").hasClass("is-active") && t >= 1070){
		// 	// alert(1)
		// 	$(".hamburger").removeClass("is-active");
		// 	$("#menu").removeClass("db");
		// }
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

	$('.letters-wrap').slick({
		lazyLoad: 'ondemand',
		// initialSlide: 1,
	  centerMode: true,
	  centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        // arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        // arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

$('.fancybox').fancybox({'width':1100, afterClose: function() {animation=false;}});
	$(".tabs").lightTabs();

		$('.brands-wrapper').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2500
		});
		$('.gallery__list').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			variableWidth: true
		});
        $('.gallery__wrapper-item div').on('click',function(){
            $('.services__popup').bPopup({
                closeClass: 'none',
            });
            return false;
        })
});

(function($){
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;

			showPage = function(i){
				$(tabs).children("div").children("div").hide();
				$(tabs).children("div").children("div").eq(i).show();
				$(tabs).children("ul").children("li").removeClass("tabs__gallery-item--active");
				$(tabs).children("ul").children("li").eq(i).addClass("tabs__gallery-item--active");
			}

			showPage(0);

			$(tabs).children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;
			});

			$(tabs).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});
		};
		return this.each(createTabs);
	};
})(jQuery);
// POPUP
$('.uslugi__item').on('click', function(event) {
  event.preventDefault();
  $('.uslugi-popup__wrap').bPopup({
  });
});