const key = 'eb873442883aceccb6c924278eef5ad7';

function weatherForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key +'&cnt=5')  
    .then(function(resp) {
        return resp.json() 
    })
    .then(function(data) {
        console.log('--->'+(JSON.stringify(data)));
        drawWeather(data);
        console.log(data)
    })
    .catch(function() {
      
    });
}

function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    var description = d.weather[0].description; 
  
    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name+' '+d.sys.country;
    var iconcode = d.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);
 
   
}
document.addEventListener("DOMContentLoaded", () => {
    // Handling button click
    document.querySelector(".search-button-1").addEventListener("click", () => {

        const searchedCity = document.querySelector('.search-country-input');

        console.log(searchedCity.value);
     
        if(searchedCity.value){
            weatherForecast(searchedCity.value);
        }   
        searchedCity.value = '';   

   }) 
 });





$('#click-me').click(function() {
    var height = $("#this").height();
    if( height > 0 ) {
        $('#this').css('height','0');
    } else {
        var clone = $('#this').clone()
                    .css({'position':'absolute','visibility':'hidden','height':'auto'})
                    .addClass('slideClone')
                    .appendTo('body');
        var newHeight = $(".slideClone").height();
        $(".slideClone").remove();

        $('#this').css('height',newHeight + 'px');
    }
});