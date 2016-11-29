<?php
session_start();
$sorghu=array(0=>"بیر قؽرمؽزؽ گۆل نه‌ رنگ اوْلا بیلر؟!",
			  1=>"بۇز سوْیۇقمۇ یا ایستی؟");
$soragh=array(0=>"قؽرمؽزؽ",1=>"سوْیۇق");
$r=rand(0,1);
$_SESSION["captcha"]=$soragh[$r];
echo $sorghu[$r];
?>