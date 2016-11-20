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

	$('.header-slider .bxslider' ).bxSlider({
		pager: false,
		adaptiveHeight: true
	});
	$('.bxslider-about').bxSlider({
		pager: false,
		adaptiveHeight: true
	});
	$('.faces-slider' ).bxSlider({	
		pager: false,
		touchEnabled: false
	});
	  $('.header-slider').css({
        visibility: "visible",
        opacity: "1"
   	 });
	  // анимация
		// $.fn.extend({
		//     animateCss: function (animationName) {
		//         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		//         this.addClass('animated ' + animationName).one(animationEnd, function() {
		//             $(this).removeClass('animated ' + animationName);
		//         });
		//     }
		// });

		// var contactoSymbolsBlock = document.querySelector('.about-faces__list'),
		// 	initiated = false,
		//   	parentList=$('.about-faces__list');

		//   	parentList.css('display','none');
		// function checkContactoAnimation(){
	 //  	var top = contactoSymbolsBlock.getBoundingClientRect().top;
	 //  	if (Math.abs(top)<=document.documentElement.clientHeight - 200) {
  // 			if (initiated==true) { // если уже инициализирован тогда возвражаемось
  // 				return;
  // 			}
  // 			initiated=true;
  // 			// подключаем метод animateCss в jQuery
		// 	var i=0;
	 //  		$('.about__wrap .about[aria-hidden="false"] .about-faces__item').each(function (indx, element){
	 //  			// console.log($(this));
	 //  			$(this).animateCss('bounceInRight');
	 //  		})
	 //  		parentList.removeAttr('style');
	 //  	}
	 //  	if (Math.abs(top)>document.documentElement.clientHeight-200 && initiated) {
	 //  		initiated=false;
	 //  		parentList.css('display','none');
	 //  	}
	 //  }
	 //  checkContactoAnimation();
	 //  $(window).on('scroll', checkContactoAnimation )



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
			// autoplay: true,
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