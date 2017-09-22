$( document ).ready(function() {
    console.log( "ready!" );
    $("#race-heatmap").css("display", "none");
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function showSchool() {
    var schoolHeatMap = document.getElementById("school-heatmap");
    var raceHeatMap = document.getElementById("race-heatmap");
    raceHeatMap.style.display = "none";

    schoolHeatMap.style.display = "block";
    var schoolFilter = document.getElementById("show-school");
    var raceFilter = document.getElementById("show-race");
    schoolFilter.style.backgroundColor = "#bfbfbf";
    raceFilter.style.backgroundColor = "white";
}

function showRace() {
    var schoolHeatMap = document.getElementById("school-heatmap");
    var raceHeatMap = document.getElementById("race-heatmap");
    raceHeatMap.style.display = "block";
    schoolHeatMap.style.display = "none";
    var schoolFilter = document.getElementById("show-school");
    var raceFilter = document.getElementById("show-race");
    schoolFilter.style.backgroundColor = "white";
    raceFilter.style.backgroundColor = "#bfbfbf";
}

function makeNav() {
    var navbarItems = ["Overview", "Demographics", "Academics", "Lifestyle", "Correlations"];
    var navbarA = [];
    for (var i=0;i<navbarItems.length;i++){
      var navbarString = "<a href='#'>"+navbarItems[i]+"</a>";
      navbarA.push(navbarString);
    }
    console.log(navbarA);
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}