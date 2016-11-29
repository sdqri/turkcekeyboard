<?php
if(session_id() == ""){
  session_start();
  $_SESSION['page']="anayarpaq";
}
else{
  $_SESSION['page']="anayarpaq";
}
require("template.php");
?>
