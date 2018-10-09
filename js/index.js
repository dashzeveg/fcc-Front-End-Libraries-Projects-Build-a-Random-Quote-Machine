$(document).ready(function() {
	getQuote();
	$("#new-quote").on("click", function(){
		var color=getRandomColor();
		$('.color0').css('background', color);
		$('.color1').css('color', color);
		$('body').css('background', color);
		getQuote();
	});
	$("#tweet-quote").on("click", function(){
		currentQuote=$('#text').text();
		currentAuthor=$('#author').text();
		//window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	});
});

function getQuote(){
  $.getJSON( "https://talaikis.com/api/quotes/random", function( data ) {
    //alert( data.quote );
			currentQuote = data.quote;
			currentAuthor = data.author;		
      $('#text').hide();
      $('#text').text(currentQuote);
      $('#text').show(500); 
      $('#author').hide();
      $('#author').text(currentAuthor);
      $('#author').show(500);
  });
  /*
	$.ajax({
		headers: {
			"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
		success: function(response) {
			var r = JSON.parse(response);
			currentQuote = r.quote;
			currentAuthor = r.author;		
      $('#quote').hide();
      $('#quote').text(currentQuote);
      $('#quote').show(500); 
      $('#author').hide();
      $('#author').text(currentAuthor);
      $('#author').show(500);
		}
	});
  */
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}