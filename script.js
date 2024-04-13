const apikey = "7f408dc13a02d94f2c5e8dc64bed3ff5";
const cityname = document.querySelector(".search-input");
const searchbtn = document.querySelector(".search-btn");
const image = document.querySelector(".weather-icon");



async function checkweather(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response = await fetch(apiurl);
    const data = await response.json();
    if(city.toLowerCase() === "nandini")
    {
        document.querySelector(".name").innerText = "Nandini";
        document.querySelector(".temp").innerText = "1000" + "°C";
        document.querySelector(".speed").innerText = "948" + " km/h";
        document.querySelector(".percentage").innerText = "100" + "%";
        image.src = "images/clouds.png";
        return;
    }

    console.log(data);
    document.querySelector(".name").innerText = data.name;
    document.querySelector(".temp").innerText = data.main.temp + "°C";
    document.querySelector(".speed").innerText = data.wind.speed + " km/h";
    document.querySelector(".percentage").innerText = data.main.humidity + "%";
    function getWeatherImage() {
        switch(data.weather[0].main) {
            case "Clouds":
                return "images/clouds.png";
            case "Snow":
                return "images/snow.png";
            case "Rain":
                return "images/rain.png";
            case "Clear":
                return "images/clear.png";
            case "Mist":
                return "images/mist.png";
            case "Drizzle":
                return "images/drizzle.png";
            default:
                return "images/clear.png";
        }
    }
    image.src = getWeatherImage();
}

searchbtn.addEventListener("click", () => {
    if(!cityname.value) return;
    checkweather(cityname.value);
    cityname.value = "";
});
cityname.addEventListener("keypress", (e) =>{
    if(e.key === 'Enter')
    {
        if(!cityname.value) return;
        checkweather(cityname.value);
        cityname.value = "";
    }
});
checkweather("berlin");
