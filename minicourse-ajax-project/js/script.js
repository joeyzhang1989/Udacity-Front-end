
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $street = $('#street');
    var $city = $('#city');
    
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var streetValue = $street.val();
    var cityValue = $city.val();
    var location = streetValue + ', ' + cityValue;
    var HTMLlocation = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x400&location=%location%">';
    var formattedLocation = HTMLlocation.replace("%location%",location);

    $body.append(formattedLocation);

    
    return false;
};

$('#form-container').submit(loadData);
