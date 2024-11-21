const getWeather = async () => {
  const display = document.getElementById('display');
  const result = document.getElementById('result');

  if (display.value.trim() === "") {
    alert("Please fill the form");
  } else {
    try {
      const city = display.value;
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e151c0dce48c44ab85175325242710&q=${city}`);
      const weather = await response.json();

      console.log(weather);

      result.innerHTML = `
        <div class="col col3">
          <img src="${weather.current.condition.icon}" alt="Weather Icon">
        </div>
        <div class="col col4">
          <h3>Climate Condition - ${weather.current.condition.text}</h3>
          <p>Temperature - ${weather.current.temp_c}°C</p>
        </div>
        <div class="col col5">
          <h3>City Name - ${weather.location.name}</h3>
          <h3>Country Name - ${weather.location.country}</h3>
        </div>
        <div class="col col6">
          <h3>Time - ${weather.location.localtime}</h3>
          <h3>Timezone - ${weather.location.tz_id}</h3>
        </div>
        <div class="col col7">
          <h3>Humidity - ${weather.current.humidity}%</h3>
          <p>Latitude - ${weather.location.lat}</p>
          <p>Longitude - ${weather.location.lon}</p>
        </div>
      `;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
};
