<?php
session_start();
if($_POST["captcha"]==$_SESSION["captcha"]){
	echo true;
}
else{
	echo false;
}
?>