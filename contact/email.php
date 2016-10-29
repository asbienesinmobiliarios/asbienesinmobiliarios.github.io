<?php
// Here we get all the information from the fields sent over by the form.
$name = $_POST['name'];
$email = $_POST['email'];
$subject = "Dangdosan";
$message = $_POST['message'];
 
$to = 'nce18cex@gmail.com';
$message = 'Name : '.$name.'
Email : '.$email.'

Message : '.$message;
$headers = "From: ".$name." <".$email.">\r\n"
."Reply-To: ".$email."\r\n";

if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
	$mail = mail($to, $subject, $message, $headers);
	if($mail){
		echo "
			<div class='alert alert-success'>
				<button type='button' class='close' data-dismiss='alert'>&times;</button>
				<strong>Congratulation</strong> Your message has been sent. Thank you!<br />
			</div>	
		";
	}else{
		echo "
			<div id='failed' class='alert alert-danger'>
				<button type='button' class='close' data-dismiss='alert'>&times;</button>
				Sorry your message <strong>failed</strong> to send. check the connection!<br />
			</div>	
		"; // success message
	}
}else{
	echo "
		<div class='alert alert-warning'>
			<button type='button' class='close' data-dismiss='alert'>&times;</button>
			Invalid <strong>Email</strong>, please provide an correct email!<br />
		</div>
	";
}
?>