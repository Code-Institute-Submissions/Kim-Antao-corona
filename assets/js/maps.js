function initMap() {
    var myLatLng = { lat: 39.5572, lng: -7.8537 };
    //create map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });
    //global variables
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;
    var marker = new google.maps.Marker;
    //initial marker and infowindow
    marker.setPosition(myLatLng);
    marker.setMap(map);
    infowindow.setContent('click on a country');
    infowindow.open(map, marker);
    //event listener
    map.addListener('click', function (mapsMouseEvent) {
        //convert the lat and lng values to desired types
        var dynamicLatLng = (mapsMouseEvent.latLng.toString());

        dynamicLatLng = dynamicLatLng.replace(/\s+|\(|\)/g, '');

        var input = dynamicLatLng;
        var latlngStr = input.split(',', 2);
        var latlng = { lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1]) };

        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    //close the initial marker and info window and open a new one
                    marker.setMap(null);
                    infowindow.close();
                    marker.setPosition(latlng);
                    infowindow.setContent("Fetching Data");
                    marker.setMap(map);
                    //find the country name
                    var cnt = 0;
                    for (var i = 0; i < results[0].address_components.length; i++) {
                        if (results[0].address_components[i].types[0] == "country") {
                            cnt = i;
                        }
                    }

                    var countryName = results[0].address_components[cnt].long_name;
                    // call the function
                    displayData(countryName, marker, infowindow);
                } else {
                    wind0ow.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    });
}

function displayData(name, marker, infowindow) {
    $.when(
        $.getJSON(`https://api.covid19api.com/live/country/${name}/status/confirmed`)
    ).then(

        function (response) {
            var countrydata = response;
            var lastItem = countrydata[countrydata.length - 1];
            var statistics = 'Name: ' + lastItem.Country +
                "<br/>" + ' Confirmed: ' + lastItem.Confirmed +
                "<br/>" + ' Recovered: ' + lastItem.Recovered +
                "<br/>" + ' Deaths: ' + lastItem.Deaths;
            console.log(statistics);
            infowindow.setContent(statistics);
            Infowindow.open(map, marker);
        },
        function (errorResponse) {
            if (errorResponse.status === 404) {
                window.alert('No data found');
            } else {
                console.log(errorResponse);
                window.alert('Please try after sometime');
            }
        }
    );

}