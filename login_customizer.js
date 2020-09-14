$(document).ready(function(){
	if($('#rcmloginuser').length > 0){
		$('#rcmloginuser').attr('placeholder', 'Username/Email Address');
		$('#rcmloginpwd').parent().append('<span class="input-group-append toggle-password"><i class="input-group-text icon eye"></i></span>');
		$('.toggle-password').click(function(){
		    $(this).children().toggleClass('eye eye-slash');
		    let input = $(this).prev();
		    input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
		});
	}
});