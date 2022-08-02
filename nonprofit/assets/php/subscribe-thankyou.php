<?php
/*--------------------------------------------*/
/* Email Submited Form           */
/*--------------------------------------------*/
$post = (!empty($_POST)) ? true : false;
if($post){
    $to = "muhammadb083@gmail.com";
	$email = stripslashes($_POST['email']);
 	$subject = "Subscribe";
    $headers = "From MISLA";
	$mail = mail($to, $subject, $headers,
         "Name: ".$name."\r\n"
         ."Email: ".$email."\r\n"
         ."subject: ".$subject."\r\n"
         ."Message: ".$message."\r\n");
	if($mail){
		echo '<p>Thanks for submitting your email! Someone will contact you shortly.</p>';
	}

}
?>
    <style type="text/css">
        p {
            text-align: center;
            font-size: 30px;
            background: #3ac4fa;
            margin-top: 30px;
            padding: 20px;
            width: 500px;
            margin: 0 auto;
            color: #fff;
	    display:block
        }
    </style>
