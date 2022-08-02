<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Blog - MISLA</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../html/css/bootstrap.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="../../html/css/font-awesome.min.css">
    <!-- Simple Line Font -->
    <link rel="stylesheet" href="../../html/css/simple-line-icons.css">
    <!-- Owl Carousel -->
    <link rel="stylesheet" href="../../html/css/owl.carousel.min.css">
    <!-- Main CSS -->
    <link href="../../html/css/style.css" rel="stylesheet">
</head>

<body>
<!-- ========================= ABOUT IMAGE =========================-->
<div class="about_bg" style="background:url(../../html/images/blog.jpg) center/cover no-repeat">
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <a href="../index.html"><img src="../../html/images/responsive-logo.png" class="responsive-logo img-fluid" alt="responsive-logo"></a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-toggleable-md navbar-light bg-faded p-0">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                        <span class="icon-menu"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="https://misla.org/">Home<span class="sr-only">(current)</span></a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../../html/chairman-speech.html">About</a></li>
                                    <li><a class="dropdown-item" href="../../index.html#team">Team</a></li>
                                    <li><a class="dropdown-item" href="../../html/blog.html">Blog</a></li>
                                    <li><a class="dropdown-item" href="../../index.html#contact">Contact Us</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../../html/webdesign.html">Our Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" target="_blank" href="https://marty.world/services.html">Hire Us</a>
                            </li>
                            <li class="nav-logo">
                                <a href="https://misla.org/" class="navbar-brand"><img src="../../html/images/logo.png" class="img-fluid" alt="logo"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSdnmw8vCrIUdqk2KWa3GaDEUxgyY36dDdEVSRcYh20r0Jk2BQ/viewform?c=0&w=1" target = "_blank">Scholarships</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Classes
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../../html/course-detail.html">Oct 1 - Nov 15</a></li>
                                    <li><a class="dropdown-item" href="../../html/course-detail nov.html">November 26 - Dec 20</a></li>
                                    <li><a class="dropdown-item" href="../../html/course-detail jan.html">Jan 7-31</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../../index.html#donate">Donate</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>ThankYou</h1>
            </div>
        </div>
    </div>
</div>



<?php
/*--------------------------------------------*/
/* Email Submited Form           */
/*--------------------------------------------*/
$post = (!empty($_POST)) ? true : false;
if($post){
    $to = "cassiebetts@gmail.com";
	$email = stripslashes($_POST['email1']);
	$subject = "MISLA Subscribe Form";

	$mail = mail($to, $subject,
         "Email: ".$email."\r\n"
         ."This Email has sent From https://misla.org/ Contact Form");
	if($mail){
		echo '<p class="mess">Thanks for submitting your email!</p>';
	}

}
?>
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="subscribe">
                    <h3>Newsletter</h3>
                    <form name="NewsLetter" method="POST" data-netlify="true">
                        <input class="signup_form" type="text" name="email" id="email" placeholder="Enter Your Email Address" required>
                        <button type="submit" name="submit" class="btn btn-warning">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="foot-logo">
                    <a href="https://vsedc.org/" target="_blank">
                        <img src="../../html/images/footer-logo.png" class="img-fluid" alt="footer_logo">
                    </a>

                </div>
            </div>
            <div class="col-md-2">
            </div>
            <div class="col-md-4">
            </div>
            <div class="col-md-3">
                <div class="address">
                    <h3>Contact us</h3>
                    <p>MISLA- A PROJECT OF VSEDC </p>
                    <p>Email : info@misla.org
                        <br> Phone : 323-753-2335</p>
                    <ul class="footer-social-icons">
                        <li><a href="https://www.facebook.com/MadeinSLA" target="_blank"><i class="fa fa-facebook fa-fb" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/therealmisla" target="_blank"><i class="fa fa-instagram fa-in" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/therealmisla" target="_blank"><i class="fa fa-twitter fa-tw" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UC1tt-fn3rdTXJN2LkGgCtrw" target="_blank"><i class="fa fa-youtube fa-in" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="text-center">Copyright ©2020 - All Rights Reserved. Made by
            <a href="https://misla.org/">MISLA</a></p>
    </div>
</footer>



<!--//END FOOTER -->
<!-- jQuery, Bootstrap JS. -->
<script src="../../html/js/jquery.min.js"></script>
<script src="../../html/js/tether.min.js"></script>
<script src="../../html/js/bootstrap.min.js"></script>
<!-- Plugins -->
<script src="../../html/js/instafeed.min.js"></script>
<script src="../../html/js/owl.carousel.min.js"></script>
<script src="../../html/js/validate.js"></script>
<script src="../../html/js/tweetie.min.js"></script>
<!-- Subscribe -->
<script src="../../html/js/subscribe.js"></script>
<!-- Script JS -->
<script src="../../html/js/script.js"></script>
</body>

</html>
    <style type="text/css">
        .mess {
            text-align: center;
            font-size: 30px;
            margin-top: 50px!important;
            background: #f37425;
            padding: 20px;
            width: 500px;
            margin: 0 auto;
            color: #fff;
	    display:block
        }
    </style>

