$(function(){
	
	
	$('.topbtn').click(function(){
		
		
		$('html,body').animate({
			
			
			scrollTop:0
			
			
		},2000);
		
		
	});
	
	
	
	$(window).scroll(function(){
		
		var $scroll=$(this).scrollTop();
		
		
		if($scroll >= 500){
			
			$('.topbtn').fadeIn();
			
		}
		
		else{
			
			$('.topbtn').fadeOut();
			
		}
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
});