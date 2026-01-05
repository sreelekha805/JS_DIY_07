// Creating the array.
const city = "Delhi";
const temp = "30°C";
let text = `City : ${city}, Temp : ${temp}`;
console.log(text);
document.getElementById("weather").innerHTML = text;

async function fetchData() 
{
  try 
  {
    // Requesting to the web server to fetch the data from the API.
    let ifTrue = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m');
    console.log(ifTrue);

    // The data is fetched successfully.
    let data = await ifTrue.json();
    console.log(data);

    displayData(data);
  } 
  catch (error) 
  {
    console.error('Error:', error);
  }
}

//Displaying the data in the browser.
function displayData (weatherData)
{
  // Accessing the main div of the html document.
  let parent = document.getElementById("parent");

  let latitude = weatherData.latitude;

  let longitude = weatherData.longitude;

  let timezone = weatherData.timezone;

  let time = ((weatherData.current.time) + (weatherData.current_units.time));

  let interval = ((weatherData.current.interval) + (weatherData.current_units.interval));

  let temperature = ((weatherData.current.temperature_2m) + (weatherData.current_units.temperature_2m));

  // Creating the array with the variables.
  let A = [latitude, longitude, timezone, time, interval, temperature];

  // Calculating the length of the array
  let length = A.length;

  // Initializing the loop counter
  let i = 0;
  while (i < length)
  {
    // Creating the div element within the main div.
    let child = document.createElement("div");
    child.innerHTML = A[i];
    parent.appendChild(child);
    i = (i + 1);
  }
}

fetchData();
