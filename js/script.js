var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.8720921, lng: -111.7672265},
          zoom: 13
        });

        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  		var beachMarker = new google.maps.Marker({
    	position: {lat: 34.8687704, lng: -111.7673913},
   		map: map,
    	icon: image
  });
      }


var link = document.querySelector('.link');
var modal = document.querySelector(".modal");
var closeModal = modal.querySelector('.close');

link.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.toggle("open");
});

closeModal.addEventListener('click', function(e){
  modal.classList.remove('open');
});