// Asynchronously retrieves the weather and displays it
async function getAndDisplayWeather() {
    const currentWeather = await retrieveWeather();
    displayWeather(currentWeather);
  }
  // Function to asynchronously retrieve the current London from an API
async function retrieveWeather() {
    // Send a GET request to the weather API. Await the response.
    // Declare a variable to store the HTTP response
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current_weather=true", {
      headers: {
        Accept: "application/json",
      },
    });
// Check if the response failed, and if so log an error and halt the app
if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
  // return the parsed JSON from the response (which contains the weather object)
  const data = await response.json();
  return data;
}

// Function to update the DOM with the provided weather
function displayWeather(currentWeather) {
  const weatherElement = document.getElementById("weather");
  const body = document.body;
  if (currentWeather.current_weather.weathercode === 2 ||
    currentWeather.current_weather.weathercode === 1 ||
    currentWeather.current_weather.weathercode === 3) {
    weatherElement.textContent = "Mainly clear, partly cloudy, and overcast.";
    body.style.backgroundImage = 'url("https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg")';
  } else if {
    
  }
  }
// Waits for the DOM to be fully loaded and then displays an initial weather.

document.addEventListener("DOMContentLoaded", getAndDisplayWeather);




