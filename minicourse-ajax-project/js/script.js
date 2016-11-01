
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
    var streetValue = $street.val();
    var cityValue = $city.val();
    var location = streetValue + ', ' + cityValue;
    var HTMLlocation = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x400&location=%location%">';
    var formattedLocation = HTMLlocation.replace("%location%",location);

    $body.append(formattedLocation);

    //load newyorktimes api
    var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +location+ '&sort=newest&api-key=8ea7da785c9147f6836c5ca751c2f769';
    $nytHeaderElem.text('New York Times Articles About' + location);

    $.getJSON( url, function( data ) {
    
    var items = [];
    $.each( data.response, function() {
        var docs = data.response.docs;
        for (doc in docs) {
            items.push( "<li class='article'><a href='"+ docs[doc].web_url+"'>'"+ docs[doc].headline.main+"'</a><p>'"+ docs[doc].snippet+"'</p></li>" );
        }
    });

    for (item in items) {
        $nytElem.append(items[item]);
    }

    }).error(function(e) {
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });
    
    $.ajax({
        url: 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+ cityValue +'&format=json&callback=success',
        type: 'GET',
        dataType: 'jsonp',
        success: function( data ) {
                   $wikiElem.text("Wikipedia articles about" + cityValue);
                   for (var i = 0 , l = data[1].length; i < l; i++ ) {
                        $wikiElem.append("<li><a href='"+ data[3][i]+"'>"+ data[1][i]+"</a></li>");
                   }
                }
    }).done(function() {
        console.log("success");
    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
    
    return false;
};

$('#form-container').submit(loadData);
