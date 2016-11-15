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