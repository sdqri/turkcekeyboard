<?php
session_start();
$sorghu=array(0=>"ب");
$soragh=array(0=>"ب");
$r=rand(0,1);
$_SESSION["captcah"]=$soragh[$r];
echo $sorghu[$r];
?>