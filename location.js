async function retrieveCoordinates() {
    document.addEventListener("click", getLocation() {
        
    })
    //Send a GET request to the geocoding API and await the response
    //Declare a variable to store the JSON response
    const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=&count=1&language=en&format=json",
    )
    console.log(response)
}