"use strict"

//Use api for weather
const url = "https://api.openweathermap.org/data/2.5/weather?q=Riyadh,sa&APPID=6195bc4ae6e9b7ebadfd6f440f9aa948";

$.ajax ({

	url: url, 
	success: function(result) {
		console.log(result);
		console.log(result.name);
        //Output the location 
		$("#location").text(result.name);
        //Display the temperature
		let C = Math.round(result.main.temp - 273.1);
		let Celsius = C.toString();
		$("#temperature").text(Celsius);
        //Display the wind
		let windSpeed = Math.round(result.wind.speed / .44704);
		let wind = windSpeed.toString();
		$("#wind").text(wind);
         //Display the sky
		$("#sky").text(result.weather[0].description);
          
       	
        $("button").click(function(){
      $(".box").slideToggle(2000);
  
    });

	}

})