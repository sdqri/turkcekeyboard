<?php
session_start();
$name=$_POST["name"];
$email=$_POST["email"];
$blog=$_POST["blog"];
$comment=$_POST["comment"];
$captcha=$_POST["captcha"];
if($_SESSION["captcha"]==$captcha){
	$to      = 'sadeg.r1@gmail.com';
	$subject = 'turkcekeyboard-ilgi-'.$name;
	$message = "(blog : " . $blog . "\r\n" . $blog . $comment;
	$headers = 'From: '. $email . "\r\n" .
    		'Reply-To: '. $email . "\r\n" .
    		'X-Mailer: PHP/' . phpversion();
	$delevery=mail($to, $subject, $message, $headers);
	echo $delevery;
}
?>

