<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Tim Phillips | Edmonton Movie Guide</title>
    <link REL=StyleSheet HREF="../../style/stylesheet.css" TYPE="text/css" MEDIA=screen>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
    <script type="text/javascript" src="../../javascript/javascript.js"></script>
</head>
<body> 

<a name="top"></a>

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/header.php'); ?>

<div id="content">
    <img alt="Edmonton Movie Guide" src="images/banner.jpg" class="banner">
    <h3>Edmonton Movie Guide</h3>

    <p>This was a quick two-week project I had to do for a course on software engineering. Here is an extract of the user manual with some screenshots.</p>
    
    <p>The project also involved developping a webcrawler that would visit edmovieguide.com and extract all the movie showings and information from various pages across the site.</p>
    
    <hr width="90%" size=1 color=#736F6E>
    <h3>Using Edmonton Movie Guide</h3>
    
    <p><b>Start-up</b></p>
    
    <p>Once the Edmonton Movie Guide is launched, a window will open containing various options to search for movies based on your specifications - movie title, time, and day of the week.</p>
    
    <p>To begin, the message "Loading movies..." will be displayed, as the application visits the Edmonton Movie Guide website and "downloads" the information needed for the application - the movies and the showtimes for each movie.</p>
    
    <p><img src="images/loadingmovies_small.png" alt="Loading Movies"/></p>
    
    <p>Once the necessary information has been retrieved from the website, the lower portion of the window will automatically update itself to display the current list of movies showing in Edmonton. By default, all the movies are displayed because you have not yet added any specific search terms.</p>
    
    <p><img src="images/firstload_small.png" /></p>
    
    <p><b>Finding showtimes</b></p>
    
    <p>To look at the showtimes for a movie on the list, simply select it from the list on the left, and the showtimes will be displayed in the box to the right. The theatres, times, and days of the week (for the current week) are all displayed.</p>
    
    <p>For example, selecting "Inception" from the list will produce:</p>
        
    <p><img src="images/selectmovie_small.png" /></p>
    
    <p><b>Search options</b></p>
    
    <p>You can search for specific movies, times, and days through the interface at the top of the window.</p>
    
    <p>To search for a specific movie title, click the "Search for a title" button in the "Search for movies" box. Here you can type in a movie name or a partial movie name to narrow down the movie results. The search matches from the start of the movie title only (so leaving the box empty will display all the movies, or simply searching "A" will produce all the movies starting with the letter "A"). Once you have entered your search terms, click the "Search" button to update the results list.</p>
    
    <p>Here, searching for "Legend" will produce these results:</p>
    
    <p><img src="images/searchTitle_small.png"/></p>
    
    <p>Similarly, click the "Between" radio button in the "Specify Time" box to specify a specific time you would like to see a movie. Here you can enter two times (in the format hh:mm), and the application will display all the movies that <b>start</b> during this time period (but will not necessarily finish in this time period). Click the search button again to update the list. Only the movies with showings during this time period will be displayed.</p>
    
    <p>Selecting "Inception" again, but narrowing the search to only showing times between 1:30 and 6:00, produces these results:</p>
    
    <p><img src="images/seachTime_small.png" /></p>
    
    <p>If you would like to include movies that are already in progress during the time period, you can also select the "Include movies in progress" button and additional movies will be displayed that started two hours prior to the specified time period (the application assumes that typical movies run two hours).</p>
    
    <p>Clicking this button (and the Search button) will add a couple more results to the "Inception" search:</p>
    
    <p><img src="images/seachTimeInclude_small.png" /></p>
   
    <p>You can also specify a particular day of the week to see a movie. By default the application will display showtimes for the entire week. Clicking the "Day of the week" button in the "Specify day" box allows you to input a day of the week. Click the "Search" button to update the results.</p>
    
    <p>Updating our "Inception" search to only show showings on Wednesday will produce:</p>
    
    <p><img src="images/searchDay_small.png"/></p>
    
    <p><b>Exiting</b></p>
    <p>You can exit the application by going under the File menu, and selecting "Exit". Alternatively, you can click the 'x' box in the corner of the window to close the program.</p>
    
    <p><b>Example search</b></p>
    
    <p>Say you were visiting Edmonton, and you wanted to see the movie "Amazon". You were only free on Wednesday between 1:30 and 5:00. A search with these criteria would tell you that Amazon is showing at 2:00 on Wednesday at the TELUS World of Science.</p>
    
    <p><img src="images/exampleSearch_small.png"/></p>
    
    <div class="center">
        <p><a href="#top" >Top</a></p>
    </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php'); ?>

</body>
</html>
