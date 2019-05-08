const API_URL = "https://api.ivelthoven.nl/github";

$(document).ready(function () {
    console.log("js loaded..")
    $.getJSON( API_URL, function( data ) {
        $("#data").html(data);
        console.log(data);
    });
});
