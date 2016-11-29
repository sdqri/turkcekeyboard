<?php
if(session_id() == ""){
  session_start();
  $_SESSION['page']="ilgi";
}
else{
  $_SESSION['page']="ilgi";
}
require("template.php")
?>