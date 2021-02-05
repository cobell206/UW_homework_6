var city = "Seattle"
var API_key = "5bf87ae6a28d56131d647d77e7271c72"

// Function to fetch city and populate data
var get_city = function(city) {

    // Url to fetch with city
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + API_key

    // Fetch weather data
    fetch(url) 
    .then(function(reponse) {
        if (reponse.status === 200) {
            return reponse.json()
        }
        else {
            throw new Error("Didn't work")
        }
        
    })
    .then(function(data) {
        
        $("#current_city").text("Current city: " + city)
        $("#temp").text("Temperature: " + data.list[0].main.temp + " F")
        $("#humidity").text("Humidity: " + data.list[0].main.humidity + " %")
        $("#wind_speed").text("Wind Speed: " + data.list[0].wind.speed + " MPH")
        day1 = data.list[7]
        day2 = data.list[15]
        day3 = data.list[23]
        day4 = data.list[31]
        day5 = data.list[39]

        for (var i=0; i<5; i++) {
            day_ = data.list[(i+1)*8 - 1].dt_txt.slice(0,10)
            $("#day" + i).text(day_)
        }
        console.log(data.list);
    })
    
}

console.log(get_city(city));

// Button click for searching a city
$("#search_button").on("click", function() {
    get_city($("#city_input").val())
})

// Button for default cities
$(".city_btn").on("click", function() {
    get_city($(this).attr("data-value"))
})
