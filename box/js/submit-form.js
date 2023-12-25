$(document).ready(function() {
	 $('#contactform').validate({
	 	// Set up rules for each field in your form. Reference each one by its "name" not "id"
		rules: {
	    	name: { required: true },
	    	email: { required: true, email: true },
	    	subject: { required: true },
	    	message: { required: true }
		},
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            subject: "Please enter your subject",
            message: "Please enter your message",

        }             
	});
});

