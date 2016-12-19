function validateForm(){
	var x = document.forms["form"]["firstname"].value;
	if(x==null || x==""){
		alert("Name must be filled out");
		return false;
	}
	if(document.form.lastname.value == ""){
		alert("Last Name must be filled out");
		document.form.lastname.focus();
		return false;
	}
	if(document.form.email.value == ""){
	alert("Valid email must be filled out");
	document.form.email.focus();
	return false;
	}
	
	
}
