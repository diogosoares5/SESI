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
		jQuery('#gallery a').lightBox();
	});
	jQuery("#link-filmes").click(function(){
		jQuery("li").removeClass("ativo");
		jQuery(this).addClass("ativo");
		jQuery(".item").hide();
		jQuery("#aba-filmes").fadeIn();
		jQuery("ul.demo2").ytplaylist({addThumbs:true, autoPlay: false, holderId: 'ytvideo2'});		
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

function lightbox(){		
		var altura = jQuery(window).height();
		var largura = jQuery(window).width();
		jQuery('body').css('overflow','hidden');
		jQuery('#mask-modal').height(altura+'px');
		jQuery('#mask-modal').fadeIn(300);
		jQuery('#mask-modal #fechar').click(function(){
		jQuery('#mask-modal').fadeOut(300);
		jQuery('body').css('overflow','scroll');
		
		});
		/*alert("teste");*/
			
	}
