const apikey = "7f408dc13a02d94f2c5e8dc64bed3ff5";
const cityname = document.querySelector(".search-input");
const searchbtn = document.querySelector(".search-btn");
const image = document.querySelector(".weather-icon");



async function checkweather(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response = await fetch(apiurl);
    const data = await response.json();

    console.log(data);
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".percentage").innerHTML = data.main.humidity + "%";
    if (data.weather[0].main == "Clouds") {
        image.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Snow") {
        image.src = "images/snow.png"
    }
    else if (data.weather[0].main == "Rain") {
        image.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Clear") {
        image.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Mist") {
        image.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        image.src = "images/drizzle.png"
    }
}

searchbtn.addEventListener("click", () => {
    if(!cityname.value) return;
    checkweather(cityname.value);
    cityname.value = "";
});
checkweather("berlin");
