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

$('.letters .letters-wrap .item_hidden').css('opacity', 0);
    $('.letters #letters__left-arrow').click(function()
    {
        if (!animation)
        {
            animation=true;
            var hi=$('.letters .letters-wrap .item_hidden:last');
            var ri=$('.letters .letters-wrap .item_right');
            var ci=$('.letters .letters-wrap .item_center');
            var li=$('.letters .letters-wrap .item_left');

            hi.animate({opacity: 1, width: '265px', height: '600px', left: '755px', top: '40px', backgroundPositionY: '30px'}, 1000, 'swing', function() {hi.removeClass('item_hidden'); hi.addClass('item_right');});
            ri.animate({width: '356px', height: '700px', left: '332px', top: '0px', backgroundPositionY: '0px'}, 1000, 'swing', function() {ri.removeClass('item_right'); ri.addClass('item_center');});
            ci.animate({width: '265px', height: '600px', left: '0px', top: '40px', backgroundPositionY: '30px'}, 1000, 'swing', function() {ci.removeClass('item_center'); ci.addClass('item_left');});
            li.animate({opacity: 0, width: '100px', height: '150px', left: '460px', top: '100px', backgroundPositionY: '0px'}, 1000, 'swing', function()
            {
                li.remove().insertBefore('.letters .letters-wrap .item_hidden:first');
                li.removeClass('item_left');
                li.addClass('item_hidden');
                ri.css('z-index','71');
                ci.css('z-index','70');
                li.css('z-index','69');
                hi.css('z-index','70');
                animation=false;
            });
        }
    });

    var animation = false;

    $('.letters #letters__right-arrow').click(function()
    {
        if (!animation)
        {
            animation=true;
            var hi=$('.letters .letters-wrap .item_hidden:first');
            var ri=$('.letters .letters-wrap .item_right');
            var ci=$('.letters .letters-wrap .item_center');
            var li=$('.letters .letters-wrap .item_left');

            hi.animate({opacity: 1, left: '0px', top: '40px', backgroundPositionY: '30px'}, 1000, 'swing', function() {hi.removeClass('item_hidden'); hi.addClass('item_left');});
            li.animate({left: '332px', top: '0px', backgroundPositionY: '0px'}, 1000, 'swing', function() {li.removeClass('item_left'); li.addClass('item_center');});
            ci.animate({left: '755px', top: '40px', backgroundPositionY: '30px'}, 1000, 'swing', function() {ci.removeClass('item_center'); ci.addClass('item_right');});
            ri.animate({opacity: 0, width: '100px', height: '150px', left: '460px', top: '100px', backgroundPositionY: '0px'}, 1000, 'swing', function()
            {
                ri.remove().insertAfter('.letters .letters-wrap .item_hidden:last');
                ri.removeClass('item_right');
                ri.addClass('item_hidden');
                li.css('z-index','71');
                ci.css('z-index','70');
                ri.css('z-index','69');
                hi.css('z-index','70');
                animation=false;
            });
        }
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