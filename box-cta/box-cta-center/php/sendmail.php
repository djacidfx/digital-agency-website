<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Contact Form Submition Message</title>
	<!--Font Open Sans font-->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,400italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="../style.css" />
</head>
<body>

<div class="form_sub_message">

<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "yourmail@mail.com";
 
    $email_subject = "Your email subject line";
 
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['message']; // required
 

    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";

    $email_message .= "Message: ".clean_string($comments)."\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $name, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->
 
 <center>
 <div class="thankyou">
	<p>Thank you for contacting us. We will be in touch with you very soon.</p>
	<p>Please Back To Home Page <a href="../index.html">Click Here !</a></p>
	</div>
 </center>
 
<?php
 
}
 
?>
</div>
</body>
</html>