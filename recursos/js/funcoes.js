		jQuery.noConflict();
		jQuery(document).ready(function(){
		jQuery(".item").hide();
		jQuery("li").removeClass("ativo");
		jQuery("#B1").addClass("ativo");
		jQuery("#aba-b1").fadeIn();
		jQuery("#link-b1").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-b1").fadeIn();
		});
		jQuery("#link-b2").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-b2").fadeIn();
		});
		jQuery("#link-b3").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-b3").fadeIn();
		});
		jQuery("#link-b4").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-b4").fadeIn();
		});		
		});


		jQuery(document).ready(function(){
		  jQuery("#hide").click(function(){
		    jQuery(".list2").toggle(500);
		  });
		});


	jQuery(document).ready(function() {
	    jQuery('#mycarousel').jcarousel({
			wrap: 'circular'
	    });
	});

	jQuery(document).ready(function(){	
	jQuery('#click').click(function() {
	  jQuery('#TPart').slideDown('slow', function() {
	    jQuery('#click').hide()
	  });
	})
	})