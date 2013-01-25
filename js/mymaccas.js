$(document).ready( function () {
    var token = null;
    var catalogue = null;

    $('#login').submit( function (event) {
        event.preventDefault();
        var username = $('input#username').val();
        var password = $('input#password').val();

        $.ajax({
            type: "POST",
            url: "https://mymaccas.dev/api/Security/SignInAndAuthenticate",
            contentType: "text/json",
            dataType: "json",
            headers: {
                //"User-Agent": "Appcelerator Titanium/2.0.1.GA2 (iPhone/6.0; iPhone OS; en_AU;)",
                "MarketId" : "AU"
            },
            data: '{"marketId":"AU",' +
                '"application":"MOT",' +
                '"languageName":"en-AU",' +
                '"versionId":"1.0.9",' +
                '"nonce":"2013-01-09T18:54:04",' +
                '"hash":"ZTdlYzVkYTZlNzc2NTkwZThjYzMxOWI4OGI1YTI2MDk=",' +
                '"userName": "' + username + '",' +
                '"password": "' + password + '",' +
                '"catalogVersion":{"Market":[{"Type":1},{"Type":2},{"Type":3},{"Type":4},{"Type":5},{"Type":6},{"Type":14},{"Type":15}]}}'
        }).success( function (result) {
                token = result.Data.AccessData.Token;
                console.log(token);
                catalogue = JSON.parse(JXG.decompress(result.Data.Catalog));
                //console.log(catalogue);
                //console.log(catalogue.Market.Restaurants);
                displayRestaurants(catalogue.Market.Restaurants, catalogue.Market.Facilities, catalogue.Market.PaymentMethods);
                //displayCatalogue(catalogue);
            });
    });

    var displayRestaurants = function (restaurants, facilities, paymentMethods) {
        var container = "<ul>";

        $.each(restaurants, function (i, restaurant) {
            container += "<li>" + restaurant.StoreName + "</li>" +
                         "<ul></ul><li>" + restaurant.StoreAddress + "</li></ul>";
            console.log(restaurant);
        });
        container += "</ul>";
        $('#content').html(container);
    };

    var displayCatalogue = function (catalogue) {

    };
});