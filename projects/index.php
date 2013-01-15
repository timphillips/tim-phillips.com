<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<title>Tim Phillips | Projects</title>

    <link REL=StyleSheet HREF="../style/stylesheet.css" TYPE="text/css" MEDIA=screen>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
    <script type="text/javascript" src="../javascript/javascript.js"></script>

    <!-- Custom javascript for this 'Projects' page -->
    <script type="text/javascript">
        $(document).ready(function() {
            $('.thumbnail').each(function() {
                $(this).hover(function() {
                    $(this).stop().animate({ opacity: 1.0 }, 200);
                },
                function() {
                    $(this).stop().animate({ opacity: 0.3 }, 500);
                });
            });
            
            $('.project_title').each(function() {
                $(this).hover(function() {
                    var currentId = $(this).attr('id');
                    currentId += "_thumbnail";
                    $('#'+currentId).stop().animate({ opacity: 1 }, 200);
                },
                function() {
                    var currentId = $(this).attr('id');
                    currentId += "_thumbnail";
                    $('#'+currentId).stop().animate({ opacity: 0.3 }, 500);
                });
            });
        });
    </script>

    <style>
        .project_box {      
            border: 1px dotted #000000;
            width: 755px;
            height: 45px;
            background-color: #F8F8F8;
            padding: 10px 10px 10px 10px;
            margin: 0px 0px 15px 0px;
            line-height: 140%;
            font-size: 1.5em;
        }	
        .thumbnail {
            float:right;
	        opacity: 0.3;
	        filter: alpha(opacity=30);
            border-style: solid;
            border-width: 1px;
            width: 40px;
            height: 40px;
        }
    </style>

</head>

<body <?php $pageName="Projects"; ?>>

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/header.php'); ?>

<div id="content">
    <img alt="Projects" src="" class="banner" id="me">

    <h3>Projects</h3>
    
    <p><b>Recent work:</b></p>

    <div class="project_box">
    	<a href="cave-escape/" class="project_title" id="cave_escape">Cave Escape (2012)</a>
    	<a href="cave-escape/">
    	<img src="../images/project_icons/caveescape.gif" id='cave_escape_thumbnail' alt="Cave Escape" class="thumbnail">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">An entry for the Great Canadian Appathon (48-hour mobile game development competition).</span>
    </div>
    
    <div class="project_box">
    	<a href="photo-web/" class="project_title" id="photo_web">PhotoWeb (2012)</a>
    	<a href="photo-web/">
    	<img src="../images/project_icons/photoweb.gif" id='photo_web_thumbnail' alt="PhotoWeb" class="thumbnail">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">A photo-sharing website, similar to Flickr, where a user can upload and share photos with other users.</span>
    </div>
    
    <div class="project_box">
    	<a href="space-adventure/" class="project_title" id="space_adventure">Space Adventure! (2011)</a>
    	<a href="space-adventure/">
    	<img src="../images/project_icons/spaceadventure.gif" id='space_adventure_thumbnail' alt="Space Adventure" class="thumbnail">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">A four-minute animated film created with 3ds Max.</span>
    </div>
    
    <div class="project_box">
    	<a href="pep/" class="project_title" id="pep">Personal Edmonton Planner (2010)</a>
    	<a href="pep/">
    	<img src="../images/project_icons/pep.gif" id='pep_thumbnail' alt="Personal Edmonton Planner" class="thumbnail">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">A tourist application that allows visitors to plan their stay in Edmonton.</span>
    </div>
    
    <div class="project_box">
    	<a href="besharen/" class="project_title" id="besharen">Adventure Game (2005, 2010)</a>
    	<a href="besharen/">
    	<img src="../images/project_icons/adventuregame.gif" id='besharen_thumbnail' alt="Adventure Game" class="thumbnail" width="40px" hight="40px" border="1px">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">A short point-and-click adventure game I made when I was 14, but now playable online.</span>
    </div>
    
    <div class="project_box">
    	<a href="ed-movie-guide/" class="project_title" id="edmovieguide">Edmonton Movie Guide (2010)</a>
    	<a href="ed-movie-guide/">
    	<img src="../images/project_icons/edmovieguide.gif" id='edmovieguide_thumbnail' alt="Edmonton Movie Guide" class="thumbnail">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">A Java application for searching for movies in Edmonton based on title, time, and day.</span>
    </div>
    
    <p><b>Older work:</b></p>
    
    <div class="project_box">
    	<a href="dots/" class="project_title" id="dots">Dots Game (Summer 2010)</a>
    	<a href="dots/">
    	<img src="../images/project_icons/dots.gif" id='dots_thumbnail' alt="Dots" class="thumbnail">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">An implementation of the classic dots game using a Java applet.</span>
    </div>
    
    <div class="project_box">
    	<a href="guitar/" class="project_title" id="guitar">Guitar Videos (2009-2010)</a>
    	<a href="guitar/">
    	<img src="../images/project_icons/guitar.gif" id='guitar_thumbnail' alt="Guitar" class="thumbnail">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">I play guitar. Here are some old videos. Most new videos are just posted on my blog now.</span>
    </div>
    
    <div class="project_box">
    	<a href="timelapse/" class="project_title" id="timelapse">Timelapses (2009)</a>
    	<a href="timelapse/">
    	<img src="../images/project_icons/timelapse.gif" id='timelapse_thumbnail' alt="Timelapses" class="thumbnail">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">Just for fun, using the webcam on my computer.</span>
    </div>
    
    <div class="project_box">
    	<a href="plains-indian/" class="project_title" id="plains_indian">Plains Indian Painting (2008)</a>
    	<a href="plains-indian/">
    	<img src="../images/project_icons/plainsindian.gif" id='plains_indian_thumbnail' alt="Plains Indian Painting" class="thumbnail">
    	</a>
    	<br>&nbsp; &nbsp;<span class="subtext">A project for an art class in high school, also displayed at the Calgary Stampede.</span>
    </div>
    
    <div class="project_box">
    	<a href="filmfest/" class="project_title" id="filmfest">ABE Film Festival Website (2007)</a>
    	<a href="filmfest/"> <img src="../images/project_icons/filmfest.gif" id='filmfest_thumbnail' alt="Film Fest Website" class="thumbnail"></a>
    	<br>&nbsp; &nbsp;<span class="subtext">I made this website for an annual film festival at my high school.</span>
    </div>

</div>

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php'); ?>

</body>
</html>
