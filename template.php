<?php
$page=$_SESSION["page"];
switch ($page) {
  case 'anayarpaq':
    $li_class = array('anayarpaq' => "active");
    break;
  case 'ilgi':
    $li_class = array('ilgi' => "active");
    break;
}

?>
<!DOCTYPE html>
<html>
<head>
  <title>تۆرکجه‌ کئیبوْرد</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="src/img/favicon.ico">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="src/css/template.css">
  <?php
  echo '<link rel="stylesheet" href="src/css/'.$_SESSION['page'].'.css">';
  ?>
  <!-- jQuery CDN -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <!-- jQuery local fallback -->
  <script>if (!window.jQuery) { document.write('<script src="src/js/jquery-2.1.4.min.js"><\/script>'); }
  </script>
  <!-- Bootstrap JS CDN -->
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <!-- Bootstrap JS local fallback -->
  <script>if(typeof($.fn.modal) === 'undefined') {document.write('<script src="src/js/bootstrap.min.js"><\/script>')}</script>
    <!-- Bootstrap CSS local fallback -->
  <script>
    $(document).ready(function() {
    var bodyColor = $('body').css('color');
    if(bodyColor != 'rgb(51, 51, 51)') {
    $("head").prepend('<link rel="stylesheet" href="src/css/bootstrap.min.css">');}});
  </script>
  <!--||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
  <?php
  echo '<script src="src/js/'.$_SESSION['page'].'.js"></script>';
  ?>
</head>
<body>
<div id="wrap">

  <div id="navigationbar" class="container">
    <nav id="navbar" class="navbar navbar-default">
      <div class="container-fluid navbar-right">
        <div class="navbar-header pull-right">
          <a id="logo" class="navbar-brand" href="#">تۆرکجه‌ کئیبوْرد</a>
        </div>
        <ul class="nav navbar-nav pull-right">
          <li class="pull-right <?php echo $li_class['anayarpaq'];?>"><a href="anayarpaq.php">آنا یارپاق<br/>
            <img id="image" src="src/img/img_home_mini.png" class="img-thumbnail"></a></li>
          <li class="pull-right"><a href="http://blog.turkcekeyboard.ir/">بؽلاگ<br/>
            <img id="image" src="src/img/img_blog.png" class="img-thumbnail"></a></li>
          <li class="pull-right disabled"><a href="#">قئنو|لینۇکس<br/>
            <img id="image" src="src/img/img_gnu|linux_mini.png" class="img-thumbnail"></a></li>
          <li class="pull-right disabled"><a href="#">ویندوز<br/>
            <img id="image" src="src/img/img_windows_mini.png" class="img-thumbnail"></a></li>
          <li class="pull-right disabled"><a href="#">اندروید<br/>
            <img id="image" src="src/img/img_android_mini.png" class="img-thumbnail"></a></li>
          <li class="pull-right disabled"><a href="#">آی‌او‌ائس<br/>
            <img id="image" src="src/img/img_ios_mini.png" class="img-thumbnail"></a></li>
          <li class="pull-right disabled"><a href="#">یاردؽم<br/>
            <img id="image" src="src/img/img_yardim_mini.png" class="img-thumbnail"></a></li>
          <li class="pull-right <?php echo $li_class['ilgi'];?>"><a href="ilgi.php">ایلگی<br/>
            <img id="image" src="src/img/img_ilgi_mini.png" class="img-thumbnail"></a></li>
        </ul>
      </div>
    </nav>
  </div>

  <div id="content" class="container">
    <?php
    require("pages/page_".$_SESSION['page'].".php");
    ?>
  </div>
  <div id="push"></div>
</div>

<div id="footer">
  <div id="footer_in">
  <div id="fc" class="container">
    طراحی اوْلۇنمۇش وپروْقراملاشدیٛرؽلمیٛش صادق رحمتی‌نین الیله
  </div>
  </div>
</div>

</body>
</html>
