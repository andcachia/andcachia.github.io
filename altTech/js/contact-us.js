

function contactusInit(){
	initMap();
}

function contactusStart(){
	contactusPageAnim();
}

function contactusPageAnim(){
	var leftDiv = document.getElementById("contact-us-info");
	var rightDiv = document.getElementById("map");

	TweenLite.from(leftDiv,2,{left: "-=100px", opacity: 0});
	TweenLite.from(rightDiv,2,{left: "+=100px", opacity: 0});
}

function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 35.910044, lng: 14.488093},
      zoom: 18
    });
    var marker = new google.maps.Marker({
	  position: {lat: 35.910044, lng: 14.488093},
	  map: map
	});
  }