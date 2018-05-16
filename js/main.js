(function($) {
	"use strict"
	
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	// Fixed Nav
	var topHeader = $('#top-navbar');
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();
		wScroll > topHeader.height() ? $('#main-navbar').addClass('fixed-navbar') : $('#main-navbar').removeClass('fixed-navbar');
	});

	// Home Area Height
	function homeHeight () {
		$('#home').css({'height': $(window).height() - $('#header').height()});
	}
	$(window).on('resize', function() {
		homeHeight();
	});
	homeHeight();
	
	// Mobile Search button toggle
	$('.search-toggle-btn').on('click',function(){
		$('.navbar-search').toggleClass('navbar-search-collapsed');
	});

	 // Mobile Nav button toggle
	$('.navbar-toggle-btn').on('click',function(e){
		$(this).toggleClass('toggle-btn-collapsed')
		$('.main-navbar').toggleClass('main-navbar-collapsed');
	});
	
	// Mobile dropdown
	$('.main-navbar .has-dropdown a').on('click',function() {
		$(this).parent().toggleClass('dropdown-collapsed');
	});

	
	// Portfolio slider
	$('#portfolio-slider').owlCarousel({
		loop:true,
		margin:0,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : false,
		responsive:{
			0: {
				items:1
			},
			480: {
				items:2,
			},
			992:{
				items:4
			}
		}
	});


	/*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'https://alltechbizjm.us14.list-manage.com/subscribe/post?u=6eb48718188c6c380137e10e9&amp;id=33c5019648'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	}


	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	$('#contact-form').validate({

		/* submit via ajax */
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');

			$.ajax({      	

		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() { 

		      	sLoader.fadeIn(); 

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut(); 
	               $('#message-warning').hide();
	               $('#contact-form').fadeOut();
	               $('#message-success').fadeIn();   
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut(); 
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut(); 
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });     		
  		}

	});

	
	// Testimonial slider
	$('#testimonial-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
	});
	
	// Partners slider
	$('#partners-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : true,
		responsive:{
			0:{
				items:2
			},
			480:{
				items:4
			},
			992:{
				items:6
			}
		}
	});
	
	
	// magnificPopup
	$('.portfolio').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});
	
	
	// keep accordion open
	$('.accordion .panel-heading a').on('click',function(e){
		if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
			e.stopPropagation();
		}
		e.preventDefault()
	});


})(jQuery);