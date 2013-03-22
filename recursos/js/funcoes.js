jQuery.noConflict();

jQuery(document).ready(function(){
	
	jQuery(".item").hide();
	jQuery("li").removeClass("ativo");
	jQuery("#link-home").addClass("ativo");
	jQuery("#aba-home").fadeIn();
	
	jQuery("#link-home").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-home").fadeIn();
	});
	jQuery("#link-programa").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-programa").fadeIn();
		jQuery('#scrollbar1').tinyscrollbar();
	});
	jQuery("#link-historia").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-historia").fadeIn();
		jQuery('#scrollbar2').tinyscrollbar();
	});
	jQuery("#link-comunidades").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-comunidades").fadeIn();
	});
	jQuery("#link-contato").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-contato").fadeIn();
	});
		
});