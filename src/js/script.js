$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $("#menu").toggleClass("db");
    });
    $(window).resize(function() {
        var t = $(window).width();
        if (t >= 1070 && ($(".hamburger").hasClass("is-active"))) {
		$("#menu").removeClass("db");
        $(".hamburger").removeClass("is-active");
	}
    var menuHeader=$('#menu');
    // if (menuHeader.hasClass('db') && menuHeader.outerHeight()>$(window).height()) {
        // menuHeader.mCustomScrollbar({
        //     theme:"invisible",
        //     scrollEasing: "linear",
        //     mouseWheel:{ scrollAmount: 50 },
        //     advanced:{updateOnBrowserResize: true,
        //         updateOnContentResize: true},
        // });
    // }

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
	$('.faces-slider' ).bxSlider({
		pager: false,
		touchEnabled: false
	});
    $('.bxslider-about').bxSlider({
        pager: false,
        adaptiveHeight: true
    });
	  // $('.header-slider').css({
   //      visibility: "visible",
   //      opacity: "1"
   // 	 });

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
	// $(".tabs").lightTabs();

		$('.brands-wrapper').slick({
			infinite: true,
			// autoplay: true,
			autoplaySpeed: 2500
		});
		$('.gallery__list').slick({
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			// centerMode: true,
			variableWidth: true
		});
        
        $('.gallery__wrapper-item div').on('click',function(){
            $('.services__popup').bPopup({
				transition: 'slideBack',
				transitionClose: 'slideIn'

            });
            return false;
        });
        $('.menu-list__a--briff').on('click',function(){
            $('#brif_block').bPopup({
                closeClass: 'close__brif_block',
                transition: 'slideBack',
				transitionClose: 'slideIn'
            });
            return false;
        });


        var li = $('.tabs__gallery-item'),
            img = $('.gallery__wrapper-item div');
            brands = $('.brands-item')

            li.click(function(){
                if($(this).data("category") == "all"){
                    $('.gallery__wrapper-item div').removeAttr("style");
                }else{
                    data_cat = $(this).data("category");
                    $('.gallery__wrapper-item div').css("display","none");
                    $('.gallery__wrapper-item div[data-category='+data_cat+']').removeAttr("style");
                }
                $('.gallery__list').slick('slickGoTo',0);
            });
            brands.click(function(){
                data_cl = $(this).data("clients");
                $('.gallery__wrapper-item div').css("display","none");
                $('.gallery__wrapper-item div[data-clients='+data_cl+']').removeAttr("style");
                // $("#site_body").mCustomScrollbar("scrollTo", pos, {scrollInertia:1000});
                $('.gallery__list').slick('slickGoTo',0);
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
	transition: 'slideBack',
	transitionClose: 'slideIn'
  });
});


// ПАРАЛАКС

var touch_screen=false;
var animation = false;
var body_scroll_top = 0;
var sliders_top = new Array();
var scroll_vector_direct=true;
var real_height=0;

$(function()
{
    var zIndex = 1;
    $('.sliders').each(function(i, val) {
        $(this).css('z-index', zIndex); // увеличиваем z-index следующего слайда при паралаксе
        zIndex+=1;
    });
    $('.firstline').css('z-index', zIndex);

    $(window).resize(function () {all_resize()});
    all_resize();
    start_once();
    checkContactoAnimation();
});

// ****** АНИМАЦИЯ *********
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

var contactoSymbolsBlock = document.querySelector('.about-faces__list'),
    initiated = false,
    parentList=$('.about-faces__list');

    parentList.css('visibility','hidden');
function checkContactoAnimation(){
    var top = contactoSymbolsBlock.getBoundingClientRect().top,
        containerTop=document.getElementById('mCSB_1_container').getBoundingClientRect().top;
    top=Math.abs(top);
    containerTop=Math.abs(containerTop);
    if (top<=containerTop - 200) {
        // alert(1);

        if (initiated==true) { // если уже инициализирован тогда возвражаемось
            return;
        }
        initiated=true;
        // подключаем метод animateCss в jQuery
        var i=0;
        $('.about__wrap .about[aria-hidden="false"] .about-faces__item').each(function (indx, element){
            // console.log($(this));
            $(this).animateCss('bounceInRight');
        })
        parentList.removeAttr('style');
    }
    if (top>containerTop - 200 && initiated) {
        initiated=false;
        parentList.css('visibility','hidden');
    }
}


function all_resize() {$('#site_body').height($(document).height());}

// function show_alert(name, txt)
// {
//     $.arcticmodal({type: 'ajax', url: '/blocks/alert.php', afterOpen: function(data, el)
//     {
//         $('#alert_close').click(function() {$('#alert_block').fadeOut(300, function() {el.arcticmodal('close');});});
//         $('#alert_name').text(name);
//     $('#alert_text').text(txt);
//     $('#alert_block').fadeIn(300);
//     }});
// }

// function texth() {
// }

