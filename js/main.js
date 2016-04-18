var apiKey2 = "http://quotesondesign.com/api/3.0/api-3.0.json?callback=";
var apiKey = "http://api.icndb.com/jokes/random?limitTo=nerdy";

var quoteSign = "<div class=\"quote-sign\"></div>";

function parseQuoteData(data) {
    $("#quote").animateCss('zoomIn');
    
    $("#quote").empty();
    $("#quote").append(data.value.joke);
     
    changeTweetLink(data.value.joke);
}

function changeTweetLink(quote) {
    console.log('changeTweetLink:' + quote);
  if (quote && quote.length > 0) {
    var url = "https://twitter.com/intent/tweet?hashtags=chucknorris,joke&related=freecodecamp&url=" + getCurrentUrl() + "&text=" + encodeURIComponent(quote);
    $("#tweet-quote").attr("href", url);
  }
}

function getCurrentUrl(){
    var url = window.location.href;
      
      if (url.indexOf("local") > -1)
      {
          url = "";
      }
      
      return url;
}

$(document).ready(function () {

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    $.getJSON(apiKey, parseQuoteData);

    $("#newQuote").on("click", function () {
        $.getJSON(apiKey, parseQuoteData);
    });
});