$(document).ready(function(){
	$('#cancel').click(function(){
		$('.contact').fadeOut();
	});
	$('#call').click(function(){
		$('.contact').fadeIn();
	});
	$('#call2').click(function(){
		$('.contact').fadeIn();
	});
	$('#call3').click(function(){
		$('.contact').fadeIn();
	});
	$('#call4').click(function(){
		$('.contact').fadeIn();
	});
	$('#log').click(function(){
		$('.forms').fadeIn();
		$('.form2').fadeOut();
	});
	$('#close_remove').click(function(){
		$('#createaccount').fadeOut(1000);
	});
	$('#CREATE-ACCOUNT').click(function(){
		$('#createaccount').fadeIn(1000);
	});
	$('#crete').click(function(){
		$('.forms').fadeOut();
		$('#classform').fadeIn();
		//close_remove
	});
	//first uploader
	$('.closed').click(function(){
		$('#uploader').hide();
	});
	//uploaded close
	$('.mess').click(function(){
		$('#uploader').show();
		$('#massage').show();
		$('#upload').hide();
	});
	//second uploader
	$('.upload').click(function(){
		$('#uploaded').show();
		$('#upload').show();
		$('#uploder').hide();
	});
	$('.closed').click(function(){
		$('#uploaded').hide();
	});
	//massages box
	$('.NewChart').click(function(){
		$('#newchat').show();
		$('#massage').hide();
		$('#spam').hide();
		$('#inbox').hide();
	});
	$('.NewMassage').click(function(){
		$('#massage').show();
		$('#newchat').hide();
		$('#spam').hide();
		$('#inbox').hide();
	});
	$('#script').click(function(){
		$('#infomation').toggle(1000);
	});
});
//
$(document).ready(function(){
	$('#minus').click(function(){
		$('#formgr').animate({top:-700},2000);
	});
	$('#edt').click(function(){
		$('#formgr').slideDown(1000);
	});
	$('#ins').mouseenter(function(){
		$('#alert').fadeOut(1000);
	});
});
