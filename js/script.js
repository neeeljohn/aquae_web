$(function(){

	$("#username_error_message").hide();
	$("#email_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();
	$("#contact_error_message").hide();

	var error_username = false;
	var error_email = false;
	var error_password = false;
	var error_retype_password = false;
	var error_contact = false;

	$("#form_username").focusout(function(){

		alert("test");
	});

	// $("#form_email").focusout(function(){

	// 	check_email();
	// });

	// $("#form_password").focusout(function(){

	// 	check_password();
	// });

	// $("#form_retype_password").focusout(function(){

	// 	check_retype_password();
	// });

	// $("#form_contact").focusout(function(){

	// 	check_contact();
	// });

	// function check_username(){

	// 	var username_length = $("#form_username").val().length;

	// 	if(username_length < 5 || username_length > 20){
	// 		$("#username_error_message").html("Should be between 10-20 characters");
	// 		$("#username_error_message").show();
	// 		error_username = true;
	// 	}
	// 	else{
	// 		$("#username_error_message").hide();
	// 	}
	// }

});