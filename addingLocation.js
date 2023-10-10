// Asynchronously retrieves the weather and displays it
async function getAndDisplayWeather() {
    const currentWeather = await retrieveWeather();
   displayWeather(currentWeather);
}

// Function to asynchronously retrieve the weather from an API
async function retrieveWeather() {
    // Modify the API URL to include the user's chosen location
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";


    try {
        // Send a GET request to the weather API. Await the response.
        // Declare a variable to store the HTTP response
        const response = await fetch(apiUrl, {
            headers: {
                Accept: "application/json",
            },
        });

        // Check if the response failed
        if (!response.ok) {
            console.error(`Status: ${response.status}`);
            console.error(`Text: ${await response.text()}`);
            return;
        }

        // Try to parse the response as JSON
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching or parsing data:", error);
    }
        console.log("API Data:", data);
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
                weatherElement.textContent = "Mainly clear, partly cloudy, and overcast.";
                body.style.backgroundImage = 'url("https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg")';
                break;
            case 45:
            case 48:
                weatherElement.textContent = "Fog and freezing fog.";
                body.style.backgroundImage = 'url("https://cdn.britannica.com/66/123866-004-7745DE00/Rime-trees-Black-Forest-Germany.jpg")';
                break;
            case 51:
            case 53:
            case 55:
                weatherElement.textContent = "Drizzle: light, moderate, and dense intensity.";
                body.style.backgroundImage = 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fnewsmobile.in%2Farticles%2F2019%2F05%2F16%2Flight-drizzle-in-delhi-proves-a-boon-improves-air-quality%2F&psig=AOvVaw0dzlQPMY3wgUlZdKXoIzuj&ust=1696927307944000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMDauv3I6IEDFQAAAAAdAAAAABAE")';
                break;
            case 56:
            case 57:
                weatherElement.textContent = "Freezing drizzle: light and dense intensity.";
                body.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef.bbci.com%2Fnews%2F304%2Fmcs%2Fmedia%2Fimages%2F50584000%2Fjpg%2F_50584322_010905211-1.jpg&tbnid=k_uITXAyzV-n2M&vet=12ahUKEwjXuueQyeiBAxXBsEwKHcglBxoQMyheegUIARDIAg..i&imgrefurl=https%3A%2F%2Fwww.cbc.ca%2Fnews%2Fcanada%2Fottawa%2Ffreezing-rain-expected-sunday-and-monday-1.5004037&docid=7A_lXfpHvpNMhM&w=780&h=439&q=freezing%20drizzle%20image&client=safari&ved=2ahUKEwjXuueQyeiBAxXBsEwKHcglBxoQMyheegUIARDIAg")';
                break;
            case 61:
            case 63:
            case 65:
                weatherElement.textContent = "Rain: Slight, moderate and heavy intensity.";
                body.style.backgroundImage = 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chinimandi.com%2Fmoderate-to-heavy-rain-likely-to-occur-in-mumbai-today-bmc-officials%2F&psig=AOvVaw1maABBI0Uw-te_fHYsFkT8&ust=1696927430947000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjblbnJ6IEDFQAAAAAdAAAAABAE")';
                break;
            case 66:
            case 67:
                weatherElement.textContent = "Freezing rain: light and heavy intensity.";
                body.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef.bbci.com%2Fnews%2F304%2Fmcs%2Fmedia%2Fimages%2F50584000%2Fjpg%2F_50584322_010905211-1.jpg&tbnid=Nrwoz8ypQ3WQrM&vet=12ahUKEwjc-43RyeiBAxWDnCcCHQ-wDakQMyg_egUIARCIAg..i&imgrefurl=https%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fworld-europe-12081651&docid=roBzrPbTyujgFM&w=304&h=171&q=freezing%20rain&client=safari&ved=2ahUKEwjc-43RyeiBAxWDnCcCHQ-wDakQMyg_egUIARCIAg")';
                break;
            case 71:
            case 73:
            case 75:
                weatherElement.textContent = "Snow fall: slight, moderate and heavy intensity.";
                body.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fkashmirreader.com%2Fwp-content%2Fuploads%2F2022%2F01%2FMeT-predicting-snow-spells.jpg%3Ffit%3D700%252C400%26ssl%3D1&tbnid=0FxecKTCe8xQIM&vet=12ahUKEwiw55zyyeiBAxWBrEwKHTSSAmIQMygaegUIARCVAQ..i&imgrefurl=https%3A%2F%2Fkashmirreader.com%2F2022%2F01%2F23%2Fmet-predicts-moderate-to-heavy-snow%2F&docid=Gd_WnW6-FSa12M&w=700&h=400&itg=1&q=moderate%20snowfall&client=safari&ved=2ahUKEwiw55zyyeiBAxWBrEwKHTSSAmIQMygaegUIARCVAQ")';
                break;
            case 77:
                weatherElement.textContent = "Light snow fall.";
                body.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fbeautiful-ultrawide-background-image-light-snowfall-falling-snowdrifts_721662-5495.jpg&tbnid=8sWazNk1c6TDmM&vet=12ahUKEwiGjvmGyuiBAxUXsCcCHUU4BowQMyg9egUIARCPAg..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-ai-image%2Fbeautiful-ultrawide-background-image-light-snowfall-falling-snowdrifts_71071382.htm&docid=uPOOo7agS0PKsM&w=626&h=351&q=light%20snowfall&client=safari&ved=2ahUKEwiGjvmGyuiBAxUXsCcCHUU4BowQMyg9egUIARCPAg")';
                break;
            case 80:
            case 81:
            case 82:
                weatherElement.textContent = "Rain showers: slight, moderate, and violent.";
                body.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.metoffice.gov.uk%2Fbinaries%2Fcontent%2Fgallery%2Fmetofficegovuk%2Fimages%2Fweather%2Flearn-about%2Fweather%2Frain-storm.jpg&tbnid=PRaMiHIXI6XhLM&vet=12ahUKEwiV1NmqyuiBAxX8sCcCHbAkCHUQMygAegQIARBV..i&imgrefurl=https%3A%2F%2Fwww.metoffice.gov.uk%2Fweather%2Flearn-about%2Fweather%2Ftypes-of-weather%2Frain%2Frain-and-showers&docid=AztiNDy2XfIBSM&w=1200&h=800&q=moderate%20rain%20showers&client=safari&ved=2ahUKEwiV1NmqyuiBAxX8sCcCHbAkCHUQMygAegQIARBV")';
                break;
            case 85:
            case 86:
                weatherElement.textContent = "Snow showers slight and heavy.";
                body.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fmmo.aiircdn.com%2F301%2F6390d4f1644ca.jpg&tbnid=rJa6PeXJrdtfuM&vet=12ahUKEwihhvi4yuiBAxUpmicCHdEYBWUQMygKegQIARBn..i&imgrefurl=https%3A%2F%2Fwww.fm104.ie%2Fnews%2Ffm104-news%2Fcountry-facing-heavy-snow-showers-next-week%2F&docid=GTrx2xtrrHxe9M&w=800&h=450&q=heavy%20snow%20showers&client=safari&ved=2ahUKEwihhvi4yuiBAxUpmicCHdEYBWUQMygKegQIARBn")';
                break;
            case 95:
                weatherElement.textContent = "Thunderstorm: Slight or moderate.";
                body.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F62%2F158162-050-9FDE49B4%2Fthunderstorm-and-lightning.jpg%3Fw%3D400%26h%3D300%26c%3Dcrop&tbnid=Kdp1nP7d8lVRzM&vet=12ahUKEwjTgaPGyuiBAxXArycCHZvlDQoQMygKegUIARCIAQ..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fscience%2Fthunderstorm&docid=LGxZi9G6GUy8EM&w=400&h=300&q=thunderstorm&client=safari&ved=2ahUKEwjTgaPGyuiBAxXArycCHZvlDQoQMygKegUIARCIAQ")';
                break;
            case 96:
            case 99:
                weatherElement.textContent = "Thunderstorm with slight and heavy hail.";
                body.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F1200x%2Fb7%2Fe8%2Fca%2Fb7e8ca09dcb5c19f0f67bcffcdaf9e05.jpg&tbnid=Z6L4p5oJZkBiTM&vet=12ahUKEwjV2uTdyuiBAxXQoycCHSyUBwgQMygQegUIARCMAQ..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fhail-storm-kills-and-maims-more-than-11000-birds-in-montana--610589661965966209%2F&docid=NCc47PFAmtZmXM&w=1000&h=667&q=thunderstorm%20with%20hail&client=safari&ved=2ahUKEwjV2uTdyuiBAxXQoycCHSyUBwgQMygQegUIARCMAQ")';
                break;
            default:
                console.error("Unsupported weather code:", weatherCode);
                break;
        }
    } else {
        console.error("Weather data is incomplete.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
  /*const button = document.getElementById("get-weather-button");

  button.addEventListener("click", () => {
    const locationInput = document.getElementById("location-input").value;
    getAndDisplayWeather(locationInput);
  });
  */
  getAndDisplayWeather("");
})