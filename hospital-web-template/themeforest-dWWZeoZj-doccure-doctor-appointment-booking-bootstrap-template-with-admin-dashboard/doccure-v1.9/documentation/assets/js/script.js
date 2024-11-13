(function($) {
	"use strict";
	
	$("#sidebar-menu ul li a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   	var header_height = $('header').outerHeight();
	   	$('html, body').animate( { scrollTop: $(hash).offset().top - header_height}, {duration: 500 } );

	});

	var $wrapper = $('.main-wrapper');
	var $pageWrapper = $('.page-wrapper');
	var $slimScrolls = $('.slimscroll');
	
	// Mobile menu sidebar overlay
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function () {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').toggleClass('menu-opened');
		return false;
	});
	
	// Sidebar overlay
	$(".sidebar-overlay").on("click", function () {
		$wrapper.removeClass('slide-nav');
		$(".sidebar-overlay").removeClass("opened");
		$('html').removeClass('menu-opened');
	});
	
	// Page Content Height
	if ($('.page-wrapper').length > 0) {
		var height = $(window).height();
		$(".page-wrapper").css("min-height", height);
	}
	
	// Page Content Height Resize
	$(window).resize(function () {
		if ($('.page-wrapper').length > 0) {
			var height = $(window).height();
			$(".page-wrapper").css("min-height", height);
		}
	});
	
	// Sidebar Slimscroll
	if ($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#ccc',
			allowPageScroll: false,
			wheelStep: 10,
			touchScrollStep: 100
		});
			
		$(function () {
             var $win = $(window);

             $win.scroll(function () {
				 if($(window).width() >= 992) {
					if ($win.height() + $win.scrollTop()
									> ($(document).height()-100)) {
						var wHeight1 = $(window).height() - 250;
						$slimScrolls.height(wHeight1);
						$('.sidebar .slimScrollDiv').height(wHeight1);
						$(window).resize(function () {
							var rHeight1 = $(window).height() - 150;
							$slimScrolls.height(rHeight1);
							$('.sidebar .slimScrollDiv').height(rHeight1);
						});
					}else{
						var wHeight1 = $(window).height() - 150;
						$slimScrolls.height(wHeight1);
						$('.sidebar .slimScrollDiv').height(wHeight1);
						$(window).resize(function () {
							var rHeight1 = $(window).height() - 150;
							$slimScrolls.height(rHeight1);
							$('.sidebar .slimScrollDiv').height(rHeight1);
						});
					}
				 }
             });
         });
		
		if ($(window).width() < 991.98) {
			var wHeight = $(window).height() - 70;
			$slimScrolls.height(wHeight);
			$('.sidebar .slimScrollDiv').height(wHeight);
			$(window).resize(function () {
				var rHeight = $(window).height() - 70;
				$slimScrolls.height(rHeight);
				$('.sidebar .slimScrollDiv').height(rHeight);
			});
		}
	}
	
	
		
})(jQuery);