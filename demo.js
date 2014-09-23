window.onload = function() {
  var map = document.getElementById("map-canvas");
  var showHideButton = document.getElementById("showHideButton");
  
  showHideButton.onclick = function() {
    if(map.style.display != "none") {
      map.style.display = "none";
      showHideButton.innerHTML = "Show the map";
    } else {
      map.style.display = "block";
      showHideButton.innerHTML = "Hide the map";
    }
  }
}
