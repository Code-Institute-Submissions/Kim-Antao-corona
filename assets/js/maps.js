function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: { lat: 39.5572, lng: -7.8537 }
    });
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;
    //var markers = [];

    // Create the initial InfoWindow.
    var infoWindow = new google.maps.InfoWindow(
        { content: 'Click the map', position: { lat: 39.5572, lng: -7.8537 } });
    infoWindow.open(map);

    map.addListener('click', function (mapsMouseEvent) {
        infoWindow.close();

       // infoWindow = new google.maps.InfoWindow({ position: mapsMouseEvent.latLng });
        var dynamicLatLng = (mapsMouseEvent.latLng.toString());

        dynamicLatLng = dynamicLatLng.replace(/\s+|\(|\)/g, '');

        var input = dynamicLatLng;
        var latlngStr = input.split(',', 2);
        var latlng = { lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1]) };

        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    map.setZoom(4);

                    var marker = new google.maps.Marker({

                        position: latlng,
                        map: map
                    });

                    var cnt = 0;
                    for (var i = 0; i < results[0].address_components.length; i++) {
                        if (results[0].address_components[i].types[0] == "country") {
                            cnt = i;
                        }
                    }
                    // debugger;
                    var countryName = results[0].address_components[cnt].long_name;
                    /*$.when(
                        $.getJSON(`https://api.covid19api.com/live/country/${countryName}/status/confirmed`)
                    ).then(
                  
                        function (response) {
                            var countrydata = response;
                            displayData(countrydata, map, infoWindow, marker);
                        },
                        function (errorResponse) {
                            if (errorResponse.status === 404) {
                                window.alert('No data found');
                            } else {
                                console.log(errorResponse);
                                window.alert('Please try after sometime');
                            }
                        }
                    );*/

                    infowindow.setContent(displayData(countryName));

                    // infowindow.setContent(results[0].address_components[cnt].long_name);
                    infowindow.open(map, marker);
                } else {
                    wind0ow.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    });
}

function displayData(name) {
    $.when(
        $.getJSON(`https://api.covid19api.com/live/country/${name}/status/confirmed`)
    ).then(

        function (response) {
            var countrydata = response;
            var lastItem = countrydata[countrydata.length - 1];
            var statistics = 'Name: ' + lastItem.Country +
                ' Confirmed: ' + lastItem.Confirmed +
                ' Recovered: ' + lastItem.Recovered +
                ' Deaths: ' + lastItem.Deaths;
            console.log(statistics);
            return statistics;
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