$(document).ready(function($) {
    $.ajax({
        url : "http://api.wunderground.com/api/9f4c1d9fbf3832ad/forecast/geolookup/conditions/q/TX/Sanantonio.json",
        dataType : "jsonp",
        success : function(data){
            console.log(data);
            var location = data.location.city;
            var temp_f = data.current_observation.temp_f;

            var loc = $('#h1');
            var temp = $('#h2');
            var message = $('p');

            loc.html(location);
            temp.html(temp_f);
            message.html('This is some example text');
        }
    });
});