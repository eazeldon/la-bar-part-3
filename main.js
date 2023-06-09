
//------------------------------------Form control
function message(){
   var Name = document.getElementById('name');
   var email = document.getElementById('email');
   var msg = document.getElementById('msg');
   const success = document.getElementById('success');
   const danger = document.getElementById('danger');
 
   if(Name.value === '' || email.value === '' || msg.value === ''){
       danger.style.display = 'block';
   }
   else{
       setTimeout(() => {
           Name.value = '';
           email.value = '';
           msg.value = '';
       }, 2000);
 
       success.style.display = 'block';
   }
 
 
   setTimeout(() => {
       danger.style.display = 'none';
       success.style.display = 'none';
   }, 4000);
 
 }
 //------------------------------------------MODAL
   // Get the modal
   var modal = document.getElementById("myModal");

   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // When the user clicks the button, open the modal 
   btn.onclick = function () {
     modal.style.display = "block";
   }

   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
     modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }
   
   
   //--------------------------------------------MAP

    $(document).ready(function() {
      // Add smooth scrolling to all links in navbar + footer link
      $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    })
//////////////////////////////two pop up////////
    
    
             var locations = [
  // Array Format: Site Name, Site Info, Marker lat, Marker lng, InfoWindow lat, InfoWindow lng
  [ 'Site 1', '<div><h3 id="la">la bar <br>avenue </h3>modern streets <br>Cloudy city <br /> white building <br>50,20flr<p> <img src="img/modern1.jpg " alt="modern" style="height:80px" id="img"></p></div>',  55.613300,12.976400],
  ['Site 2', '<div id="bar"><h3 id="ba">la bar </h3>green vally streets <br>Rainy city <br /> lamore building <br> 28, 5flr<p> <img src="img/oxotower.jpg " alt="out1" style="height:80px"></p></div>', 51.508383386, -0.10851596],
 
];

var infowindow = new google.maps.InfoWindow();
var marker, i;

function initMap() {
  var mapOptions = {

    center: {
      lat: 55.613300,
      lng: 12.976400
   
  
   
    },
   

    zoom: 3,
    /*gestureHandling: "Hello",
    scrollwheel: false,
    zoomControl: true,*/
  };

  var map = new google.maps.Map(
    document.getElementById("map-canvas"),
    mapOptions
  );

  setMarkers(map, locations)

  function setMarkers(map, locations) {

    var i

    for (i = 0; i < locations.length; i++) {
      var name = locations[i][0]
      var lat = locations[i][2]
      var long = locations[i][3]
      var latInfo = locations[i][4]
      var longInfo = locations[i][5]

      var latlngset = new google.maps.LatLng(lat, long);

      var marker = new google.maps.Marker({
        title: name,
        position: latlngset,
        winLatLng: winLatLng,
        map: map
      });
      map.setCenter(marker.getPosition())
        var content = locations[i][1];

      var infowindow = new google.maps.InfoWindow()

      var winLatLng = new google.maps.LatLng(latInfo, longInfo);

      google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow, winLatLng) {
        return function() {
          infowindow.setContent( content);
         
        
          
         infowindow.open(map, marker);
        };
     }) (marker, content, infowindow, winLatLng));
    google.maps.event.trigger(marker, 'click');
   }
 }

}
