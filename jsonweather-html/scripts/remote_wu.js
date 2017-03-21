// Current Location Scripts
$(function () {
    var status = $('#status');
    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                // Call the getData function, send the lat and long
                getData(lat, long);
            });
        }
        else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }
    })();
    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({
            url: "https://api.wunderground.com/api/f2d1c7032fa51e18/geolookup/conditions/q/" + lat + "," + long + ".json"
            , dataType: "jsonp"
            , success: function (data) {
                //make sure we get something back
                console.log(data);
                
                //set the data to some managable vars
                var location = data.location.city + ", " + data.location.state;
                
                $("title").prepend(location + " ");
                $("cityDisplay").html(location);
                
                //get the current temp
                var curTemp = data.current_observation.temp_f + "°";
                $("#currentTemp").html(curTemp);
                console.log(curTemp);
                
                var summary = data.current_observation.weather;
                $("#summary").html(summary);
                
                //additional data
                var feelsLike = data.current_observation.feelslike_f;
                console.log(feelsLike);
                var windSpeed = data.current_observation.wind_mph;
                var windDirection = data.current_observation.wind_dir;
                
                $("#add1").html("Feels like: " + feelsLike + "°");
                $("#add2").html("Wind Speed: " + windSpeed + " mph");
                $("#add3").html("Wind Direction: " + windDirection);
                
            }
        });
        $("#cover").fadeOut(250);
    }
    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});