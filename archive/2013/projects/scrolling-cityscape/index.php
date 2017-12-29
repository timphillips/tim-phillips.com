<!DOCTYPE html>
<html>
<head>
    <title>Tim Phillips | Scrolling Cityscape</title>
    <link REL=StyleSheet HREF="../../style/stylesheet.css" TYPE="text/css" MEDIA=screen>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
    <script type="text/javascript" src="../../javascript/javascript.js"></script>
    <script type="text/javascript" src="scrolling-cityscape.js"></script>
</head>
<body>

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/header.php'); ?>

<div id="content">
    <img alt="Scrolling Cityscape" src="images/banner.jpg" class="banner">
    <h3>Scrolling Cityscape</h3>
    <p>A personal experiment to learn more about (object oriented) JavaScript and drawing with the HTML5 canvas. The buildings and clouds in the animation are randomly generated.</p>

    <p><a href="http://github.com/timphillips/scrolling-cityscape/" target="_blank">View on GitHub</a></p>

    <div class="center">
        <p>
            <canvas id="city-canvas" width="750px" height="400px">
                Your browser does not support the HTML5 canvas tag.
            </canvas>
        </p>
    </div>

</div>

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php'); ?>

</body>
</html>

