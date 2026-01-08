// Creating the strings.
const city = "Delhi";
const temp = "30°C";

// Using the value (string) of the variables using template literals
let text = `City : ${city}, Temp : ${temp}`;

// Added the string in the html element dynamically.
document.getElementById("weather").innerHTML = text;

//This function is used to displaying the fetched data in the browser.
function displayData (weatherData)
{
  // Accessing the main div of the html document.
  let parent = document.getElementById("parent");

  /* 
    All the fatched data are stored in different variables, to access them as the array elements and display them within a loop, using 
    the index number of the elements.
  */

  let latitude = weatherData.latitude;

  let longitude = weatherData.longitude;

  let timezone = weatherData.timezone;

  let time = ((weatherData.current.time) + (weatherData.current_units.time));

  let interval = ((weatherData.current.interval) + (weatherData.current_units.interval));

  let temperature = ((weatherData.current.temperature_2m) + (weatherData.current_units.temperature_2m));

  // Creating the array with the variables.
  let A = [latitude, longitude, timezone, time, interval, temperature];

  // Calculating the length of the array.
  let length = A.length;

  // Initializing the loop counter
  let i = 0;
  while (i < length)
  {
    // Creating the div element within the main div.
    let child = document.createElement("div");

    // Adding the content of the variables which are used as the elements in the array, to the child div dynamically.
    child.innerHTML = A[i];
    parent.appendChild(child);

    // Update the loop counter.
    i = (i + 1);
  }
}

// The keyword async before a function, that means the function will return a promise. 
async function fetchData() 
{
  // Here the try-catch block is used to handle the error (if there) during the fetching of the data.

  /*
    The try-catch block gives the flexibility to execute the program, if there any error occurs in the try block this part will be skipped, 
    the catch block will be executed and it will throw any message of error instead of terminating the program. 
  */
  try 
  {
    // Requesting to the web server to fetch the data from the API.
    // The await is the keyword, is used to wait for a promise to resolve.
    let ifTrue = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m');
    console.log(ifTrue);

    // The data is fetched successfully.
    let data = await ifTrue.json();
    console.log(data);

    // Call the displayData function, to display the fetched data to the user.
    displayData(data);
  } 

  // This part is optional, if there is any error during the fetching data, this part will throw the error to the user.
  catch (error) 
  {
    // The error message will display in the console.
    console.error('Error:', error);
  }
}

// Call the function
fetchData();
