/**
* Template Name: Regna - v2.1.0
* Template URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  var delayInMilliseconds = 1000; //1 second

  setTimeout(function() {
    history.pushState("", document.title, window.location.pathname);
  }, delayInMilliseconds);

  // remove '#[name]' from URL
  //history.pushState("", document.title, window.location.pathname);

  // YouTube video
  var channelID = "UCU0mqPtBF4Z8TyZ3Pc6FPbQ";
  var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
  $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
     var link = data.items[0].link;
     var id = link.substr(link.indexOf("=")+1);
  $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=1&showinfo=0&rel=0");
  });

  // Load More button
   var clickNo = 0;

  $( document ).ready(function () {
    //$(".moreBox").slice(0, 3).show();
    if ($(".blogBox:hidden").length != 0) {
            $("#loadMore").show();
    }
    $("#loadMore").on('click', function (e) {
            e.preventDefault();
            clickNo++;

            switch (clickNo)
            {
              case 1:
                $(".moreBox:hidden").slice(0, 6).slideDown();
                break;
              case 2:
                $(".moreBox2:hidden").slice(0, 6).slideDown();
                break;
            }

            if ($(".moreBox:hidden").length == 0 && clickNo == 2) {
                    $("#loadMore").fadeOut('slow');
            }
    });

    // Contact Form
    $('.submit').click(function(event){
      console.log('Button clicked');

      var name = $('.name').val();
      var email = $('.email').val();
      var subject = $('.subject').val();
      var message = $('.message').val();
      var status_element = $('.status');
      status_element.empty();

      if (name.length >= 4 && email.includes('@') && email.includes('.') && email.length >= 5 && subject.length >= 8)
      {
        status_element.append('<div class="alert alert-success" role="alert">Your message has been sent. Thank you!</div>');
      }
    });
  });

  // Typed-Text
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["C++", "OpenGL", "DirectX"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
    	setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
  	if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  });

  // Typed-Text-Loading
  const typedTextSpanLoading = document.querySelector(".typed-text-loading");
  const cursorSpanLoading = document.querySelector(".cursor-loading");

  const textArrayLoading = ["....."];
  const typingDelayLoading = 200;
  const erasingDelayLoading = 100;
  const newTextDelayLoading = 2000; // Delay between current and next text
  let textArrayIndexLoading = 0;
  let charIndexLoading = 0;

  function typeloading() {
    if (charIndexLoading < textArrayLoading[textArrayIndexLoading].length) {
      if(!cursorSpanLoading.classList.contains("typing")) cursorSpanLoading.classList.add("typing");
      typedTextSpanLoading.textContent += textArrayLoading[textArrayIndexLoading].charAt(charIndexLoading);
      charIndexLoading++;
      setTimeout(typeloading, typingDelayLoading);
    }
    else {
      cursorSpanLoading.classList.remove("typing");
    	setTimeout(eraseloading, newTextDelayLoading);
    }
  }

  function eraseloading() {
  	if (charIndexLoading > 0) {
      if(!cursorSpanLoading.classList.contains("typing")) cursorSpanLoading.classList.add("typing");
      typedTextSpanLoading.textContent = textArrayLoading[textArrayIndexLoading].substring(0, charIndexLoading-1);
      charIndexLoading--;
      setTimeout(eraseloading, erasingDelayLoading);
    }
    else {
      cursorSpanLoading.classList.remove("typing");
      textArrayIndexLoading++;
      if(textArrayIndexLoading>=textArrayLoading.length) textArrayIndexLoading=0;
      setTimeout(typeloading, typingDelayLoading + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArrayLoading.length) setTimeout(typeloading, newTextDelayLoading + 250);
  });

  // Header fixed and Back to top button
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 100) {
  //     $('.back-to-top').fadeIn('slow');
  //     $('#header').addClass('header-fixed');
  //   } else {
  //     $('.back-to-top').fadeOut('slow');
  //     $('#header').removeClass('header-fixed');
  //   }
  // });

  // $('.back-to-top').click(function() {
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 1500, 'easeInOutExpo');
  //   return false;
  // });
  //By Sebitas:
    $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }
  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 21;
  $(document).on('click', '.nav-menu a, #mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('menu-active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active');
      }
      if (cur_pos < 300) {
        if ($(".nav-menu li:first.contains(.not-active)")) {
        }
        else {
          $(".nav-menu li:first").addClass('menu-active');
        }
      }
    });
  });

  // Portfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-filters li').on('click', function() {
      $("#portfolio-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

  // Initiate venobox (lightbox feature used in portfolio)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

})(jQuery);