function scroll_body(obj) // #sitebody
{
    body_scroll_top=Math.abs(obj.mcs.top);
    // console.log(body_scroll_top+'--body_scroll_top');
    // texth();
	// console.log(
	// 	'Позиция скрола: '+body_scroll_top+
	// 	'; Высота скрола:'+$('#center').height()+
	// 	"; Высота экрана: "+$('#site_body').height()
	// 	);

    $('.sliders').each(function(i, val)
    {
        def=sliders_top[i]-body_scroll_top;
        if (def>40) {$(this).css('top', def);}

        // else if ($(this).hasClass('fixed_slide')) {
        // $(this).css('top', 40);} //СТОИМ НА МЕСТЕ

        else if ($(this).hasClass('fixed_slide')) {
            if ($(this).height()>$('#site_body').height()) { // если фикс блок больше vh ми его немного скролим а потом фиксируем
                // если  позиция прокрутки >= (позиции следующего обьекта - vh)
                if (body_scroll_top>=sliders_top[i+1]-$('#site_body').height()) {
                    $(this).css('top', $('#site_body').height()-$(this).outerHeight());
                    // ставим фикс позицию top = vh - высота блока
                } else { // иначе обычное значение при прокрутке
                    $(this).css('top', def);
                }
            } else { // другим блокам просто top = height(menu)
                $(this).css('top', 40);

            }
        } //СТОИМ НА МЕСТЕ

        else if (!$(this).hasClass('fixed_slide')) {$(this).css('top', def);}
        // if ($(this).attr('id')=='main') {$('#slide_1_logo').css({'bottom': body_scroll_top+100});}
        // if ($(this).attr('id')=='contacts')
        // {
        //     img_ups=body_scroll_top+full_screen_height-real_height;
        //     img_height=300; if (img_ups>0) {img_height+=img_ups;}
        //     $('#paralax_2').css('height', img_height+'px');

        //     pos_num=$('#center').height()-body_scroll_top-$('#site_body').height();
        //     if (pos_num<1000)
        //     {
        //         pos_paralax_1=(pos_num*332)/1000;
        //         $('#paralax_1').css('backgroundPosition', 'center -'+pos_paralax_1+'px');
        //     }
        //     if (pos_num<300)
        //     {
        //         pos_paralax_2=((300-pos_num)*839)/img_height;
        //         $('#paralax_2').css('backgroundPosition', 'center -'+pos_paralax_2+'px');
        //     }

        // }
    });

}

function start_once()
{
    full_screen_height=$('#site_body').height()-40;
    // $.getJSON("/ajax.php", {act: 'start_once', fsh:full_screen_height}, function(j)
    // {
    //     if (j.e==0)
    //     {
            // $('#site_body').html(j.data);
            set_slide_start_position();
            set_slide_events();
            // $('body').preload(function() {$('#site_preloader').fadeOut(300, function() {$('#site_body').fadeIn(300);});});
    //     }
    //     // else {show_alert('Ошибка обращения к серверу', j.alert);}
    // });
}

function set_slide_start_position()
{
    full_screen_height=$('#site_body').height()-$('#header').height();
    $('.sliders.fullscreen').height(full_screen_height);
    $('.sliders').css('top', $('#site_body').height());  /// баг з відступом 2 блоку
    $('.sliders:first').css('top',$('#header').height());
    $('.sliders').eq(1).css('top',$('.sliders:first').height()); // тіпа порішали верхній баг
    // sl_1_w=parseInt($(document).width()/2);
    // sl_1_h=parseInt((sl_1_w*163)/950);
    // sl_1_b=100;
    // sl_1_l=parseInt(($(document).width()-sl_1_w)/2);
    // $('#slide_1_logo').css({'width': sl_1_w, 'height': sl_1_h, 'bottom': sl_1_b, 'left': sl_1_l});
    var center_height=0;
    $('.sliders').each(function()
    {
    	if (!$(this).hasClass('fullscreen')) {
	    	$(this).css({
	    		height: $(this).outerHeight()
	    	});
    	}
        sliders_top.push($('#header').height()+center_height);
        center_height+=$(this).outerHeight();
    });
    // console.log(sliders_top); /// дебаг
    // console.log(center_height); /// дебаг

    real_height=center_height;
    // center_height+=300;
    $('#center').height(center_height);
    $("#site_body").mCustomScrollbar({
        theme:"invisible",
        scrollEasing: "linear",
        mouseWheel:{ scrollAmount: 300 },
        advanced:{updateOnBrowserResize: true,
            updateOnContentResize: true},
        callbacks:{whileScrolling: function()   {
                                                    scroll_body(this);
                                                    checkContactoAnimation();}
                                                 }
        });
    // $('#command_letter_block').height(12.5*($(document).width()/100));
    // hpi=(full_screen_height-290)/2;
    // $('.project_center_line').height(hpi);
    // $('.normal_item').width(hpi*2);
    // $('.small_item').width(hpi-10);
    // lttw=(parseInt($(document).width())-1020)/2;
    // $('#sliders #paralax_content table tbody td:first').width(lttw);
    // $('#sliders #paralax_content table tbody td:last').width(lttw);
}

