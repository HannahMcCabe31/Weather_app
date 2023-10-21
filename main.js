// Asynchronously retrieves the weather and displays it
async function getAndDisplayWeather() {
  const currentWeather = await retrieveWeather();
  displayWeather(currentWeather);
}
// Function to asynchronously retrieve the current London from an API
async function retrieveWeather() {
  // Send a GET request to the weather API. Await the response.
  // Declare a variable to store the HTTP response
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current_weather=true",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  // Check if the response failed, and if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
  // return the parsed JSON from the response (which contains the weather object)
  const data = await response.json();
  console.log(data)
  return data;
}

// Function to update the DOM with the provided weather
function displayWeather(currentWeather) {
  const weatherElement = document.getElementById("weather");
  const body = document.body;
  if (currentWeather && currentWeather.current_weather) {
    const weatherCode = currentWeather.current_weather.weathercode;

    switch (weatherCode) {
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
          'url("")';
        break;
      case 56:
      case 57:
        weatherElement.textContent =
          "Freezing drizzle: light and dense intensity.";
        body.style.backgroundImage =
          'url("")';
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
          'url("")';
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
          'url("")';
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
          'url("")';
        break;
      case 95:
        weatherElement.textContent = "Thunderstorm: Slight or moderate.";
        body.style.backgroundImage =
          'url("")';
        break;
      case 96:
      case 99:
        weatherElement.textContent = "Thunderstorm with slight and heavy hail.";
        body.style.backgroundImage =
          'url("")';
        break;
      default:
        console.error("Unsupported weather code:", weatherCode);
        break;
    }    } else {
        console.error("Weather data is incomplete.");
    }
  }
// Waits for the DOM to be fully loaded and then displays an initial weather.

document.addEventListener("DOMContentLoaded", getAndDisplayWeather);