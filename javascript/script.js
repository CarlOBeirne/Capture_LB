function loadPrompt() {
	if (confirm("Would you like to be first to see Liams pictures?") == true) { 
	}
	else {
		return false
	}
	var x;
	var email=prompt ("Please submit your email address", "");
	window.open("mailto:carl.obeirne@gmail.com");
	if 	 (email!=null) {
		alert("Thank you for signing up!")
	}
	else {
		return false
	}
}
function submitAlert() {
	alert ("You will now be redirected to your default mail client.")
}
function myWelcome() {
	alert("Welcome to CaptureLB.")
}
