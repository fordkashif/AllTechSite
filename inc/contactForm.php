<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	

	$email_from = 'kashif@hotmail.com';
	$email_subject = 'new form submission';
	$email_body = "User Name:". $name."\n".
					"User Email". $email."\n".
					"User Message:". $message."\n";

	$to = "kashif.ford@gmail.com";

	$headers = "From: ".$email_from. "\r\n";
	$headers .= "Reply to: ". $email . "\r\n";

	mail($to, $email_subject, $email_body, $headers);

	header("Location: contact.html");
 ?>