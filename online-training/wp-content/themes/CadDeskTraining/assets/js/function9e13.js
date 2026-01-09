(function( $ ) {
		  
// Preloader Image
	//$(window).load(function(){
		//$('#loader').fadeOut('slow',function(){$(this).remove();});
	//}); 		  
		  
// Sticky Header 
	$(window).scroll(function() {
			if($('.header').length){
				let mainHeader = $('.header').height();
				let windowpos = $(window).scrollTop();
				if (windowpos >= mainHeader) {
					$('.header-sticky').addClass('sticked');
					
				} else {
					$('.header-sticky').removeClass('sticked');
					
				}
			}
	});	

// Respoonsive Menu		
 	 if ($(window).width() < 1199) {
		$(".navbar-nav li").click(function (event) {
			// Allow #more_posts button to function
			if ($(event.target).closest('#more_posts').length > 0) {
			return;
			}

			event.stopPropagation();
			$(this).find(".sub-menu").removeClass("open");
			$(this).parents(".sub-menu").addClass("open");
			$(this).toggleClass("open");
		});
	}

	$( ".navbar-toggler" ).click(function(event) {
		$('body').toggleClass('menu-open');
		$('body').toggleClass('noscroll');
		$('.menu-overlay').toggleClass('open');
	});	

	$( ".menu-overlay" ).click(function(event) {
		$('body').removeClass('menu-open');
		$('body').removeClass('noscroll');
		$('.menu-overlay').removeClass('open');
		$('.navbar-toggler').addClass('collapsed');
		$('.navbar-collapse').removeClass('show');
	});	

// Scrool Function Back to  Top And Transparent Header
   $(window).scroll(function() {    
		let scroll = $(window).scrollTop();
		if(scroll >= 100) {
			$('.scroll-top').fadeIn(300);
			$(".header-fixed").addClass("fix");
			$(".header-transparent").addClass("transparency");
		} else {
			$('.scroll-top').fadeOut(300);
			$(".header-fixed").removeClass("fix");
			$(".header-transparent").removeClass("transparency");
		}
  });

// Scrool Function Back to  Top   
  $('.scroll-top').click(function(){ 
	 $("html, body").animate({ scrollTop: 0 }, 600); 
	 return false; 
  });
  
// MASSONRY Without $
   let $mscontainer = $('#ms-container');
   $mscontainer.imagesLoaded( function() {
	 $mscontainer.masonry({
      	itemSelector: '.ms-item',
      	columnWidth: '.ms-item', 
		isFitWidth: true,
     });
	});	

//Animated	   
  AOS.init({
    duration: 1000, // animation duration (optional)   
	once: true
  });

// Form Focus
	$("input, select, textarea").on('focus blur', function(){ 
		$(this).closest('.form-group').toggleClass('focus');
    });
	$('input, select, textarea').on('blur', function(event) {
		let inputValue = this.value;
		if (inputValue) {     
		  $(this).closest('.form-group').addClass('has-value'); 	
		} else {    
		  $(this).closest('.form-group').removeClass('has-value')	
		}
	});
	$("input, select, textarea").change(function(){
		$(this).closest('.form-group').addClass('has-value'); 	
	});
	$('input, select, textarea').each(function(){
		if ($(this).val()){
		  $(this).closest('.form-group').addClass("has-value");
		}
	});

// Slider Carousel
	$('.slider-carousel').slick({ 		
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		swipe: true,		
		pauseOnHover: false,
		touchMove: true,
		draggable: true,
		autoplay: true,
		pauseOnHover: false,
		fade: true,
		speed: 500,
		autoplaySpeed: 4000,
		prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	});

// Course Category Carousel
	$('.course-category-carousel').slick({ 
		dots:false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1, 
		autoplay: false,
		autoplaySpeed: 3000, 
		pauseOnHover:false,
		arrows: true,
		prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 2,
			}
		},
		{
			breakpoint: 575,
			settings: {
			slidesToShow: 1,   
			}
		} 
		]
	});	 

// Course Carousel
	$('.course-carousel').slick({ 
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1, 
	autoplay: true,
	autoplaySpeed: 3000, 
	pauseOnHover:false,
	arrows: true,
	prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
	nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	responsive: [
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 3,
		}
		},
		{
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,   
		}
		} 
	]
	});	

	// Upcoming Batch Carousel
	$('.upcoming-batch-carousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1, 
		autoplay: true,
		autoplaySpeed: 5000, 
		pauseOnHover:false,
		centerMode: true,
  		centerPadding: '0',
		arrows: false,
		prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
			},
			{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,   
			}
			} 
		]
	});		

// Testimonial Carousel
	$('.testimonial-carousel').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1, 
		autoplay: true,
		autoplaySpeed: 5000, 
		pauseOnHover:false,
		centerMode: true,
  		centerPadding: '0',
		arrows: true,
		prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
			},
			{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,   
			}
			} 
		]
	});	


	// Partner Carousel
	$('.partner-carousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1, 
		autoplay: true,
		autoplaySpeed: 5000, 
		pauseOnHover:false,
		centerMode: true,
  		centerPadding: '0',
		arrows: false,
		prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
			},
			{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,   
			}
			} 
		]
	});	

	// Instructor Carousel
	$('.instructor-carousel').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1, 
		autoplay: true,
		autoplaySpeed: 5000, 
		pauseOnHover:false,
		centerMode: true,
  		centerPadding: '0',
		arrows: true,
		prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
			},
			{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,   
			}
			} 
		]
	});	

	
	// Load popup
	// 	window.onload = () => {
	// 		$('#webinarModal').modal('show');
	// 	}	

	//counter script starts here
	$(document).ready(function(){
		$('.counter-value').each(function(){
		$(this).prop('Counter',0).animate({
				Counter: $(this).text()
		},{
			duration: 3500,
			easing: 'swing',
			step: function (now){
				$(this).text(Math.ceil(now));
			}
		});
		});
	});

	// pop-up-box
	$(document).ready(function () {   
		$(".filter-button").click(function () {
			var value = $(this).attr('data-filter');   
			if (value == "all") {        
			$('.filter').show('1000');
			} else {         
			$(".filter").not('.' + value).hide('3000');
			$('.filter').filter('.' + value).show('3000');   
			}
		});   
	});

	$("#seacrhCourse").select2({
		placeholder: "Search Course",
		allowClear: true
	});

	// bind change event to select
	$('#seacrhCourse').on('change', function () {          
		var url = $(this).val(); // get selected value
		if (url) { // require a URL                 
		window.location.href = ''+url+'';
		}
		return false;
	});
	
   
})( jQuery );

// Country filed on tel input
// const phoneInputField = document.querySelector(".phonenumber");
// const phoneInput = window.intlTelInput(phoneInputField, {
// 	initialCountry: "in", // Set default to India
// 	utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });
