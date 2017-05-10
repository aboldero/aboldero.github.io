/* Google Map */

var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.748541, lng: -73.985758},
	zoom: 13
});

var locations = [
	{
	  lat: 40.728233,
	  lng: -74.009516,
	  title: 'Gallery 1'
	},
	{
	  lat: 40.728709,
	  lng: -74.009418,
	  title: 'Gallery 2'
	},
	{
	  lat: 40.728709,
	  lng: -74.009418,
	  title: 'Gallery 3',
	},
	{
	  lat: 40.737254,
	  lng: -74.007739,
	  title: 'Bethune Street',
	},
	{
	  lat: 40.736861,
	  lng: -74.009613,
	  title: '463 West Street',
	},
	{
	  lat: 40.745752,
	  lng: -74.008595,
	  title: 'Pier 59',
	},
	{
	  lat: 40.76461,
	  lng: -73.974355,
	  title: 'Plaza Hotel',
	},
	{
	  lat: 40.7422,
	  lng: -74.006791,
	  title: 'Highline Stages',
	},
	{
	  lat: 40.7571,
	  lng: -73.998949,
	  title: '523 WEST 37TH STREET',
	},
];

locations.forEach(function (location) {

	var marker = new google.maps.Marker({
		position: {
			lat: location.lat,
			lng: location.lng,
		},
		title: location.title,
		map: map
	});
	
})
