<?php
if (isset($_POST['submit']))
{

    require 'PHPMailer/PHPMailerAutoload.php';
    $mail = new PHPMailer;
    // $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'muhammadb083@gmail.com';
    $mail->Password = 'dxlqdynadsshjtlu';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->setFrom('noreply@unitedhands.com', 'United Hands Contact Form');
    $mail->addAddress('marthaebarajas02@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = 'Contact Form';
    $mail->Body =
        '<b>Name:</b> ' . $_POST['name'] . '<br>' .
        '<b>Email:</b> ' . $_POST['email'] . '<br>' .
        '<b>Phone Number:</b> ' . $_POST['phone'] .'<br>' .
        '<b>Message:</b> ' . $_POST['comments'] .'<br>' .
        '<br>This Email Send From http://unitedhands4forall.com/';

    if(!$mail->send()) {
        $result='<p style="color: #ff0000">Message could not be sent.</p>';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        $result='<p style="color: #28a745">Message has been send.</p>';
    }
}
?>

<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>United Hands Multipurpose Center - Compton</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="" />
    <meta name="keywords" content="" />

    <!-- Styles -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/icons.css">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <link href="css/responsive.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="css/colors/color.css" title="color1" />
</head>

<body itemscope>
<div class="theme-layout">
    <header class="stick">
        <div class="topbar dark">
            <div class="container">
                <ul class="inline-list">
                    <li><i class="fa fa-envelope"></i><a href="mailto:MarthaEBarajas02@gmail.com">MarthaEBarajas02@gmail.com</a></li>
                    <li><i class="fa fa-phone"></i><a href="tel:(562) 656-9011">(562) 656-9011</a></li>
                </ul><!-- Address -->
            </div>
        </div><!-- Top Bar -->
        <div class="menu">
            <div class="container">
                <div class="logo"><a itemprop="url" href="index.html" title=""><img itemprop="image" src="images/logo.png" alt="" /></a></div>
                <nav>
                    <a itemprop="url" class="theme-btn call-popup" href="contact.php" title="">DONATE NOW</a>
                    <ul>
                        <li class=""><a itemprop="url" href="index.html" title="">Home</a></li>
                        <li class=""><a itemprop="url" href="about.html" title="">About Us</a></li>
                        <li class="active"><a itemprop="url" href="contact.php" title="">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div><!-- Menu -->
    </header><!-- Header -->
    <div id="responsive-header">
        <div class="topbar">
            <ul class="inline-list">
                <li><i class="fa fa-envelope"></i><a href="mailto:MarthaEBarajas02@gmail.com">MarthaEBarajas02@gmail.com</a></li>
                <li><i class="fa fa-phone"></i><a href="tel:(562) 656-9011">(562) 656-9011</a></li>
            </ul><!-- Address -->
        </div>
        <div id="responsive-menu">
            <span class="show-topbar"><i class="fa fa-angle-double-down"></i></span>
            <div class="logo"><a itemprop="url" href="index.html" title=""><img itemprop="image" src="images/logo.png" width="100" alt="" /></a></div>
            <span class="open-menu"><i class="fa fa-align-justify"></i></span>
            <div class="menu-links">
                <ul>
                    <li><a itemprop="url" href="index.html" title="">Home</a></li>
                    <li class="active"><a itemprop="url" href="about.html" title="">About Us</a></li>
                    <li class="active"><a itemprop="url" href="contact.php" title="">Contact Us</a></li>
                </ul>
            </div>
        </div><!-- Responsive Menu -->
    </div><!-- Responsive Header -->

    <div class="page-top">
        <div class="container">
            <div class="page-title">
                <div data-velocity="-.2" style="background: url(images/resource/parallax6.jpg) repeat scroll 50% 422.28px transparent;" class="parallax scrolly-invisible"></div><!-- PARALLAX BACKGROUND IMAGE -->
                <h2>Contact <strong>Us</strong></h2>
                <ul>
                    <li><a itemprop="url" href="index.html" title="">Home</a></li>
                    <li>Contact</li>
                </ul>
            </div><!-- Page Title -->
        </div>
    </div><!-- Page Top -->

    <section>
        <div class="block extra-gap no-padding">
            <div class="">
                <div class="row">
                    <div class="col-md-12 column">
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.3341274302443!2d-118.23959738541133!3d33.90679913282933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cba70d41841b%3A0x33d62c005ff34389!2s719%20W%20138th%20St%2C%20Compton%2C%20CA%2090222%2C%20USA!5e0!3m2!1sen!2s!4v1587711968113!5m2!1sen!2s" width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div><!-- Google Map -->
                    </div>
                </div>
            </div>
        </div>
    </section><!-- Google Map Section -->



    <section>
        <div class="block gray">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 column">
                        <div class="contact-box overlap">
                            <div class="title">
                                <h2>CONTACT <span>Us</span></h2>
                                <span>Committed To Providing The Best</span>
                            </div>
                            <div class="countries-contact">
                                <div class="tab-content" id="myTabContent">
                                    <div id="country1" class="tab-pane fade active in">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="contact-info">
                                                    <p>The United Hands Multi-Purpose Center non-profit was established to inspire hope and assure that the basic needs are met for low-income families in the City of Compton and surrounding areas.

                                                    </p>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <strong><i class="fa fa-home"></i>ADDRESS</strong>
                                                            <span>719 W. 138th Street Compton, CA 90222</span>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <strong><i class="fa fa-envelope"></i>EMAIL ID</strong>
                                                            <span>
                                                            <a href="mailto:MarthaEBarajas02@gmail.com" class="">MarthaEBarajas02@gmail.com</a></span>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <strong><i class="fa fa-phone"></i>PHONE NO</strong>
                                                            <span><a href="tel:(562) 656-9011">(562) 656-9011</a></span>
                                                        </div>

                                                    </div>
                                                </div><!-- Contact Info -->
                                            </div>
                                            <div class="col-md-6">
                                                <?php echo (isset($result)) ? $result : ''; ?>
                                                <form class="contact-form" action="" method="post">
                                                    <div class="row">
                                                        <div class="col-md-12"><label for="name"></label><input name="name" type="text" placeholder="Name" required/></div>
                                                        <div class="col-md-12"><label for="email"></label><input name="email" type="email" placeholder="Email" required/></div>
                                                        <div class="col-md-12"><label for="phone"></label><input name="phone" type="text" placeholder="Phone" required/></div>
                                                        <div class="col-md-12"><label for="comments"></label><textarea name="comments" placeholder="Message"></textarea></div>
                                                        <div class="col-md-12"><button type="submit" name="submit" class="submit">Send Message</button></div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- contact form -->

    <footer>
        <div class="parallax" style="background:url(images/resource/parallax6.jpg) repeat scroll 0 0 rgba(0, 0, 0, 0);" data-velocity="-.1"></div><!-- PARALLAX BACKGROUND IMAGE -->
        <div class="block">
            <div class="container">
                <div class="footer-widgets">
                    <div class="row">
                        <div class="col-md-4 column">
                            <div class="widget">
                                <div class="contact-widget">
                                    <h5>About <span>United Hands</span></h5>
                                    <p>The United Hands Multi-Purpose Center non-profit was established to inspire hope and assure that the basic needs are met for low-income families in the City of Compton and surrounding areas.</p>
                                    <br>
                                    <div class="social">
                                        <a itemprop="url" href="https://www.facebook.com/unitedhandsofcompton/" target="_balnk" title="Facebook"><i class="fa fa-facebook"></i></a>
                                        <a itemprop="url" href="https://www.instagram.com/compton.unitedhands/" title="Instagram" target="_balnk"><i class="fa fa-instagram"></i></a>
                                    </div>
                                </div><!-- Contact Widget -->
                            </div>
                        </div>
                        <div class="col-md-4 column">

                        </div>
                        <div class="col-md-4 column">
                            <div class="widget">
                                <div class="contact-widget">
                                    <h5>Contact <span>Info</span></h5>
                                    <ul>
                                        <li><i class="fa fa-map-marker"></i>719 W. 138th Street Compton, CA 90222</li>
                                        <li><i class="fa fa-phone"></i><a href="tel:(562) 656-9011">(562) 656-9011</a></li>
                                        <li><i class="fa fa-envelope"></i><a href="mailto:MarthaEBarajas02@gmail.com" class="__cf_email__">MarthaEBarajas02@gmail.com</a></li>
                                    </ul>
                                </div><!-- Contact Widget -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-bar text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 column">
                        <p>© 2020 United Hands - All Rights Reserved - Made By <a href="http://misla.org/">misla.org</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>




</div><!-- Theme Layout -->



<!-- SCRIPTS-->
<script src="js/jquery-2.1.4.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.poptrox.min.js" type="text/javascript"></script>
<script src="js/jquery.scrolly.js"></script>
<script src="js/enscroll-0.5.2.min.js"></script>
<script src="js/jquery.knob.js"></script>
<script src="js/select2.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>