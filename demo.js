window.onload = function() {
  var side = document.getElementById("side-panel");
  var map = document.getElementById("map-canvas");
  var main = document.getElementById("main-wrapper");
  
  side.onclick = function() {
      map.style.display = "block";
      main.style.display = "none";
  }
  
  google.maps.event.addDomListener(side, 'click', initialize);
}

function initialize() {
  var geoCode = new google.maps.Geocoder().geocode({
      address: "Suite 508, 35 Buckingham Street, Surry Hills, NSW"
    }, function(result, status) {
      var mapOptions = {
        center: result[0].geometry.location,
        zoom: 8,
        disableDefaultUI: true
      };
      
      var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
      
      map.fitBounds(result[0].geometry.viewport);
      
      var marker = new google.maps.Marker({
        position: result[0].geometry.location,
        animation: google.maps.Animation.BOUNCE,
        title: "You're about here, yes?", 
        map: map
      });
    }
  );
}

