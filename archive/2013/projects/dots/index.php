<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Tim Phillips | Dots</title>
    <link REL=StyleSheet HREF="../../style/stylesheet.css" TYPE="text/css" MEDIA=screen>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
    <script type="text/javascript" src="../../javascript/javascript.js"></script>
</head>
<body>

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/header.php'); ?>

<div id="content">
    <img alt="Dots" src="images/banner.jpg" class="banner">
    <h3>Dots</h3>

    <p><b>Version 1</b></p>

    <p>Rules:</p>
    
    <ul>
        <li>A two-player game where players take turns selecting vertical or horizontal lines. </li>
        <li>The object of the game is to form boxes with lines of your own colour, while preventing the opponent from forming boxes with lines of their colour. </li>
        <li>When you form a box, you receive one point and <b>an additional turn</b>. </li>
        <li>The game is over when there are no more free lines. The winner is the player with the most points.</b>. </li>
    </ul>
    
    <p>(Applet not loading? Make sure you have Java enabled. See <a href="http://www.java.com/en/download/help/redximage.xml" target="_blank">here</a> or <a href = "http://www.javatester.org/version.html" target="_blank">here</a>.)</p>
    
    <p><applet width=700 height=320 code="dots.class"> </applet></p>
    
    <p><b>Version 2</b></p>
    
    <p>This new version of the game allows the players to specify their names and the size of the playing field. </p>

    <p><applet width=800 height=450 code="dotsV2.class"> </applet></p>

</div>

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php'); ?>

</body>
</html>