function set_slide_events()
{
    $('#menu a[rel]').click(function()
    {
        slidenum=$(this).attr("rel");
        if (slidenum>0)
        {
            pos=0;
            $('.sliders').each(function(i) {if ((i+1)<slidenum) {pos+=$(this).outerHeight();}});
            $("#site_body").mCustomScrollbar("scrollTo", pos, {scrollInertia:1000});
        }
        // else {$.fancybox({href: '/blocks/brif.php', type: 'ajax'});}
    });

    // $('#history').click(function(e)
    // {
    //     if (!animation)
    //     {
    //         if (e.pageX > $(this).width()/2) {$('#history .sub_slide').eq(4).fadeOut(1000, function() {$(this).insertBefore('#history .sub_slide:first').fadeIn();});}
    //         else {$('#history .sub_slide').eq(0).fadeOut(0, function() {$(this).insertAfter('#history .sub_slide:last').fadeIn(1000);});}
    //     }
    // });
    // $('#clients').click(function(e)
    // {
    //     if (!animation)
    //     {
    //         if (e.pageX > $(this).width()/2) {$('#clients .sub_slide').eq(4).fadeOut(1000, function() {$(this).insertBefore('#clients .sub_slide:first').fadeIn();});}
    //         else {$('#clients .sub_slide').eq(0).fadeOut(0, function() {$(this).insertAfter('#clients .sub_slide:last').fadeIn(1000);});}
    //     }
    // });
    // setInterval(function() {$('#clients .sub_slide:last').fadeOut(1000, function() {$(this).insertBefore('#clients .sub_slide:first').fadeIn();});}, 3000);
    // if ($('#main .sub_slide').size()>1) {setInterval(function() {$('#main .sub_slide:last').fadeOut(1000, function() {$(this).insertBefore('#main .sub_slide:first').fadeIn();});}, 3000);}

    // $('#project_menu a').click(function()
    // {
    //     full_screen_height=$('#site_body').height()-$('#header').height();
    //     type=$(this).attr('rel');
    //     $('#project_menu a').not('[rel="'+type+'"]').removeClass('active');
    //     $(this).addClass('active');
    //     $('.project_item').hide(1000);
    //     $.getJSON("/ajax.php", {act: 'get_project', type: type, fsh: full_screen_height}, function(j)
    //     {
    //         if (j.e==0)
    //         {
    //             $('#project_center').html(j.data);
    //             pclh=((full_screen_height-270)-20)/2;
    //             $('.project_center_line').height(pclh);
    //             $('.normal_item').width(pclh*2);
    //             $('.small_item').width(pclh-10);
    //             $('.project_item').show(1000);
    //         }
    //         // else {show_alert('Ошибка обращения к серверу', j.alert);}
    //     });
    // });

    // $('#right_arrow').click(function()
    // {
    //     def=parseInt($(document).width()/2);
    //     left=parseInt($('.project_center_line').css('left'))-def;
    //     $('.project_center_line').css('left', left+'px');
    // });
    // $('#left_arrow').click(function()
    // {
    //     def=parseInt($(document).width()/2);
    //     left=parseInt($('.project_center_line').css('left'))+def;
    //     if (left>0) {left=0;}
    //     $('.project_center_line').css('left', left+'px');
    // });

    // $('.clients_logo').click(function()
    // {
    //     client=$(this).attr('rel');
    //     $.getJSON("/ajax.php", {act: 'get_project', client: client, fsh: full_screen_height}, function(j)
    //     {
    //         if (j.e==0)
    //         {
    //             $('#project_center').html(j.data);
    //             pclh=((full_screen_height-270)-20)/2;
    //             $('.project_center_line').height(pclh);
    //             $('.normal_item').width(pclh*2);
    //             $('.small_item').width(pclh-10);
    //             $('.project_item').show(1000);
    //         }
    //         // else {show_alert('Ошибка обращения к серверу', j.alert);}
    //     });
    //     pos=0;
    //     $('.sliders').each(function(i) {if ((i+1)<5) {pos+=$(this).height();}});
    //     $("#site_body").mCustomScrollbar("scrollTo", pos, {scrollInertia:1000});
    //     $('#project_menu a').not('[rel="0"]').removeClass('active');
    //     $('#project_menu a[rel="0"]').addClass('active');
    // });


    // $('.fancybox').fancybox({'width':1100, afterClose: function() {animation=false;}});
    // $('.sub_slide .sub_slide_content .link').mouseover(function() {animation=false;});
    // $('.sub_slide .sub_slide_content .link').mouseenter(function() {animation=true;});
}

// function send_brif()
// {
//     var brif=''; var qc=$('#brif_question_count').val();
//     for (i=0; i<qc; i++) {if ($('h4[rel="'+i+'"]').size() && $('#question_'+i).size()) {brif+='<b>'+$('h4[rel="'+i+'"]').text()+':</b> '+$('#question_'+i).val()+'<br><br>';}}
//     $.getJSON("/ajax.php", {act: 'send_bref', b:brif}, function(j)
//     {
//         $.fancybox.close();
//         if (j.e==0) {show_alert('Бриф отправлен', 'Бриф успешно отправлен. В ближайшее время мы свяжемся с Вами!');}
//         else {show_alert('Ошибка обращения к серверу', j.alert);}
//     });
// }

