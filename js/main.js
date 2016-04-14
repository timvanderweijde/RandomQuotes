var apiKey2 = "http://quotesondesign.com/api/3.0/api-3.0.json?callback=";
var apiKey = "https://api.icndb.com/jokes/random?limitTo=nerdy";

var quoteSign = "<div class=\"quote-sign\"></div>";

function parseQuoteData(data) {
    $("#quote").empty();
    
    $("#quote").append(data.value.joke);
}


$(document).ready(function () {

    $.getJSON(apiKey, parseQuoteData);

    $("#newQuote").on("click", function () {
        $.getJSON(apiKey, parseQuoteData);
    });
});
