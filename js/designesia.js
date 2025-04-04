jQuery(document).ready(function() {
	// --------------------------------------------------
	// paralax background
	// --------------------------------------------------
	$window = jQuery(window);
   	jQuery('section[data-type="background"]').each(function(){
    var $bgobj = jQuery(this); // assigning the object
                    
    jQuery(window).scroll(function() {
	var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
	var coords = '50% '+ yPos + 'px';
	$bgobj.css({ backgroundPosition: coords });
		
	});
 	});
	document.createElement("article");
	document.createElement("section");
	
	
	// --------------------------------------------------
	// sticky header
	// --------------------------------------------------
	
        var $header = jQuery("header"),
            $clone = $header.before($header.clone().addClass("clone"));
        
        jQuery(window).on("scroll", function() {
            var fromTop = jQuery(window).scrollTop();
            jQuery("body").toggleClass("down", (fromTop > jQuery(window).height()-150));
        });
	
	
	
	window.onresize = function(event) {
		jQuery('#gallery').isotope('reLayout');
		
		
		
		var mq = window.matchMedia( "(min-width: 993px)" );
		var mx = window.matchMedia( "(max-width: 992px)" );
		
		if (mq.matches) {
			jQuery("#mainmenu").show();
		}		
		
		
		if (mx.matches) {
			if(mb==1){
				jQuery('#mainmenu').show();
				}else if(mb==0){
				jQuery('#mainmenu').hide();	
			}
		}
	};	

	
	// jarallax
	$(".jarallax").jarallax();	

	
	// --------------------------------------------------
	// scroll to top
	// --------------------------------------------------
	jQuery().UItoTop({ easingType: 'easeOutQuart' });
	
	
	// --------------------------------------------------
	// gallery hover
	// --------------------------------------------------
	jQuery('.overlay').fadeTo(1, 0);
	jQuery(".item .picframe").hover(
	function() {
	 jQuery(this).parent().find(".overlay").width(jQuery(this).find("img").css("width"));
	 jQuery(this).parent().find(".overlay").height(jQuery(this).find("img").css("height"));
	 jQuery(this).parent().find(".overlay").fadeTo(150, .8);
	 picheight = jQuery(this).find("img").css("height");
	 newheight = (picheight.substring(0, picheight.length - 2)/2)-48;
	 //alert(newheight);
	 jQuery(this).parent().find(".info-area").animate({'margin-top': newheight},'fast');

	},
    function() {
	 jQuery(this).parent().find(".info-area").animate({'margin-top': '10%'},'fast');
	 jQuery(this).parent().find(".overlay").fadeTo(150, 0);
  	})
	
	
	// team hover
	jQuery(".team .picframe").hover(
	function() {
	 jQuery(this).parent().find(".overlay").width(jQuery(this).find("img.team-pic").css("width"));
	 jQuery(this).parent().find(".overlay").height(jQuery(this).find("img.team-pic").css("height"));
	 jQuery(this).parent().find(".overlay").fadeTo(150, 1);
	 picheight = jQuery(this).find("img.team-pic").css("height");
	 newheight = (picheight.substring(0, picheight.length - 2)/2)-24;
	 //alert(newheight);
	 jQuery(this).parent().find(".sb-icons").animate({'margin-top': newheight},'fast');

	},
    function() {
	 jQuery(this).parent().find(".sb-icons").animate({'margin-top': '10%'},'fast');
	 jQuery(this).parent().find(".overlay").fadeTo(150, 0);
  	})
	
	
	
	jQuery(window).load(function() {
		$(".loader").fadeOut("slow");
	// --------------------------------------------------
	// filtering gallery
	// --------------------------------------------------
	var $container = jQuery('#gallery');
		$container.isotope({
			itemSelector: '.item',
			filter: '*',
	});
	jQuery('#filters a').click(function(){
		var $this = jQuery(this);
		if ( $this.hasClass('selected') ) {
			return false;
			}
		var $optionSet = $this.parents();
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
				
		var selector = jQuery(this).attr('data-filter');
		$container.isotope({ 
		filter: selector,
	});
	return false;
	});
		
	
	// --------------------------------------------------
	// revolution slider
	// --------------------------------------------------
	var revapi;

  	revapi = jQuery('#revolution-slider').revolution({
	delay:15000,
	startwidth:1170,
	startheight:500,
	hideThumbs:10,
	fullWidth:"off",
	fullScreen:"on",
	fullScreenOffsetContainer: "",
	touchenabled:"on",
	navigationType:"none",
	dottedOverlay:"twoxtwo"
	});

					
	// --------------------------------------------------
	// flexslider
	// --------------------------------------------------
	  jQuery('.blog-slider.flexslider').flexslider({
		animation: "slide",
		controlNav: false,
		
	  });
	
	  jQuery('.project-carousel.flexslider').flexslider({
		animation: "slide",
		animationLoop: true,
		slideshow: false,
		itemWidth: 180,
		itemMargin: 0,
		minItems: 2,
		maxItems: 4
	  });
	  
	  jQuery('.testi-slider.flexslider').flexslider({
		animation: "fade"
	  });
	  
	  jQuery('.project-carousel-3-col.flexslider').flexslider({
		animation: "slide",
		animationLoop: true,
		slideshow: false,
		itemWidth: 180,
		itemMargin: 0,
		minItems: 1,
		maxItems: 3
	  });
	  
	  jQuery('.logo-carousel.flexslider').flexslider({
		animation: "slide",
		animationLoop: true,
		slideshow: true,
		itemWidth: 120,
		itemMargin: 0,
		minItems: 1,
		maxItems: 6,
		controlNav: false
	  });
	  
	  
	  
	});
	

	
	jQuery('.next-slider').click(function () {
    jQuery('.flexslider.pf-carousel').flexslider("next");
	});
	
	jQuery('.prev-slider').click(function () {
    jQuery('.flexslider.pf-carousel').flexslider("prev");
	});
	
	
	

	// --------------------------------------------------
	// tabs
	// --------------------------------------------------
	jQuery('.de_tab').find('.de_tab_content div').hide();
	jQuery('.de_tab').find('.de_tab_content div:first').show();
	
	jQuery('.de_nav li').click(function() {
		jQuery(this).parent().find('li span').removeClass("active");
		jQuery(this).find('span').addClass("active");
		jQuery(this).parent().parent().find('.de_tab_content div').hide();
	
		var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
		jQuery(this).parent().parent().find('.de_tab_content div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
	});
	
	
		// ========================================
	// toggle
	// ========================================
	jQuery(".toggle-list h2").addClass("acc_active");
	jQuery(".toggle-list h2").toggle(
	function() {
	 jQuery(this).addClass("acc_noactive");
     jQuery(this).next(".ac-content").slideToggle(200);
	},
    function() {
	 jQuery(this).removeClass("acc_noactive").addClass("acc_active");
	 jQuery(this).next(".ac-content").slideToggle(200);
  	})
	
	var mb = 0;
	
	// navigation for mobile
	jQuery('#menu-btn').click(function(){
	    if (mb == 0) {
	        jQuery('#mainmenu').show();
			mb = 1;
	    } else {
	       	jQuery('#mainmenu').hide();	
			mb = 0;	
	    }
	})


// one page navigation
	
	        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
		 
        jQuery("#homepage nav a").click(function(evn){
			
			if (this.href.indexOf('#') != -1) {
            evn.preventDefault();
            jQuery('html,body').scrollTo(this.hash, this.hash); 
			}
        });
		
		jQuery('.de-gallery .item .icon-info').click(function(){
			jQuery("#loader-area .project-view").load("project-details.html", function() {
			jQuery("#loader-area").slideDown(500,function(){
			jQuery('html, body').animate({
				scrollTop: jQuery('#loader-area').offset().top - 70
			}, 500, 'easeInOutExpo');
			return false;
			});			
		}); 
		});   
		
		
		jQuery('#btn-close-x').click(function(){
			jQuery("#loader-area").slideUp(500,function(){
			jQuery('html, body').animate({				
				scrollTop: jQuery('#page-portfolio').offset().top - 70
			}, 500, 'easeInOutExpo');
			});
			
			
			return false;			
		});  
        
        
        // active menu on scroll

        var sections = $("section"),
          nav = $("#mainmenu"),
          nav_height = 75;

        $(window).on("scroll", function () {
          var cur_pos = $(this).scrollTop();

          sections.each(function () {
            var top = $(this).offset().top - nav_height,
              bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
              nav.find("a").removeClass("active");
              sections.removeClass("active");

              $(this).addClass("active");
              nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
            }
          });
        });

        nav.find("a").on("click", function () {
          var $el = $(this),
            id = $el.attr("href");

          $("html, body").animate(
            {
              scrollTop: $(id).offset().top - nav_height
            },
            500
          );

          return false;
        });

	
	// --------------------------------------------------
	// scroll navigation
	// --------------------------------------------------
	jQuery('#mainmenu a[href^="#"]').on('click', function (e) {
	    e.preventDefault();

	    var target = this.hash,
	        $target = jQuery(target);

	    jQuery('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 70 // - 200px (nav-height)
	    }, 0, 'easeOutExpo', function () {
	        window.location.hash = '1' + target;
	    });

	    jQuery('#gallery').isotope('reLayout');
	    
	    var mx = window.matchMedia( "(max-width: 992px)" );
	    
	    if (mx.matches) {
	    	jQuery('#mainmenu').hide();
	    	mb = 0;	
	    }

	});
	
	

	
});

	jQuery(window).load(function() {		
		jQuery('.animated').fadeTo(0,0);
		
		jQuery('.animated').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				jQuery(this).fadeTo(1,500);
				$anim = jQuery(this).attr('data-animation')
				jQuery(this).addClass($anim);
			}
		});
		
	});
		
	jQuery(window).scroll(function() {
		jQuery('.animated').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				jQuery(this).fadeTo(1,500);
				$anim = jQuery(this).attr('data-animation')
				jQuery(this).addClass($anim);
			}
		});
	});


