const API_URL = "https://api.ivelthoven.nl/github";

$(document).ready(function () {
    $.getJSON( API_URL, function( data ) {
        $("#data").html(data);
        console.log(data);
    });
});
