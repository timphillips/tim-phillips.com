<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Tim Phillips | PhotoWeb</title>
    <link REL=StyleSheet HREF="../../style/stylesheet.css" TYPE="text/css" MEDIA=screen>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
    <script type="text/javascript" src="../../javascript/javascript.js"></script>
    <style>
    table{
        table-layout: fixed;
    }

    th, td {
        vertical-align: top;
        overflow: hidden;
        width: 100px;
        height: 100px;
    }
    </style>
</head>
<body> 

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/header.php'); ?>

<div id="content">
    <img alt="PhotoWeb" src="images/banner.jpg" class="banner">
    <h3>PhotoWeb</h3>

    <p>PhotoWeb is a web application that was developed for a database class (CMPUT 391). The site provides services for storing, sharing and searching for photos. Features of the system include:
        <ul>
            <li>Managing your profile - including creating groups of friends to share your photos with.</li>
            <li>Uploading and storing photos, with descriptive information and access privileges.</li>
            <li>Searching for photos based on keywords and date range.</li>
            <li>Generating and displaying a data analysis report.</li>
        </ul>
    
    <p>The project was built by three students with Java, JSP, and SQL. The project source code is available on <a href="https://github.com/caciula/c391/" target="_blank">GitHub</a>.</p>
    
    <p>Unfortunately the website is not currently online, as we only had access to Oracle database accounts during the course.</p>
    
    <p><b>Some screenshots:</b></p>
    
    <p>
        <table align="center">
           <tr>
               <td><a href="images/viewImage.jpg" target="_blank"><img src="images/viewImage_thumb.jpg" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity=70"  onmouseout="this.style.opacity=1;this.filters.alpha.opacity=100"></a></td>
               <td><a href="images/editImage.jpg" target="_blank"><img src="images/editImage_thumb.jpg" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity=70"  onmouseout="this.style.opacity=1;this.filters.alpha.opacity=100"></a></td>
               <td><a href="images/viewProfile.jpg" target="_blank"><img src="images/viewProfile_thumb.jpg" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity=70"  onmouseout="this.style.opacity=1;this.filters.alpha.opacity=100"></a></td>
           </tr>
           <tr>
               <td><a href="images/uploadImage.jpg" target="_blank"><img src="images/uploadImage_thumb.jpg" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity=70"  onmouseout="this.style.opacity=1;this.filters.alpha.opacity=100"></a></td>
               <td><a href="images/uploadImagesFromDir.jpg" target="_blank"><img src="images/uploadImagesFromDir_thumb.jpg" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity=70"  onmouseout="this.style.opacity=1;this.filters.alpha.opacity=100"></a></td>
               <td><a href="images/search.jpg" target="_blank"><img src="images/search_thumb.jpg" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity=70"  onmouseout="this.style.opacity=1;this.filters.alpha.opacity=100"></a></td>
           </tr>
           <tr>
               <td><a href="images/register.jpg" target="_blank"><img src="images/register_thumb.jpg" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity=70"  onmouseout="this.style.opacity=1;this.filters.alpha.opacity=100"></a></td>
               <td><a href="images/login.jpg" target="_blank"><img src="images/login_thumb.jpg" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity=70"  onmouseout="this.style.opacity=1;this.filters.alpha.opacity=100"></a></td>
               <td><a href="images/dataAnalysis01.jpg" target="_blank"><img src="images/dataAnalysis01_thumb.jpg" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity=70"  onmouseout="this.style.opacity=1;this.filters.alpha.opacity=100"></a></td>
           </tr>
        </table>
    </p>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php'); ?>

</body>
</html>
