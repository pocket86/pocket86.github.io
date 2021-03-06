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
            url: "https://api.wunderground.com/api/f2d1c7032fa51e18/geolookup/conditions/forecast/hourly/q/" + lat + "," + long + ".json"
            , dataType: "jsonp"
            , success: function (data) {
                //make sure we get something back
                console.log(data);
                
                //set the data to some managable vars
                var location = data.location.city + ", " + data.location.state;
                $('.location').html(location);
                //get the current temp
                var curTemp = data.current_observation.temp_f;
                $('.temp-large').html(curTemp);
                //sumary image url
                var summary = data.current_observation.icon_url;
                $('.summary-image').attr('src', summary);
                //high and low temps
                var high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
                var low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
                $('.high').html(high + "°" + "<span>&#8593;</span>");
                $('.low').html(low + "°" + "<span>&#8595;</span>");
                //feels like temp
                var feelsLike = data.current_observation.feelslike_f;
                $('.feels-like').html("Feels like: " + feelsLike + "°")
                //precipitation (in inches)
                var precip = data.current_observation.precip_today_in;
                $('.precip').html(precip);
                //wind info
                var windSpeed = data.current_observation.wind_mph;
                var windDirection = data.current_observation.wind_dir;
                $('.wind-data').html("Wind: " + windSpeed + "mph | " + windDirection);
                
                //hourly temps
                var hourlyArray = data.hourly_forecast;
                $('.hr0').html(hourlyArray[0].temp.english + "°");
                $('.hr1').html(hourlyArray[1].temp.english + "°");
                $('.hr2').html(hourlyArray[2].temp.english + "°");
                $('.hr3').html(hourlyArray[3].temp.english + "°");
                $('.hr4').html(hourlyArray[4].temp.english + "°");
                $('.hr5').html(hourlyArray[5].temp.english + "°");
                $('.hr6').html(hourlyArray[6].temp.english + "°");
                $('.hr7').html(hourlyArray[7].temp.english + "°");
                $('.hr8').html(hourlyArray[8].temp.english + "°");
                $('.hr9').html(hourlyArray[9].temp.english + "°");
                $('.hr10').html(hourlyArray[10].temp.english + "°");
                $('.hr11').html(hourlyArray[11].temp.english + "°");
                $('.hr12').html(hourlyArray[12].temp.english + "°");
                $('.hr13').html(hourlyArray[13].temp.english + "°");
                $('.hr14').html(hourlyArray[14].temp.english + "°");
                $('.hr15').html(hourlyArray[15].temp.english + "°");
                $('.hr16').html(hourlyArray[16].temp.english + "°");
                $('.hr17').html(hourlyArray[17].temp.english + "°");
                $('.hr18').html(hourlyArray[18].temp.english + "°");
                $('.hr19').html(hourlyArray[19].temp.english + "°");
                $('.hr20').html(hourlyArray[20].temp.english + "°");
                $('.hr21').html(hourlyArray[21].temp.english + "°");
                $('.hr22').html(hourlyArray[22].temp.english + "°");
                $('.hr23').html(hourlyArray[23].temp.english + "°");
                
                //5 day forcast
                var fiveDayArray = data.forecast.simpleforecast.forecastday;
                $('.monday').html("Monday: " + fiveDayArray[0].high.fahrenheit + "°");
                $('.monday-img').attr('src', fiveDayArray[0].icon_url);
                
                $('.tuesday').html("Tuesday: " + fiveDayArray[1].high.fahrenheit + "°");
                $('.tuesday-img').attr('src', fiveDayArray[1].icon_url);
                
                $('.wednesday').html("Wednesday: " + fiveDayArray[2].high.fahrenheit + "°");
                $('.wednesday-img').attr('src', fiveDayArray[2].icon_url);
                
                $('.thursday').html("Thursday: " + fiveDayArray[3].high.fahrenheit + "°");
                $('.thursday-img').attr('src', fiveDayArray[3].icon_url);
                
                $('.friday').html("Friday: " + fiveDayArray[1].high.fahrenheit + "°");
                $('.friday-img').attr('src', fiveDayArray[1].icon_url);
                
                
            
                
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