//Wait for DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", (event) => {
  // Add an event listener to the button
const getWeatherButton = document.getElementById("get-weather-button");
  getWeatherButton.addEventListener("click", async () => {
  //Get the location input from the user
  const locationInput = document.getElementById("location-input");
  const location = locationInput.value;
    if (location) {
    //if a location is provided, call the function to get and display weather
    await getAndDisplayWeather(location);
  }
});
});

// Update the getAndDisplayWeather function to accept a location parameter
async function getAndDisplayWeather(location) {
  //Retriever the current weather for the provided location
  const currentWeather = await retrieveWeather(location);
  //Display the current weather
  displayWeather(currentWeather);
}

// Function to asynchronously retrieve the current weather from an API using the location
async function retrieveWeather(location) {
  // Send a GET request to the geocoding API with the location name
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      location
    )}&count=10&language=en&format=json`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  // Check if the response failed, and if so, log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
  // Parse the JSON response to get location information
  const data = await response.json();

  // Extract the latitude and longitude of the first result
  const latitude = data.results[0].latitude;
  const longitude = data.results[0].longitude;

  // Send a request to the weather API using the retrieved coordinates
  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!weatherResponse.ok) {
    //Log an error and halt app if weather retriveal fails
    console.error(`Status: ${weatherResponse.status}`);
    console.error(`Text: ${await weatherResponse.text()}`);
    return;
  }

  // Return the parsed JSON from the weather response (which contains the weather object)
  const weatherData = await weatherResponse.json();
  return weatherData;
}
// Function to update the DOM with the provided weather information
function displayWeather(currentWeather) {

  const weatherElement = document.getElementById("weather");
  const body = document.body;
  if (currentWeather && currentWeather.current_weather) {
  //Access the weather code and update the displayed information based on the code
    const weatherCode = currentWeather.current_weather.weathercode;

    switch (weatherCode) {
      //Cases for different weather codes to update the display and background image
      //Each case sets the weather text and a corresponding background image
      //Default case handles unsupported weather codes and logs an error
      //IF the weather data is incomplete, an error is logged
      case 1:
      case 2:
      case 3:
        weatherElement.textContent =
          "Mainly clear, partly cloudy, and overcast.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg")';
        break;
      case 45:
      case 48:
        weatherElement.textContent = "Fog and freezing fog.";
        body.style.backgroundImage =
          'url("https://cdn.britannica.com/66/123866-004-7745DE00/Rime-trees-Black-Forest-Germany.jpg")';
        break;
      case 51:
      case 53:
      case 55:
        weatherElement.textContent =
          "Drizzle: light, moderate, and dense intensity.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/7002970/pexels-photo-7002970.jpeg?auto=compress&cs=tinysrgb&w=600")';
        break;
      case 56:
      case 57:
        weatherElement.textContent =
          "Freezing drizzle: light and dense intensity.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/301568/pexels-photo-301568.jpeg?auto=compress&cs=tinysrgb&w=600")';
        break;
      case 61:
      case 63:
      case 65:
        weatherElement.textContent =
          "Rain: Slight, moderate and heavy intensity.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")';
        break;
      case 66:
      case 67:
        weatherElement.textContent =
          "Freezing rain: light and heavy intensity.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")';
        break;
      case 71:
      case 73:
      case 75:
        weatherElement.textContent =
          "Snow fall: slight, moderate and heavy intensity.";
        body.style.backgroundImage =
          'url("")';
        break;
      case 77:
        weatherElement.textContent = "Light snow fall.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/1694156/pexels-photo-1694156.jpeg?auto=compress&cs=tinysrgb&w=600")';
        break;
      case 80:
      case 81:
      case 82:
        weatherElement.textContent =
          "Rain showers: slight, moderate, and violent.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")';
        break;
      case 85:
      case 86:
        weatherElement.textContent = "Snow showers slight and heavy.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/1694156/pexels-photo-1694156.jpeg?auto=compress&cs=tinysrgb&w=600")';
        break;
      case 95:
        weatherElement.textContent = "Thunderstorm: Slight or moderate.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=600")';
        break;
      case 96:
      case 99:
        weatherElement.textContent = "Thunderstorm with slight and heavy hail.";
        body.style.backgroundImage =
          'url("https://images.pexels.com/photos/8237250/pexels-photo-8237250.jpeg?auto=compress&cs=tinysrgb&w=600")';
        break;
      default:
        console.error("Unsupported weather code:", weatherCode);
        break;
    }    } else {
        console.error("Weather data is incomplete.");
    }
  }